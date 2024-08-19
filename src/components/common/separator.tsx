import { cn } from '@/lib/utils'

interface Props {
  orientation?: 'horizontal' | 'vertical'
}

export const Separator = ({ orientation = 'horizontal' }: Props) => {
  return (
    <div
      role='separator'
      className={cn('bg-light-gray', orientation === 'horizontal' ? 'h-px w-full' : 'h-full w-px')}
    ></div>
  )
}
