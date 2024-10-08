import { cn } from '@/lib/utils'
import { Icons } from '../common/icons'
import { Button } from '../ui/button'
import { Skeleton } from '../ui/skeleton'
import { useCallback, useEffect, useRef, useState } from 'react'
import { useCoins } from '@/hooks/use-coins'
import { CoinDetails } from '@/types/coins'
import { Badge } from '../ui/badge'
import { CoinChart } from './coin-chart'
import { CustomImage } from '../common/custom-image'
import { CoinOverviewLoading } from './coin-overview-loading'
import { FetchingErrorAlert } from '../common/fetching-error-alert'

interface CoinOverviewProps {
  coin: string
  onOpenChange: () => void
  open: boolean
  isFavorite: boolean
  onFavoriteStateToggle: () => void
  currency: string
}

export interface CoinOverviewState {
  details?: CoinDetails
  loading: boolean
  error?: boolean
  chartData?: { average: number; label: string }[]
  chartDataLoading?: boolean
  chartDataError?: boolean
}

export const CoinOverview = ({
  coin,
  onOpenChange,
  open,
  isFavorite,
  onFavoriteStateToggle,
  currency
}: CoinOverviewProps) => {
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

      const details = await getCoinChartData({ id: coin, days: 180, signal, currency })

      // Récupérer le prix total pour chaque occurrence de trente jours et s'assurer que tous les 6 derniers mois sont présents

      const lastSixMonths = Array.from({ length: 6 }, (_, i) => {
        const date = new Date()
        date.setMonth(date.getMonth() - i)
        return date.toLocaleString('en-EN', { month: 'short' })
      }).reverse()

      const monthlyData = details.prices.reduce(
        (acc, [timestamp, price], index) => {
          const monthIndex = Math.floor(index / 30)
          const monthLabel = new Date(timestamp).toLocaleString('en-EN', { month: 'short' })
          if (!acc[monthIndex]) {
            acc[monthIndex] = {
              total: 0,
              count: 0,
              label: monthLabel
            }
          }
          acc[monthIndex].total += price
          acc[monthIndex].count++
          return acc
        },
        {} as Record<number, { total: number; count: number; label: string }>
      )

      const chartData = lastSixMonths.map(month => {
        const monthData = Object.values(monthlyData).find(data => data.label === month)
        return {
          average: monthData ? monthData.total / monthData.count : 0,
          label: month
        }
      })

      setState(prev => ({ ...prev, chartData, chartDataLoading: false }))
    } catch (error) {
      if (!signal?.aborted) {
        setState(prev => ({ ...prev, chartDataLoading: false, chartDataError: true }))
      }
    }
  }

  const init = async (signal: AbortSignal) => {
    const success = await getCoinDetails(signal)

    if (success) getChartData(signal)
  }

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (dialogRef.current && !dialogRef.current.contains(event.target as Node)) {
      onOpenChange()
    }
  }, [])

  const handleEscapeKey = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Escape' && open) {
        onOpenChange()
      }
    },
    [open]
  )

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)

    const controller = new AbortController()

    init(controller.signal)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)

      controller.abort()
    }
  }, [])

  useEffect(() => {
    document.addEventListener('keydown', handleEscapeKey)

    return () => document.removeEventListener('keydown', handleEscapeKey)
  }, [open])

  return (
    <div
      className={cn(
        'absolute inset-0 z-50 flex max-h-screen w-screen justify-end bg-tokena-dark/30 p-5 transition-all duration-300 dark:bg-tokena-dark/60',
        open ? 'translate-x-0' : 'translate-x-full'
      )}
    >
      <div
        ref={dialogRef}
        className={cn(
          'flex h-full w-full flex-col gap-6 rounded-2xl bg-tokena-white p-5 dark:bg-tokena-dark-blue md:w-3/4 xl:w-2/5',
          state.error && 'items-center justify-center'
        )}
        role='dialog'
      >
        {state.loading ? (
          <CoinOverviewLoading onOpenChange={onOpenChange} />
        ) : state.error ? (
          <FetchingErrorAlert retry={() => getCoinDetails()} />
        ) : (
          state.details && (
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
                  <Skeleton className='h-56 w-full' />
                ) : state.chartData ? (
                  <CoinChart currency={currency} data={state.chartData} />
                ) : (
                  <FetchingErrorAlert
                    title='Erreur lors de la récupération des statistiques.'
                    retry={() => getChartData()}
                  />
                )}

                <div className='space-y-6'>
                  <div className='flex items-center justify-between text-sm font-semibold'>
                    <div className='flex items-center justify-between space-x-1.5 dark:text-tokena-light-gray'>
                      <CustomImage
                        src={state.details.image.large}
                        width={32}
                        height={32}
                        className='size-8 rounded-full'
                        alt={`${state.details.name}'s image`}
                      />

                      <span>
                        {state.details.name} ({state.details.symbol.toUpperCase()}/USD)
                      </span>
                    </div>

                    <span className='text-sm font-semibold uppercase'>
                      {currency in state.details.market_data.current_price ? (
                        `${currency} ${state.details.market_data.current_price[currency]}`
                      ) : (
                        <Skeleton className='h-5 w-14' />
                      )}
                    </span>
                  </div>

                  <div className='space-y-1.5 text-sm font-medium *:flex *:items-center *:justify-between'>
                    <div>
                      <span className='text-tokena-dark dark:text-tokena-light-gray'>
                        Crypto Market Rank
                      </span>
                      {state.details.market_cap_rank ? (
                        <Badge>Rank #{state.details.market_cap_rank}</Badge>
                      ) : (
                        <Skeleton className='h-5 w-14' />
                      )}
                    </div>

                    <div>
                      <span className='text-tokena-dark dark:text-tokena-light-gray'>
                        Market cap
                      </span>
                      <span className='uppercase text-tokena-dark-gray dark:text-tokena-gray'>
                        {currency in state.details.market_data.market_cap ? (
                          `${currency} ${state.details.market_data.market_cap[currency]}`
                        ) : (
                          <Skeleton className='h-5 w-14' />
                        )}
                      </span>
                    </div>
                    <div>
                      <span className='text-tokena-dark dark:text-tokena-light-gray'>
                        Circulating supply
                      </span>
                      <span className='text-tokena-dark-gray dark:text-tokena-gray'>
                        {state.details.market_data.circulating_supply ?? (
                          <Skeleton className='h-5 w-14' />
                        )}
                      </span>
                    </div>
                    <div>
                      <span className='text-tokena-dark dark:text-tokena-light-gray'>
                        24 Hour High
                      </span>

                      <span className='uppercase text-tokena-dark-gray dark:text-tokena-gray'>
                        {currency in state.details.market_data.high_24h ? (
                          `${currency} ${state.details.market_data.high_24h[currency]}`
                        ) : (
                          <Skeleton className='h-5 w-14' />
                        )}
                      </span>
                    </div>
                    <div>
                      <span className='text-tokena-dark dark:text-tokena-light-gray'>
                        24 Hour Low
                      </span>
                      <span className='uppercase text-tokena-dark-gray dark:text-tokena-gray'>
                        {currency in state.details.market_data.low_24h ? (
                          `${currency} ${state.details.market_data.low_24h[currency]}`
                        ) : (
                          <Skeleton className='h-5 w-14' />
                        )}
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

                  <Button
                    variant='primary'
                    onClick={onFavoriteStateToggle}
                    className={cn(isFavorite && 'bg-tokena-blue text-tokena-white')}
                  >
                    <Icons.star className={cn('size-4.5', isFavorite && '!text-tokena-white')} />
                    <span>{isFavorite ? 'Remove from favorites' : 'Add to favorites'}</span>
                  </Button>
                </div>
              </main>
            </>
          )
        )}
      </div>
    </div>
  )
}
