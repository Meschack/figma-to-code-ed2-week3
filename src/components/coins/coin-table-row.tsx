import { cn } from '@/lib/utils'
import { Coin } from '@/types/coins'
import { Icons } from '../common/icons'
import { Skeleton } from '../ui/skeleton'
import { CustomImage } from '../common/custom-image'
import { Badge } from '../ui/badge'
import { CoinSparkline } from './coin-sparkline'

interface Props {
  coin: Coin
  handleColumnSelect: (id: string) => void
  isUpdating: boolean
  isFavorite: boolean
  onCoinClick: (coin: string) => void
  pagination: Record<'page' | 'items', number>
  index: number
}

export const CoinTableRow = ({
  coin,
  handleColumnSelect,
  isUpdating,
  isFavorite,
  onCoinClick,
  pagination,
  index
}: Props) => {
  return (
    <tr
      key={coin.id}
      className='border-b *:space-x-2.5 *:whitespace-nowrap *:px-6 *:py-3 *:text-left *:font-medium *:uppercase *:text-tokena-dark hover:bg-tokena-light-gray *:dark:text-tokena-light-gray hover:dark:bg-tokena-dark-blue-secondary'
    >
      <td className='cursor-pointer' onClick={() => handleColumnSelect(coin.id)}>
        <Icons.star
          className={cn(
            'size-5 dark:text-tokena-white',
            isFavorite && 'fill-tokena-yellow text-tokena-yellow dark:text-tokena-yellow'
          )}
        />
      </td>

      <td className='text-sm dark:text-tokena-light-gray'>
        {isUpdating ? (
          <Skeleton className='size-4' />
        ) : (
          pagination.items * (pagination.page - 1) + index + 1
        )}
      </td>

      <td className='' onClick={() => onCoinClick(coin.id)}>
        <div className='flex cursor-pointer items-center gap-2.5'>
          {isUpdating ? (
            <>
              <Skeleton className='size-6 rounded-full' />
              <Skeleton className='h-4 w-44' />
            </>
          ) : (
            <>
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
            </>
          )}
        </div>
      </td>

      <td className='text-sm'>
        {isUpdating ? (
          <Skeleton className='h-4 w-24' />
        ) : coin.current_price ? (
          `$${coin.current_price.toLocaleString('en')}`
        ) : (
          '--'
        )}
      </td>

      <td>
        {isUpdating ? (
          <Skeleton className='h-4 w-6 rounded-full' />
        ) : coin.price_change_percentage_24h ? (
          <Badge
            variant={coin.price_change_percentage_24h > 0 ? 'success' : 'destructive'}
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
        ) : coin.total_volume ? (
          `$${coin.total_volume.toLocaleString('en')}`
        ) : (
          '--'
        )}
      </td>

      <td className='text-sm'>
        {isUpdating ? (
          <Skeleton className='h-4 w-16' />
        ) : coin.market_cap ? (
          `$${coin.market_cap.toLocaleString('en')}`
        ) : (
          '--'
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
              !!(coin.price_change_percentage_24h && coin.price_change_percentage_24h > 0)
            }
          />
        )}
      </td>
    </tr>
  )
}
