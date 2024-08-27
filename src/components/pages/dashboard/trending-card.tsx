import { CustomImage } from '@/components/common/custom-image'
import { Icons } from '@/components/common/icons'
import { Badge } from '@/components/ui/badge'
import { Trendings } from '@/types/trendings'

interface Props {
  item: Trendings['coins'][number]['item']
  onCardClick: (id: string) => void
}

export const TrendingCard = ({ item, onCardClick }: Props) => {
  return (
    <div
      onClick={() => onCardClick(item.id)}
      className='cursor-pointer space-y-3 rounded-xl border border-tokena-light-gray p-3 hover:border-tokena-blue/20 hover:bg-tokena-blue/[7%] dark:border-tokena-dark-gray/15 dark:bg-tokena-dark-blue dark:hover:border-tokena-dark-gray/60'
    >
      <div className='flex items-center justify-between gap-1.5'>
        <div className='flex grow items-center gap-1'>
          <CustomImage
            src={item.large}
            alt={`${item.name} large image`}
            width={32}
            height={32}
            className='size-8'
          />

          <div className='grid w-full font-bold'>
            <h3 className='block truncate text-xs font-bold text-tokena-dark-gray dark:text-tokena-white'>
              {item.name}
            </h3>
            <span className='text-xxs uppercase text-tokena-dark-gray/60 dark:text-tokena-gray'>
              {item.symbol}
            </span>
          </div>
        </div>

        <Badge
          variant={item.data.price_change_percentage_24h['usd'] > 0 ? 'success' : 'destructive'}
          size='sm'
        >
          {item.data.price_change_percentage_24h['usd'].toFixed(2)}%
          {item.data.price_change_percentage_24h['usd'] > 0 ? (
            <Icons.tradeUp />
          ) : (
            <Icons.tradeDown />
          )}
        </Badge>
      </div>

      <div className='grid grow text-tokena-dark-gray'>
        <span className='text-xs font-bold uppercase dark:text-tokena-light-gray'>
          {item.data.price.toFixed(2)} {item.symbol}
        </span>
        <span className='text-xxs font-medium uppercase dark:text-tokena-gray'>
          {item.data.total_volume}
        </span>
      </div>
    </div>
  )
}
