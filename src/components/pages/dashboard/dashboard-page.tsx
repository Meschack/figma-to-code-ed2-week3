'use client'

import { CoinOverview } from '@/components/coins/coin-overview'
import { Icons } from '@/components/common/icons'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { Input } from '@/components/ui/input'
import { Skeleton } from '@/components/ui/skeleton'
import { useCoins } from '@/hooks/use-coins'
import { cn } from '@/lib/utils'
import { Category, Coin } from '@/types/coins'
import { parseAsInteger, parseAsString, useQueryStates } from 'nuqs'
import { useEffect, useState } from 'react'

interface Props {
  coins: Coin[]
}

interface State {
  selectedCoin?: string
  visibleColumns: string[]
  selectedRows: string[]
  categories?: Category[]
  categoriesLoading: boolean
  selectedCategory?: string
}

const _columns = [
  { key: 'id', label: '#' },
  { key: 'coin', label: 'Coin' },
  { key: 'price', label: 'Price' },
  { key: 'price_change_percentage_24h', label: '24h' },
  { key: 'total_volume', label: '24h Volume' },
  { key: 'market_cap', label: 'Market Cap' },
  { key: 'last_seven_days', label: 'Last seven days' }
] as const

export const DashboardPage = ({ coins }: Props) => {
  const [state, setState] = useState<State>({
    visibleColumns: _columns.map(col => col.key),
    selectedRows: [],
    categoriesLoading: true
  })

  const [searchParams, setSearchParams] = useQueryStates(
    { category: parseAsString, items: parseAsInteger.withDefault(100) },
    { clearOnDefault: true, history: 'push', shallow: false }
  )

  const { getCategories } = useCoins()

  const onCoinClick = (coin?: string) => {
    setState(prev => ({ ...prev, selectedCoin: coin }))
  }

  const handleColumnChange = (value: string, checked: boolean) => {
    setState(prev => ({
      ...prev,
      visibleColumns: !checked
        ? prev.visibleColumns.filter(el => el !== value)
        : [...prev.visibleColumns, value]
    }))
  }

  const handleColumnSelect = (value: string) => {
    setState(prev => ({
      ...prev,
      selectedRows: prev.selectedRows.includes(value)
        ? prev.selectedRows.filter(el => el !== value)
        : [...prev.selectedRows, value]
    }))
  }

  const getCategoriesList = async (signal?: AbortSignal) => {
    try {
      setState(prev => ({ ...prev, categoriesLoading: true }))

      const categories = await getCategories()

      setState(prev => ({ ...prev, categories, categoriesLoading: false }))
    } catch (error) {
      if (!signal?.aborted) {
        setState(prev => ({ ...prev, categoriesLoading: false }))
      }
    }
  }

  const onCategoryChange = (category: string) => {
    setSearchParams(prev => ({ ...prev, category: prev.category === category ? null : category }))
  }

  useEffect(() => {
    const controller = new AbortController()

    getCategoriesList(controller.signal)

    return () => controller.abort()
  }, [])

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

            {state.categoriesLoading ? (
              <Skeleton className='h-10 w-36' />
            ) : state.categories ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant='outline' className='order-last h-full'>
                    Catégories{' '}
                    <Icons.chevronUpDown className='ml-2 size-4 dark:text-tokena-light-gray' />
                  </Button>
                </DropdownMenuTrigger>

                <DropdownMenuContent align='end'>
                  <DropdownMenuRadioGroup
                    value={searchParams.category || undefined}
                    onValueChange={onCategoryChange}
                    className='no-scrollbar max-h-80 overflow-y-auto'
                  >
                    {state.categories.map(category => {
                      return (
                        <DropdownMenuRadioItem
                          key={category.category_id}
                          value={category.category_id}
                        >
                          {category.name}
                        </DropdownMenuRadioItem>
                      )
                    })}
                  </DropdownMenuRadioGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button variant='link' onClick={() => getCategoriesList()}>
                Réessayer
              </Button>
            )}
          </div>

          <div className='rounded-xl border border-tokena-gray dark:border-tokena-dark-gray'>
            <header className='flex items-center justify-between p-4'>
              <span className='text-base font-semibold text-tokena-dark dark:text-tokena-light-gray'>
                Market
              </span>
              <Button variant='outline' size='icon'>
                <Icons.ellipsis className='dark:!text-tokena-light-gray' />
              </Button>
            </header>

            <main className='no-scrollbar overflow-x-auto'>
              <table className='w-full border-collapse'>
                <thead>
                  <tr className='bg-tokena-light-gray *:px-6 *:py-3 *:text-left *:text-sm *:font-normal *:text-tokena-dark dark:bg-tokena-light-gray/10 *:dark:text-tokena-light-gray'>
                    <th></th>
                    {_columns.map(
                      (column, index) =>
                        state.visibleColumns.includes(column.key) && (
                          <th
                            key={column.key}
                            className={cn(
                              'whitespace-nowrap',
                              index === _columns.length - 1 && 'text-center'
                            )}
                          >
                            {column.label}
                          </th>
                        )
                    )}
                  </tr>
                </thead>

                <tbody>
                  {coins.map((coin, index) => (
                    <tr
                      key={coin.id}
                      className='border-b *:space-x-2.5 *:px-6 *:py-3 *:text-left *:font-medium *:text-tokena-dark hover:bg-tokena-light-gray *:dark:text-tokena-light-gray hover:dark:bg-tokena-dark-blue-secondary'
                    >
                      <td className='cursor-pointer' onClick={() => handleColumnSelect(coin.id)}>
                        <Icons.star
                          className={cn(
                            'size-5 dark:text-tokena-white',
                            state.selectedRows.includes(coin.id) &&
                              'fill-tokena-yellow text-tokena-yellow'
                          )}
                        />
                      </td>

                      {state.visibleColumns.includes('id') && (
                        <td className='text-sm dark:text-tokena-light-gray'>{index + 1}</td>
                      )}

                      {state.visibleColumns.includes('coin') && (
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
                      )}

                      {state.visibleColumns.includes('price') && (
                        <td className='text-sm'>
                          {coin.current_price && `$${coin.current_price.toLocaleString('en')}`}
                        </td>
                      )}

                      {state.visibleColumns.includes('price_change_percentage_24h') && (
                        <td>
                          {coin.price_change_percentage_24h && (
                            <Badge
                              variant={
                                coin.price_change_percentage_24h > 0 ? 'success' : 'destructive'
                              }
                              size='lg'
                              className=''
                            >
                              {coin.price_change_percentage_24h.toFixed(2)}%
                            </Badge>
                          )}
                        </td>
                      )}

                      {state.visibleColumns.includes('total_volume') && (
                        <td className='text-sm'>
                          {coin.total_volume && `$${coin.total_volume.toLocaleString('en')}`}
                        </td>
                      )}

                      {state.visibleColumns.includes('market_cap') && (
                        <td className='text-sm'>
                          {coin.market_cap && `$${coin.market_cap.toLocaleString('en')}`}
                        </td>
                      )}

                      {state.visibleColumns.includes('last_seven_days') && (
                        <td className='text-center text-sm'>Graphique</td>
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </main>

            <div className='flex flex-wrap items-center justify-between gap-5 p-4'>
              <p className='order-1 md:order-none'>Showing 1 to 50 of 15027 results</p>

              <div className='order-none w-full md:order-1 md:w-fit'>Pagination</div>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant='outline' className='order-last h-full'>
                    Rows <Icons.chevronUpDown className='ml-2 size-4 dark:text-tokena-light-gray' />
                  </Button>
                </DropdownMenuTrigger>

                <DropdownMenuContent align='end'>
                  {_columns.map(column => {
                    return (
                      <DropdownMenuCheckboxItem
                        key={column.key}
                        checked={state.visibleColumns.includes(column.key)}
                        onCheckedChange={value => handleColumnChange(column.key, value)}
                      >
                        {column.label}
                      </DropdownMenuCheckboxItem>
                    )
                  })}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>

        {state.selectedCoin && (
          <CoinOverview
            coin={state.selectedCoin}
            open={!!state.selectedCoin}
            onOpenChange={() => onCoinClick()}
            isFavorite={state.selectedRows.includes(state.selectedCoin)}
            onFavoriteStateToggle={() => handleColumnSelect(state.selectedCoin!)}
          />
        )}
      </div>
    </>
  )
}
