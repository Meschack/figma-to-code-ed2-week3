import { ComponentProps } from 'react'
import { Button } from '@/components/common/button'
import { cn } from '@/lib/utils'
import { Icons } from '@/components/common/icons'

interface Props extends ComponentProps<typeof Button> {
  loading: boolean
  loadingText?: string
  icon?: React.ComponentType<{ className?: string }>
}

export const LoadingButton = (props: Props) => {
  const { loading, loadingText = 'Loading...', className, icon, children, variant, ...rest } = props

  return (
    <Button
      disabled={loading}
      type='submit'
      className={cn(
        'flex items-center',
        variant === 'transparent' && 'hover:bg-transparent hover:text-black',
        className
      )}
      variant={variant}
      {...rest}
    >
      {loading ? (
        <>
          <Icons.spinner
            className={cn('-ml-1 mr-3 h-5 w-5 animate-spin')}
            color={variant ? (variant === 'transparent' ? '#1D1D1D' : 'white') : '#1D1D1D'}
          />
          {loadingText}
        </>
      ) : (
        <div className='flex items-center gap-1'>
          {props.icon && <props.icon className='h-3.5 w-3.5' />}
          {children}
        </div>
      )}
    </Button>
  )
}
