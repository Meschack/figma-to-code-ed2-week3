import { Badge } from '@/components/ui/badge'
import { Trendings } from '@/types/trendings'

interface Props {
  item: Trendings['coins'][number]['item']
}

export const TrendingCard = ({ item }: Props) => {
  return (
    <div className='cursor-pointer space-y-3 rounded-xl border border-tokena-light-gray p-3 hover:border-tokena-blue/20 hover:bg-tokena-blue/[7%]'>
      <div className='flex items-center justify-between'>
        <div className='flex grow items-center gap-1'>
          <img
            src={item.large}
            alt={`${item.name} large image`}
            width={32}
            height={32}
            className='size-8 rounded-full'
          />

          <div className='grow font-bold'>
            <h3 className='mb-0 text-xs font-bold text-tokena-dark-gray'>{item.name}</h3>
            <span className='text-xxs uppercase text-tokena-dark-gray/60'>{item.symbol}</span>
          </div>
        </div>

        <Badge
          variant={item.data.price_change_percentage_24h['usd'] > 0 ? 'success' : 'destructive'}
          size='sm'
        >
          {item.data.price_change_percentage_24h['usd'].toFixed(2)}%
        </Badge>
      </div>

      <div className='grid grow text-tokena-dark-gray'>
        <span className='text-xs font-bold uppercase'>
          {item.data.price.toFixed(2)} {item.symbol}
        </span>
        <span className='text-xxs font-medium uppercase'>{item.data.total_volume}</span>
      </div>
    </div>
  )
}
