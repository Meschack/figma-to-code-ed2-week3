'use client'

import { Icons } from '@/components/common/icons'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent
} from '@/components/ui/chart'
import { Input } from '@/components/ui/input'
import { Skeleton } from '@/components/ui/skeleton'
import { useCoins } from '@/hooks/use-coins'
import { cn } from '@/lib/utils'
import { Coin, CoinDetails } from '@/types/coins'
import { useEffect, useRef, useState } from 'react'
import { LineChart, CartesianGrid, XAxis, Line, YAxis } from 'recharts'

interface Props {
  coins: Coin[]
}

interface State {
  selectedCoin?: string
}

export const DashboardPage = ({ coins }: Props) => {
  const [state, setState] = useState<State>({})

  const onCoinClick = (coin?: string) => {
    setState(prev => ({ ...prev, selectedCoin: coin }))
  }

  return (
    <>
      <div className='w-full'>
        <div>Trendings</div>
        <div className='space-y-8'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center rounded-lg border ps-5'>
              <Icons.search className='text-tokena-dark-gray' />
              <Input
                className='rounded-lg border-none outline-none ring-0'
                placeholder='Search coin'
              />
            </div>
            <div className='rounded-lg border px-5'>Catégories</div>
          </div>
          <div className='rounded-xl border border-tokena-gray dark:border-tokena-dark-gray'>
            <div className='flex items-center justify-between p-4'>
              <span className='text-base font-semibold text-tokena-dark dark:text-tokena-light-gray'>
                Market
              </span>
              <Button variant='outline' size='icon'>
                <Icons.ellipsis className='dark:!text-tokena-light-gray' />
              </Button>
            </div>
            <div className='overflow-x-auto'>
              <table className='w-full border-collapse'>
                <thead>
                  <tr className='bg-tokena-light-gray *:px-6 *:py-3 *:text-left *:text-sm *:font-normal *:text-tokena-dark dark:bg-tokena-light-gray/10 *:dark:text-tokena-light-gray'>
                    <th></th>
                    <th>#</th>
                    <th>Coin</th>
                    <th>Prix</th>
                    <th>24h</th>
                    <th>24h Volume</th>
                    <th>Market Cap</th>
                    <th className='text-center'>Last 7 Days</th>
                  </tr>
                </thead>
                <tbody>
                  {coins.map((coin, index) => (
                    <tr
                      key={coin.id}
                      className='border-b *:space-x-2.5 *:px-6 *:py-3 *:text-left *:font-medium *:text-tokena-dark hover:bg-tokena-light-gray *:dark:text-tokena-light-gray hover:dark:bg-tokena-dark-blue-secondary'
                    >
                      <td className='group relative'>
                        <input
                          type='checkbox'
                          className='absolute inset-0 size-full appearance-none'
                        />
                        <Icons.star className='size-5 group-has-[:checked]:fill-tokena-yellow group-has-[:checked]:text-tokena-yellow dark:text-tokena-white' />
                      </td>
                      <td className='text-sm dark:text-tokena-light-gray'>{index + 1}</td>
                      <td className='flex cursor-pointer' onClick={() => onCoinClick(coin.id)}>
                        <img
                          src={coin.image}
                          alt={coin.name}
                          className='size-6'
                          width={24}
                          height={24}
                        />
                        <p className='inline-flex h-6 items-center whitespace-nowrap text-sm'>
                          {coin.name}-{coin.symbol.toUpperCase()}
                        </p>
                      </td>
                      <td className='text-sm'>${coin.current_price.toLocaleString('en')}</td>
                      <td>
                        <Badge
                          variant={coin.price_change_percentage_24h > 0 ? 'success' : 'destructive'}
                          size='lg'
                        >
                          {coin.price_change_percentage_24h.toFixed(2)}%
                        </Badge>
                      </td>
                      <td className='text-sm'>${coin.total_volume.toLocaleString('en')}</td>
                      <td className='text-sm'>${coin.market_cap.toLocaleString('en')}</td>
                      <td className='text-center text-sm'>Graphique</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {state.selectedCoin && (
          <CoinOverview
            coin={state.selectedCoin}
            open={!!state.selectedCoin}
            onOpenChange={() => onCoinClick()}
          />
        )}
      </div>
    </>
  )
}

interface CoinOverviewProps {
  coin: string
  onOpenChange: () => void
  open: boolean
}

interface CoinOverviewState {
  details?: CoinDetails
  loading: boolean
  error?: boolean
  chartData?: { average: number; label: string }[]
  chartDataLoading?: boolean
  chartDataError?: boolean
}

export const CoinOverview = ({ coin, onOpenChange, open }: CoinOverviewProps) => {
  const [state, setState] = useState<CoinOverviewState>({ loading: true })
  const dialogRef = useRef<HTMLDivElement>(null)

  const { getDetails, getCoinChartData } = useCoins()

  const getCoinDetails = async (signal?: AbortSignal) => {
    try {
      setState(prev => ({ ...prev, loading: true, error: false }))

      const details = await getDetails(coin, signal)

      setState(prev => ({ ...prev, details, loading: false }))

      return true
    } catch (error) {
      if (!signal?.aborted) {
        setState(prev => ({ ...prev, loading: false, error: true }))
      }
    }
  }

  const getChartData = async (signal?: AbortSignal) => {
    try {
      setState(prev => ({ ...prev, chartDataLoading: true, chartDataError: false }))

      const details = await getCoinChartData(coin, 179, signal)

      // Récupérer le prix total pour chaque occurence de trente jours

      const monthlyData = details.prices.reduce(
        (acc, [timestamp, price], index) => {
          const monthIndex = Math.floor(index / 30)
          if (!acc[monthIndex]) {
            acc[monthIndex] = {
              total: 0,
              count: 0,
              label: new Date(timestamp).toLocaleString('en-EN', { month: 'short' })
            }
          }
          acc[monthIndex].total += price
          acc[monthIndex].count++
          return acc
        },
        [] as Array<{ total: number; count: number; label: string }>
      )

      const chartData = monthlyData.map(({ total, count, label }) => ({
        average: total / count,
        label
      }))

      setState(prev => ({ ...prev, chartData, chartDataLoading: false }))
    } catch (error) {
      if (!signal?.aborted) {
        setState(prev => ({ ...prev, chartDataLoading: false, chartDataError: true }))
      }
    }
  }

  const init = async (signal: AbortSignal) => {
    const success = await getCoinDetails(signal)

    if (success) {
      getChartData(signal)
    }
  }

  useEffect(() => {
    const controller = new AbortController()

    init(controller.signal)

    return () => controller.abort()
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dialogRef.current && !dialogRef.current.contains(event.target as Node)) {
        onOpenChange()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [onOpenChange])

  return (
    <div
      className={cn(
        'absolute inset-0 flex max-h-screen w-screen justify-end bg-tokena-dark/30 p-5 transition-all duration-300 dark:bg-tokena-dark/60',
        open ? 'translate-x-0' : 'translate-x-full'
      )}
    >
      <div
        ref={dialogRef}
        className='flex h-full w-full flex-col gap-6 rounded-2xl bg-tokena-white p-5 dark:bg-tokena-dark-blue md:w-2/3 xl:w-1/3'
        role='dialog'
      >
        {state.loading && <p>Loading...</p>}

        {state.error && (
          <div>
            Erreur lors du chargement.{' '}
            <Button variant='link' className='p-0' onClick={() => getCoinDetails()}>
              Réessayer
            </Button>
          </div>
        )}

        {state.details && (
          <>
            <header className='flex items-center justify-between'>
              <span className='text-base font-bold dark:text-tokena-white'>
                {state.details.name}
              </span>

              <Button variant='secondary' onClick={onOpenChange} size='icon'>
                <Icons.close className='dark:text-tokena-light-gray' />
              </Button>
            </header>

            <main className='no-scrollbar grow space-y-6 overflow-y-auto'>
              {state.chartDataLoading ? (
                <Skeleton className='h-28 w-full' />
              ) : state.chartData ? (
                <CoinChart data={state.chartData} />
              ) : (
                <p>
                  Erreur lors de la récupération des statistiques.{' '}
                  <Button variant='link' onClick={() => getChartData()}>
                    Réessayer
                  </Button>
                </p>
              )}

              <div className='space-y-6'>
                <div className='flex items-center justify-between text-sm font-semibold'>
                  <div className='flex items-center justify-between space-x-1.5 dark:text-tokena-light-gray'>
                    <img
                      src={state.details.image.large}
                      width={32}
                      height={32}
                      className='size-8'
                      alt={`${state.details.name}'s image`}
                    />

                    <span>
                      {state.details.name} ({state.details.symbol.toUpperCase()}/USD)
                    </span>
                  </div>

                  <span className='text-sm font-semibold'>
                    ${state.details.market_data.current_price['usd'].toLocaleString('en')}
                  </span>
                </div>

                <div className='space-y-1.5 text-sm font-medium *:flex *:items-center *:justify-between'>
                  <div>
                    <span className='text-tokena-dark dark:text-tokena-light-gray'>
                      Crypto Market Rank
                    </span>
                    <Badge>Rank #{state.details.market_cap_rank}</Badge>
                  </div>

                  <div>
                    <span className='text-tokena-dark dark:text-tokena-light-gray'>Market cap</span>
                    <span className='text-tokena-dark-gray dark:text-tokena-gray'>
                      ${state.details.market_data.market_cap['usd'].toLocaleString('en')}
                    </span>
                  </div>
                  <div>
                    <span className='text-tokena-dark dark:text-tokena-light-gray'>
                      Circulating supply
                    </span>
                    <span className='text-tokena-dark-gray dark:text-tokena-gray'>
                      {state.details.market_data.circulating_supply}
                    </span>
                  </div>
                  <div>
                    <span className='text-tokena-dark dark:text-tokena-light-gray'>
                      24 Hour High
                    </span>
                    <span className='text-tokena-dark-gray dark:text-tokena-gray'>
                      ${state.details.market_data.high_24h['usd']}
                    </span>
                  </div>
                  <div>
                    <span className='text-tokena-dark dark:text-tokena-light-gray'>
                      24 Hour Low
                    </span>
                    <span className='text-tokena-dark-gray dark:text-tokena-gray'>
                      ${state.details.market_data.low_24h['usd']}
                    </span>
                  </div>
                </div>

                <div className='space-y-2'>
                  <h3 className='text-sm font-medium dark:text-tokena-light-gray'>Description</h3>

                  <p
                    dangerouslySetInnerHTML={{
                      __html:
                        state.details.description['en'] ??
                        Object.values(state.details.description).at(0)
                    }}
                    className='text-xs text-tokena-dark-gray dark:text-tokena-gray'
                  ></p>
                </div>

                <Button className='group w-full gap-1.5 bg-tokena-blue/[6%] font-medium text-tokena-blue hover:text-tokena-white'>
                  <Icons.star className='size-4.5 !text-tokena-blue group-hover:!text-tokena-white' />
                  <span>Add to favourites</span>
                </Button>
              </div>
            </main>
          </>
        )}
      </div>
    </div>
  )
}

const chartConfig = {
  desktop: {
    label: 'Desktop',
    color: '#00C234'
  },
  average: {
    label: 'Price',
    color: '#00C234'
  },
  label: {
    label: 'Month',
    color: '#00C234'
  }
} satisfies ChartConfig

interface CoinChartProps {
  data: Required<CoinOverviewState['chartData']>
}

const CoinChart = ({ data }: CoinChartProps) => {
  return (
    <ChartContainer className='p-0' config={chartConfig}>
      <LineChart accessibilityLayer data={data}>
        <CartesianGrid />

        <XAxis
          dataKey='label'
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          tickFormatter={value => value.slice(0, 3)}
        />

        <YAxis
          dataKey='average'
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          tickFormatter={value => value.toLocaleString('en')}
        />

        <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />

        <Line dataKey='average' type='linear' stroke='#00C234' strokeWidth={1.5} />
      </LineChart>
    </ChartContainer>
  )
}
