'use client'

import { usePathname } from 'next/navigation'
import { Icons } from '../common/icons'
import { Logo } from '../common/logo'
import { SidebarLink } from './sidebar-link'
import { UserProfile } from '../user/user-profile'
import { cn } from '@/lib/utils'
import { ComponentProps } from 'react'

interface Props extends ComponentProps<'aside'> {
  onLinkClicked?: () => void
}

export interface SidebarElement {
  label: string
  path: string
  icon: keyof typeof Icons
}

export interface SidebarElement {
  subElements?: Omit<SidebarElement, 'subElements'>[]
}

const sidebarElements: SidebarElement[] = [
  { label: 'Dashboard', path: '/dashboard', icon: 'home' },
  { label: 'News', path: '/news', icon: 'news' },
  { label: 'Activities', path: '/activities', icon: 'chart' },
  { label: 'Cards', path: '/cards', icon: 'creditCard' },
  {
    label: 'Reports',
    path: '/reports',
    icon: 'reports',
    subElements: [
      { label: 'List', icon: 'reports', path: '/reports/#' },
      { label: 'Generate', icon: 'reports', path: '/reports/#' }
    ]
  },
  { label: 'Notifications', path: '/notifications', icon: 'bell' },
  { label: 'Billing', path: '/billing', icon: 'wallet' },
  { label: 'Invoices', path: '/invoices', icon: 'invoice' },
  { label: 'Help center', path: '/help-center', icon: 'headPhone' },
  { label: 'Settings', path: '/settings', icon: 'settings' }
]

export const Sidebar = ({ className, onLinkClicked, ...rest }: Props) => {
  const pathname = usePathname()

  return (
    <aside
      className={cn(
        'no-scrollbar sticky flex h-screen w-60 shrink-0 flex-col gap-9 overflow-auto border-r bg-tokena-white px-3.5 py-4 dark:bg-tokena-dark-blue',
        className
      )}
      {...rest}
    >
      <Logo />

      <div className='space-y-5'>
        <h2 className='text-sm font-medium text-tokena-dark-gray dark:text-tokena-white'>Menu</h2>

        <div className='flex flex-col gap-0.5'>
          {sidebarElements.map(element => (
            <SidebarLink
              element={element}
              isActive={pathname === element.path}
              key={element.path}
              onClick={onLinkClicked}
            />
          ))}
        </div>
      </div>

      <UserProfile className='mt-auto' />
    </aside>
  )
}
