import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'
import { HTMLAttributes } from 'react'

const badgeVariants = cva(
  'flex justify-center items-center rounded-full pt-1 pb-0.5 font-semibold transition-colors w-fit',
  {
    variants: {
      variant: {
        ghost: 'bg-tokena-light-gray !text-tokena-dark [&>svg]:!text-tokena-dark',
        destructive: 'bg-tokena-red/15 !text-tokena-red [&>svg]:!text-tokena-red',
        success: 'bg-tokena-green/15 !text-tokena-green [&>svg]:!text-tokena-green'
      },
      size: {
        sm: 'px-1.5 gap-0.75 text-xxs h-5',
        lg: 'px-2 gap-1.25 text-xs h-6'
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
