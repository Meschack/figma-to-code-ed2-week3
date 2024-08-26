import { Icons } from '../common/icons'
import { Button } from '../ui/button'
import { Skeleton } from '../ui/skeleton'

interface Props {
  onOpenChange: () => void
}

export const CoinOverviewLoading = ({ onOpenChange }: Props) => {
  return (
    <>
      <div className='flex items-center justify-between'>
        <Skeleton className='h-4 w-20' />

        <Button variant='secondary' onClick={onOpenChange} size='icon'>
          <Icons.close className='dark:text-tokena-light-gray' />
        </Button>
      </div>

      <div className='no-scrollbar grow space-y-6 overflow-y-auto'>
        <Skeleton className='h-56 w-full' />

        <div className='space-y-6'>
          <div className='flex items-center justify-between text-sm font-semibold'>
            <div className='flex items-center justify-between space-x-1.5 dark:text-tokena-light-gray'>
              <Skeleton className='size-8 rounded-full' />

              <Skeleton className='h-4 w-52' />
            </div>

            <Skeleton className='h-4 w-16' />
          </div>

          <div className='space-y-1.5 text-sm font-medium *:flex *:items-center *:justify-between'>
            <div>
              <span className='text-tokena-dark dark:text-tokena-light-gray'>
                Crypto Market Rank
              </span>
              <Skeleton className='h-6 w-14 rounded-full' />
            </div>

            <div>
              <span className='text-tokena-dark dark:text-tokena-light-gray'>Market cap</span>
              <Skeleton className='h-4 w-28' />
            </div>

            <div>
              <span className='text-tokena-dark dark:text-tokena-light-gray'>
                Circulating supply
              </span>
              <Skeleton className='h-4 w-16' />
            </div>

            <div>
              <span className='text-tokena-dark dark:text-tokena-light-gray'>24 Hour High</span>
              <Skeleton className='h-4 w-16' />
            </div>

            <div>
              <span className='text-tokena-dark dark:text-tokena-light-gray'>24 Hour Low</span>
              <Skeleton className='h-4 w-16' />
            </div>
          </div>

          <div className='space-y-2'>
            <h3 className='text-sm font-medium dark:text-tokena-light-gray'>Description</h3>

            <div className='space-y-1'>
              <Skeleton className='h-4 w-full' />
              <Skeleton className='h-4 w-full' />
              <Skeleton className='h-4 w-full' />
              <Skeleton className='h-4 w-full' />
              <Skeleton className='h-4 w-full' />
              <Skeleton className='h-4 w-1/2' />
            </div>
          </div>

          <Skeleton className='h-10 w-full rounded-lg' />
        </div>
      </div>
    </>
  )
}
