import { Skeleton } from '@/components/ui/skeleton'

export const TrendingCardLoading = () => {
  return (
    <div className='space-y-3 rounded-xl border border-tokena-light-gray p-3'>
      <div className='flex items-center justify-between gap-1'>
        <div className='flex grow items-center gap-1'>
          <Skeleton className='size-8 rounded-full' />

          <div className='grow space-y-0.5'>
            <Skeleton className='h-3.5 w-full' />
            <Skeleton className='h-3.5 w-full' />
          </div>
        </div>

        <Skeleton className='h-4 w-14 rounded-full' />
      </div>

      <div className='grid grow gap-1'>
        <Skeleton className='h-4 w-24' />
        <Skeleton className='h-4 w-36' />
      </div>
    </div>
  )
}
