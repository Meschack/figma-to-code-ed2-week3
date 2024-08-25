'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import { cn } from '@/lib/utils'
import { Sidebar } from './sidebar'
import { Button } from '../ui/button'
import { Icons } from '../common/icons'

export const MobileMenu = () => {
  const [open, setOpen] = useState(false)
  const sidebarRef = useRef<HTMLDivElement>(null)

  const triggerMenu = () => setOpen(prev => !prev)

  const handleOutsideClick = useCallback((event: MouseEvent) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
      setOpen(false)
    }
  }, [])

  const handleEscapeKey = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Escape' && open) {
        setOpen(false)
      }
    },
    [open]
  )

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick)

    return () => document.removeEventListener('mousedown', handleOutsideClick)
  }, [])

  useEffect(() => {
    document.addEventListener('keydown', handleEscapeKey)

    return () => document.removeEventListener('keydown', handleEscapeKey)
  }, [open])

  return (
    <div className='xl:hidden'>
      <Button
        onClick={triggerMenu}
        variant='outline'
        size='icon'
        className='border-tokena-dark-gray'
      >
        <Icons.menu className='text-tokena-dark-gray' />
        <span className='sr-only'>Toggle menu</span>
      </Button>

      <div
        className={cn(
          'fixed inset-0 z-10 h-screen w-screen bg-tokena-dark/30 dark:bg-tokena-dark/60',
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
