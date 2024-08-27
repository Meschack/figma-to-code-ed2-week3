'use client'

import { useRef, useEffect, useCallback } from 'react'
import { cn } from '@/lib/utils'
import { Sidebar } from './sidebar'
import { Button } from '../ui/button'
import { Icons } from '../common/icons'
import { create } from 'zustand'

interface SidebarStore {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

export const useSidebarStore = create<SidebarStore>(set => ({
  isOpen: false,
  setIsOpen: isOpen => set({ isOpen })
}))

export const MobileMenu = () => {
  const { isOpen, setIsOpen } = useSidebarStore()
  const sidebarRef = useRef<HTMLDivElement>(null)

  const triggerMenu = () => setIsOpen(!isOpen)

  const handleOutsideClick = useCallback((event: MouseEvent) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
      setIsOpen(false)
    }
  }, [])

  const handleEscapeKey = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        setIsOpen(false)
      }
    },
    [isOpen]
  )

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick)

    return () => document.removeEventListener('mousedown', handleOutsideClick)
  }, [])

  useEffect(() => {
    document.addEventListener('keydown', handleEscapeKey)

    return () => document.removeEventListener('keydown', handleEscapeKey)
  }, [isOpen])

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
          isOpen ? 'block' : 'hidden'
        )}
      ></div>

      <div
        ref={sidebarRef}
        className={cn(
          'absolute inset-0 z-20 h-full w-fit transition-all duration-300 ease-out',
          isOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <Sidebar onLinkClicked={triggerMenu} className='' />
      </div>
    </div>
  )
}
