import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'
import { HTMLAttributes } from 'react'

const badgeVariants = cva(
  'flex justify-center items-center rounded-full py-1 font-semibold transition-colors w-fit',
  {
    variants: {
      variant: {
        ghost: 'bg-tokena-light-gray !text-tokena-dark',
        destructive: 'bg-tokena-red/15 !text-tokena-red',
        success: 'bg-tokena-green/15 !text-tokena-green'
      },
      size: {
        sm: 'px-1.5 gap-[3px] text-xxs',
        lg: 'px-2 gap-[5px] text-xs'
      }
    },
    defaultVariants: { variant: 'ghost', size: 'sm' }
  }
)

export interface BadgeProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />
}

export { Badge, badgeVariants }
