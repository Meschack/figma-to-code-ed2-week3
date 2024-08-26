import { cn } from '@/lib/utils'
import { forwardRef, InputHTMLAttributes } from 'react'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef<HTMLInputElement, InputProps>(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        'h-10 w-full rounded-lg border border-tokena-gray bg-transparent px-3 py-1 text-sm font-medium text-tokena-dark-gray focus:outline-tokena-dark-gray/50 disabled:cursor-not-allowed disabled:opacity-50 dark:border-tokena-dark-gray',
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
Input.displayName = 'Input'

export { Input }
