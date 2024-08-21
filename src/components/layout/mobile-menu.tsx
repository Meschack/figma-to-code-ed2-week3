'use client'

import { useState, useRef, useEffect } from 'react'
import { cn } from '@/lib/utils'
import { Sidebar } from './sidebar'
import { Button } from '../ui/button'
import { Icons } from '../common/icons'

export const MobileMenu = () => {
  const [open, setOpen] = useState(false)
  const sidebarRef = useRef<HTMLDivElement>(null)

  const triggerMenu = () => setOpen(prev => !prev)

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }

    document.addEventListener('mousedown', handleOutsideClick)
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
    }
  }, [])

  return (
    <div className='xl:hidden'>
      <Button onClick={triggerMenu} variant='outline' size='icon' className='border-tokena-gray'>
        <Icons.menu className='rotate-0 scale-100 text-tokena-dark-gray transition-all dark:-rotate-90 dark:scale-0' />
        <span className='sr-only'>Toggle menu</span>
      </Button>

      <div
        className={cn(
          'fixed inset-0 z-10 h-screen w-screen bg-tokena-white/20 dark:bg-tokena-dark/30',
          open ? 'block' : 'hidden'
        )}
      ></div>

      <div
        ref={sidebarRef}
        className={cn(
          'fixed inset-0 z-20 h-full w-fit transition-all duration-300 ease-out',
          open ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <div className='h-full w-60'>
          <Sidebar
            onLinkClicked={triggerMenu}
            className='bg-tokena-white dark:bg-tokena-dark-blue'
          />
        </div>
      </div>
    </div>
  )
}
