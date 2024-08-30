'use client'

import { CoinOverview } from '@/components/coins/coin-overview'
import { Icons } from '@/components/common/icons'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Skeleton } from '@/components/ui/skeleton'
import { cn } from '@/lib/utils'
import { Coin } from '@/types/coins'
import { parseAsInteger, parseAsString, parseAsStringEnum, useQueryStates } from 'nuqs'
import { useState, useTransition } from 'react'
import { Trending } from './trending'
import { CategorySelector } from './category-selector'
import { SortOptionSelector } from './sort-option-selector'
import { TableItemsLengthSelector } from './table-items-length-selector'
import { CustomImage } from '@/components/common/custom-image'
import { useSidebarStore } from '@/components/layout/mobile-menu'
import { Button } from '@/components/ui/button'
import { Line, LineChart, YAxis } from 'recharts'

interface Props {
  coins: Coin[]
  currency: string
}

interface State {
  selectedCoin?: string
  favoriteRows: string[]
}

const columns = [
  { key: 'id', label: '#' },
  { key: 'coin', label: 'Coin' },
  { key: 'price', label: 'Price' },
  { key: 'price_change_percentage_24h', label: '24h' },
  { key: 'total_volume', label: '24h Volume' },
  { key: 'market_cap', label: 'Market Cap' },
  { key: 'last_seven_days', label: 'Last seven days' }
] as const

export const sortingOptions = [
  { value: 'market_cap_asc', label: 'Market Cap Asc' },
  { value: 'market_cap_desc', label: 'Market Cap Desc' },
  { value: 'volume_asc', label: 'Volume Asc' },
  { value: 'volume_desc', label: 'Volume Desc' },
  { value: 'id_asc', label: 'ID Asc' },
  { value: 'id_desc', label: 'ID Desc' }
] as const

export const DashboardPage = ({ coins, currency }: Props) => {
  const [state, setState] = useState<State>({ favoriteRows: [] })
  const { isOpen: sidebarIsOpen } = useSidebarStore()

  const [isUpdating, startTransition] = useTransition()

  const [searchParams, setSearchParams] = useQueryStates(
    {
      category: parseAsString,
      items: parseAsInteger.withDefault(100),
      sort: parseAsStringEnum([...sortingOptions.map(el => el.value)]).withDefault(
        'market_cap_desc'
      )
    },
    { clearOnDefault: true, history: 'push', shallow: false, startTransition }
  )

  const onCoinClick = (coin?: string) => {
    setState(prev => ({ ...prev, selectedCoin: coin }))
  }

  const handleColumnSelect = (value: string) => {
    setState(prev => ({
      ...prev,
      favoriteRows: prev.favoriteRows.includes(value)
        ? prev.favoriteRows.filter(el => el !== value)
        : [...prev.favoriteRows, value]
    }))
  }

  const onCategoryChange = (category: string) => {
    setSearchParams(prev => ({ ...prev, category: prev.category === category ? null : category }))
  }

  const onItemsLengthChange = (length: string) => {
    setSearchParams(prev => ({ ...prev, items: prev.items !== +length ? +length : 100 }))
  }

  const onSortingOptionChange = (value: string | undefined) => {
    setSearchParams(prev => ({
      ...prev,
      sort: prev.sort === value ? null : (value as NonNullable<typeof prev.sort>)
    }))
  }

  return (
    <>
      <div className='w-full space-y-7 md:space-y-10'>
        <div className='grid gap-5 xl:grid-cols-4'>
          <div className='w-full space-y-2 rounded-xl border p-4'>
            <div className='space-y-1.5'>
              <h3 className='text-lg font-semibold text-tokena-dark dark:text-tokena-gray'>
                Balance
              </h3>

              <div className='grid grid-cols-2 gap-1.5'>
                <span className='text-lg font-bold uppercase text-tokena-dark dark:text-tokena-light-gray'>
                  $63,755,200
                </span>

                <div className='flex items-center gap-1.5'>
                  <Badge variant='success'>+2.3%</Badge>
                  <span className='text-xs font-medium text-tokena-dark-gray dark:text-tokena-gray'>
                    vs last month
                  </span>
                </div>
              </div>
            </div>

            <div className='grid grid-cols-2 gap-1.5'>
              <Button variant='primary'>
                <Icons.arrowUp />
                <span>Deposit</span>
              </Button>

              <Button variant='primary'>
                <Icons.arrowDown />
                <span>Withdraw</span>
              </Button>
            </div>
          </div>

          <Trending currency={currency} handleCardClick={onCoinClick} className='xl:col-span-3' />
        </div>

        <div className='space-y-8'>
          <div className='flex flex-col items-center justify-between gap-4 md:flex-row md:items-start'>
            <div
              className={cn(
                'relative z-[0] w-full md:w-80',
                /* Avoid to have the input component placed after the sidebar when this is not closed */
                sidebarIsOpen && '-z-10'
              )}
            >
              <Input className='pl-8' placeholder='Search coin' />
              <Icons.search className='absolute left-2 top-1/2 -translate-y-1/2 text-tokena-dark-gray' />
            </div>

            <CategorySelector
              className={cn(sidebarIsOpen && '-z-10')}
              current={searchParams.category}
              onCategoryChange={onCategoryChange}
            />
          </div>

          <div className='rounded-xl border border-tokena-gray dark:border-tokena-dark-gray'>
            <header className='flex items-center justify-between p-4'>
              <span className='text-base font-semibold text-tokena-dark dark:text-tokena-light-gray'>
                Market
              </span>

              <SortOptionSelector
                onSortingOptionChange={onSortingOptionChange}
                value={searchParams.sort}
              />
            </header>

            <main className='no-scrollbar w-full overflow-x-auto'>
              <table className='w-full border-collapse overflow-x-auto'>
                <thead>
                  <tr className='bg-tokena-light-gray *:px-6 *:py-3 *:text-left *:text-sm *:font-normal *:text-tokena-dark dark:bg-tokena-light-gray/10 *:dark:text-tokena-light-gray'>
                    <th id='empty-column-head'></th>

                    {columns.map((column, index) => (
                      <th
                        key={column.key}
                        className={cn(
                          'whitespace-nowrap',
                          index === columns.length - 1 && 'text-center'
                        )}
                      >
                        {column.label}
                      </th>
                    ))}
                  </tr>
                </thead>

                <tbody>
                  {coins.map((coin, index) => (
                    <tr
                      key={coin.id}
                      className='border-b *:space-x-2.5 *:whitespace-nowrap *:px-6 *:py-3 *:text-left *:font-medium *:uppercase *:text-tokena-dark hover:bg-tokena-light-gray *:dark:text-tokena-light-gray hover:dark:bg-tokena-dark-blue-secondary'
                    >
                      <td className='cursor-pointer' onClick={() => handleColumnSelect(coin.id)}>
                        <Icons.star
                          className={cn(
                            'size-5 dark:text-tokena-white',
                            state.favoriteRows.includes(coin.id) &&
                              'fill-tokena-yellow text-tokena-yellow dark:text-tokena-yellow'
                          )}
                        />
                      </td>

                      <td className='text-sm dark:text-tokena-light-gray'>
                        {isUpdating ? <Skeleton className='size-4' /> : index + 1}
                      </td>

                      <td className='' onClick={() => onCoinClick(coin.id)}>
                        {isUpdating ? (
                          <>
                            <Skeleton className='size-6 rounded-full' />
                            <Skeleton className='h-4 w-56' />
                          </>
                        ) : (
                          <div className='flex cursor-pointer items-center gap-2.5'>
                            <CustomImage
                              src={coin.image}
                              alt={coin.name}
                              className='size-6 rounded-full'
                              width={24}
                              height={24}
                            />

                            <p className='block max-w-72 truncate whitespace-nowrap pt-0.5 text-sm'>
                              {coin.name}-{coin.symbol.toUpperCase()}
                            </p>
                          </div>
                        )}
                      </td>

                      <td className='text-sm'>
                        {isUpdating ? (
                          <Skeleton className='h-4 w-24' />
                        ) : (
                          coin.current_price && `$${coin.current_price.toLocaleString('en')}`
                        )}
                      </td>

                      <td>
                        {isUpdating ? (
                          <Skeleton className='h-4 w-6 rounded-full' />
                        ) : coin.price_change_percentage_24h ? (
                          <Badge
                            variant={
                              coin.price_change_percentage_24h > 0 ? 'success' : 'destructive'
                            }
                            size='lg'
                          >
                            {coin.price_change_percentage_24h.toFixed(2)}%
                          </Badge>
                        ) : (
                          '--'
                        )}
                      </td>

                      <td className='text-sm'>
                        {isUpdating ? (
                          <Skeleton className='h-4 w-16' />
                        ) : (
                          coin.total_volume && `$${coin.total_volume.toLocaleString('en')}`
                        )}
                      </td>

                      <td className='text-sm'>
                        {isUpdating ? (
                          <Skeleton className='h-4 w-16' />
                        ) : (
                          coin.market_cap && `$${coin.market_cap.toLocaleString('en')}`
                        )}
                      </td>

                      <td className='text-center text-sm'>
                        {isUpdating ? (
                          <Skeleton className='h-8 w-full' />
                        ) : (
                          <CoinSparkline
                            data={coin.sparkline_in_7d.price.map((value, index) => ({
                              index,
                              value
                            }))}
                            positiveEvolution={
                              !!(
                                coin.price_change_percentage_24h &&
                                coin.price_change_percentage_24h > 0
                              )
                            }
                          />
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </main>

            <div className='flex flex-wrap items-center justify-between gap-5 p-4'>
              <p className='order-1 md:order-none'>Showing 1 to 50 of 15027 results</p>

              <div className='order-none w-full md:order-1 md:w-fit'>Pagination</div>

              <TableItemsLengthSelector
                value={searchParams.items}
                onItemsLengthChange={onItemsLengthChange}
              />
            </div>
          </div>
        </div>
      </div>

      {state.selectedCoin && (
        <CoinOverview
          coin={state.selectedCoin}
          open={!!state.selectedCoin}
          onOpenChange={() => onCoinClick()}
          isFavorite={state.favoriteRows.includes(state.selectedCoin)}
          onFavoriteStateToggle={() => handleColumnSelect(state.selectedCoin!)}
          currency={currency}
        />
      )}
    </>
  )
}

interface CoinSparklineProps {
  data: Array<{ value: number; index: number }>
  positiveEvolution: boolean
}

const CoinSparkline = ({ data, positiveEvolution }: CoinSparklineProps) =>
  data.length === 0 ? (
    '---'
  ) : (
    <LineChart
      width={112}
      height={32}
      data={data}
      className={cn(positiveEvolution ? 'text-tokena-green' : 'text-tokena-red', 'w-full')}
    >
      <YAxis domain={['dataMin', 'dataMax']} hide={true} tickLine={false} axisLine={false} />
      <Line type='monotone' dataKey='value' stroke='currentColor' strokeWidth={1} dot={false} />
    </LineChart>
  )
