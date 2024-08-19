import { cn } from '@/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'
import { ComponentProps } from 'react'

interface Props extends ComponentProps<'button'>, VariantProps<typeof buttonVariants> {}

const buttonVariants = cva(
  'rounded-full inline-flex items-center justify-center gap-1.5 disabled:opacity-60',
  {
    variants: {
      variant: {
        fill: 'bg-black text-white',
        transparent: 'bg-transparent text-black border hover:bg-black hover:text-white'
      },
      size: {
        default: 'h-11 px-5',
        icon: 'aspect-square h-11'
      }
    },
    defaultVariants: {
      variant: 'fill',
      size: 'default'
    }
  }
)

export const Button = ({ className, variant, size, children, ...rest }: Props) => {
  return (
    <button className={cn(buttonVariants({ variant, size, className }))} {...rest}>
      {children}
    </button>
  )
}
