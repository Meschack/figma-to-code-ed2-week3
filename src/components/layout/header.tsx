import { ComponentProps } from 'react'
import { Icons } from '../common/icons'
import { ModeToggle } from '../mode-toggle'
import { Button } from '../ui/button'
import { cn } from '@/lib/utils'

interface Props extends ComponentProps<'header'> {}

export const Header = ({ className, ...rest }: Props) => (
  <header
    className={cn(
      'flex items-center justify-between border-b border-tokena-light-gray px-5 py-3 dark:border-tokena-gray/15 md:px-12 xl:px-6',
      className
    )}
    {...rest}
  >
    <div className='flex items-center gap-4'>
      <div className='flex flex-col font-medium'>
        <span className='text-sm text-tokena-dark dark:text-tokena-light-gray'>Dashboard</span>
        <span className='text-xs text-tokena-dark-gray dark:text-tokena-gray'>
          Welcome back, John Doe
        </span>
      </div>

      <Button className='gap-1.5 text-sm font-medium text-white'>
        <Icons.addWallet />
        <span>Connect wallet</span>
      </Button>
    </div>

    <div className='flex items-center gap-3'>
      <Button
        className='gap-0.5 *:text-tokena-dark-gray dark:border-tokena-dark-gray *:dark:text-tokena-light-gray'
        variant='outline'
      >
        <span>USD</span>
        <Icons.chevronUpDown className='size-4' />
      </Button>

      <ModeToggle />
    </div>
  </header>
)
