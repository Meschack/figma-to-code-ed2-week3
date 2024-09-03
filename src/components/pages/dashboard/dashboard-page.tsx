'use client'

import { CoinOverview } from '@/components/coins/coin-overview'
import { Icons } from '@/components/common/icons'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'
import { Coin } from '@/types/coins'
import { parseAsInteger, parseAsString, parseAsStringEnum, useQueryStates } from 'nuqs'
import { useMemo, useState, useTransition } from 'react'
import { Trending } from './trending'
import { CategorySelector } from './category-selector'
import { SortOptionSelector } from './sort-option-selector'
import { TableItemsLengthSelector } from './table-items-length-selector'
import { useSidebarStore } from '@/components/layout/mobile-menu'
import { Button } from '@/components/ui/button'
import { PaginationGenerator } from '@/components/ui/pagination-generator'
import { CoinTableRow } from '@/components/coins/coin-table-row'

interface Props {
  coins: Coin[]
  currency: string
}

interface State {
  selectedCoin?: string
  favoriteRows: string[]
  // pagination: Record<'total' | 'items' | 'current', number>
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
      sort: parseAsStringEnum([...sortingOptions.map(el => el.value)]).withDefault(
        'market_cap_desc'
      )
    },
    { clearOnDefault: true, history: 'push', shallow: false, startTransition }
  )

  const [pagination, setPaginationParams] = useQueryStates(
    {
      page: parseAsInteger.withDefault(1),
      items: parseAsInteger.withDefault(50),
      query: parseAsString.withDefault('').withOptions({ throttleMs: 360 })
    },
    { clearOnDefault: true }
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
    setPaginationParams(prev => ({
      ...prev,
      items: prev.items !== +length ? +length : 100,
      page: 1
    }))
  }

  const onSortingOptionChange = (value: string | undefined) => {
    setSearchParams(prev => ({
      ...prev,
      sort: prev.sort === value ? null : (value as NonNullable<typeof prev.sort>)
    }))
  }

  const matchedCoins = coins.filter(el =>
    el.name.toLowerCase().includes(pagination.query.toLowerCase())
  )

  const statics = useMemo(() => {
    return {
      totalPages: Math.ceil(matchedCoins.length / pagination.items),
      startingIndex: pagination.items * (pagination.page - 1),
      endingIndex: pagination.items * pagination.page
    }
  }, [pagination, coins])

  return (
    <>
      <div className='w-full grow-0 space-y-7 md:space-y-10'>
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

        <div className='grow-0 space-y-8'>
          <div className='flex flex-col items-center justify-between gap-4 md:flex-row md:items-start'>
            <div
              className={cn(
                'relative z-0 w-full md:w-80',
                /* Avoid to have the input component placed after the sidebar when this is not closed */
                sidebarIsOpen && '-z-10'
              )}
            >
              <Input
                defaultValue={pagination.query}
                onChange={event => {
                  setPaginationParams(prev => ({ ...prev, query: event.target.value, page: 1 }))
                }}
                className='pl-8'
                placeholder='Search coin'
              />
              <Icons.search className='absolute left-2 top-1/2 -translate-y-1/2 text-tokena-dark-gray' />
            </div>

            <CategorySelector
              className={cn(sidebarIsOpen && '-z-10')}
              current={searchParams.category}
              onCategoryChange={onCategoryChange}
            />
          </div>

          <div className='rounded-xl border border-tokena-gray dark:border-tokena-dark-gray xl:max-w-[calc(100vw-240px-48px)]'>
            <header className='flex items-center justify-between p-4'>
              <span className='text-base font-semibold text-tokena-dark dark:text-tokena-light-gray'>
                Market
              </span>

              <SortOptionSelector
                onSortingOptionChange={onSortingOptionChange}
                value={searchParams.sort}
                disabled={!matchedCoins.length}
              />
            </header>

            <main className='no-scrollbar w-full overflow-x-auto'>
              <table className='w-full border-collapse'>
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

                {!!matchedCoins.length && (
                  <tbody>
                    {matchedCoins
                      .slice(statics.startingIndex, statics.endingIndex)
                      .map((coin, index) => (
                        <CoinTableRow
                          key={coin.id}
                          coin={coin}
                          index={index}
                          handleColumnSelect={handleColumnSelect}
                          isUpdating={isUpdating}
                          onCoinClick={onCoinClick}
                          pagination={pagination}
                          isFavorite={state.favoriteRows.includes(coin.id)}
                        />
                      ))}
                  </tbody>
                )}
              </table>
            </main>

            {!matchedCoins.length && <p className='mx-auto w-fit p-4'>No coins were found!</p>}

            {!!matchedCoins.length && (
              <div className='flex flex-wrap items-center justify-between gap-5 p-4'>
                <p className='order-1 max-w-[60%] text-xs sm:max-w-none md:order-none md:text-sm'>
                  Showing {statics.startingIndex + (matchedCoins.length ? 1 : 0)} to{' '}
                  {statics.endingIndex < matchedCoins.length
                    ? statics.endingIndex
                    : matchedCoins.length}{' '}
                  of {matchedCoins.length} results
                </p>

                <PaginationGenerator
                  totalPages={statics.totalPages}
                  currentPage={pagination.page}
                  onPageChange={value => setPaginationParams(prev => ({ ...prev, page: value }))}
                  className={cn(
                    'order-none w-full md:order-1 md:w-fit',
                    (!matchedCoins.length || statics.totalPages === 1) && 'hidden'
                  )}
                />

                <TableItemsLengthSelector
                  value={pagination.items}
                  onItemsLengthChange={onItemsLengthChange}
                />
              </div>
            )}
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
