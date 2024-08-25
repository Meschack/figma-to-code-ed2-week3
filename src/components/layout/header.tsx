import { ComponentProps } from 'react'
import { Icons } from '../common/icons'
import { ModeToggle } from '../mode-toggle'
import { Button } from '../ui/button'
import { cn } from '@/lib/utils'
import { MobileMenu } from './mobile-menu'

interface Props extends ComponentProps<'header'> {}

export const Header = ({ className, ...rest }: Props) => (
  <header
    className={cn(
      'flex items-center justify-between border-b border-tokena-light-gray px-5 py-3 dark:border-tokena-gray/15 md:px-12 xl:px-6',
      className
    )}
    {...rest}
  >
    <div className='flex items-center gap-4 md:gap-6'>
      <MobileMenu />

      <div className='flex flex-col font-medium'>
        <span className='text-sm text-tokena-dark dark:text-tokena-light-gray'>Dashboard</span>
        <span className='text-xs text-tokena-dark-gray dark:text-tokena-gray'>
          Welcome back, John Doe
        </span>
      </div>

      <Button className='hidden gap-1.5 text-sm font-medium text-white md:flex'>
        <Icons.addWallet />
        <span>Connect wallet</span>
      </Button>
    </div>

    <div className='flex items-center gap-3'>
      <Button
        className='gap-0.5 border-tokena-gray *:text-tokena-dark-gray dark:border-tokena-dark-gray'
        variant='outline'
      >
        <span className='text-tokena-dark-gray dark:text-tokena-light-gray'>USD</span>
        <Icons.chevronUpDown className='size-4 text-tokena-dark-gray dark:text-tokena-gray' />
      </Button>

      <ModeToggle />
    </div>
  </header>
)
