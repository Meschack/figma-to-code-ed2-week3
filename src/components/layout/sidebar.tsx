'use client'

import { usePathname } from 'next/navigation'
import { Icons } from '../common/icons'
import { Logo } from '../common/logo'
import { SidebarLink } from './sidebar-link'
import { UserProfile } from '../user/user-profile'

interface Props {}
export interface SidebarElement {
  label: string
  path: string
  icon: (typeof Icons)[keyof typeof Icons]
  subElements?: []
}

const sidebarElements: SidebarElement[] = [
  { label: 'Dashboard', path: '/dashboard', icon: Icons.home },
  { label: 'News', path: '/news', icon: Icons.news },
  { label: 'Activities', path: '/activities', icon: Icons.chart },
  { label: 'Cards', path: '/cards', icon: Icons.creditCard },
  { label: 'Reports', path: '/reports', icon: Icons.reports, subElements: [] },
  { label: 'Notifications', path: '/notifications', icon: Icons.bell },
  { label: 'Billing', path: '/billing', icon: Icons.wallet },
  { label: 'Invoices', path: '/invoices', icon: Icons.invoice },
  { label: 'Help center', path: '/help-center', icon: Icons.headPhone },
  { label: 'Settings', path: '/settings', icon: Icons.settings }
]

export const Sidebar = ({}: Props) => {
  const pathname = usePathname()

  return (
    <aside className='flex h-screen w-60 flex-col gap-9 overflow-auto border-r px-3.5 py-4'>
      <Logo />

      <div className='space-y-5'>
        <h2 className='text-sm font-medium text-tokena-dark-gray dark:text-tokena-white'>Menu</h2>

        <div className='flex flex-col gap-0.5'>
          {sidebarElements.map(element => (
            <SidebarLink
              element={element}
              isActive={pathname === element.path}
              key={element.path}
            />
          ))}
        </div>
      </div>

      <UserProfile className='mt-auto' />
    </aside>
  )
}
