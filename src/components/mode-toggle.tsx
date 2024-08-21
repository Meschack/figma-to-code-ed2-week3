'use client'

import { useTheme } from 'next-themes'

import { Button } from '@/components/ui/button'
import { Icons } from './common/icons'

export const ModeToggle = () => {
  const { setTheme, theme } = useTheme()

  return (
    <Button
      variant='outline'
      size='icon'
      className='border-tokena-gray'
      onClick={() => theme && setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      <Icons.moon className='rotate-0 scale-100 text-tokena-dark-gray transition-all dark:-rotate-90 dark:scale-0' />
      <Icons.sun className='absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 dark:text-tokena-gray' />
      <span className='sr-only'>Toggle theme</span>
    </Button>
  )
}
