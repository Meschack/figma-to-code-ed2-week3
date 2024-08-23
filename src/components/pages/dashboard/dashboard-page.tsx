'use client'

import { CoinOverview } from '@/components/coins/coin-overview'
import { Icons } from '@/components/common/icons'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Coin } from '@/types/coins'
import { useState } from 'react'

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
            <header className='flex items-center justify-between p-4'>
              <span className='text-base font-semibold text-tokena-dark dark:text-tokena-light-gray'>
                Market
              </span>
              <Button variant='outline' size='icon'>
                <Icons.ellipsis className='dark:!text-tokena-light-gray' />
              </Button>
            </header>
            <main className='overflow-x-auto'>
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

              <div className='flex items-center justify-between'>
                <p>Showing 1 to 50 of 15027 results</p>

                <div>Pagination</div>

                <div id='table-col-filter'></div>
              </div>
            </main>
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
