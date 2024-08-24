import Link from 'next/link'
import { SidebarElement } from './sidebar'
import { cn } from '@/lib/utils'
import { Icons } from '../common/icons'
import { ComponentProps } from 'react'

interface Props extends Omit<ComponentProps<typeof Link>, 'href'> {
  element: SidebarElement
  isActive: boolean
}

export const SidebarLink = ({ element, isActive, className, ...rest }: Props) => {
  const IconComponent = Icons[element.icon]
  return (
    <Link
      href={element.path}
      key={element.path}
      className={cn(
        'group flex items-center gap-1 rounded-lg border px-2 py-3 hover:border-tokena-blue hover:bg-tokena-blue dark:hover:border-tokena-blue dark:hover:bg-tokena-dark-secondary/70',
        isActive
          ? 'border-tokena-blue bg-tokena-blue text-tokena-white dark:hover:border-tokena-blue dark:hover:bg-tokena-dark-secondary/70'
          : 'border-tokena-white bg-tokena-white dark:border-tokena-dark dark:bg-tokena-dark-blue',
        className
      )}
      {...rest}
    >
      <IconComponent
        className={cn(
          isActive ? 'text-tokena-white' : 'size-4.5 text-tokena-dark',
          'group-hover:text-tokena-white dark:text-tokena-white'
        )}
      />

      <span
        className={cn(
          isActive ? 'text-tokena-white' : 'text-tokena-dark',
          'inline-flex text-xs font-medium group-hover:text-tokena-white dark:text-tokena-white'
        )}
      >
        {element.label}
      </span>

      {element.subElements && !!element.subElements.length && (
        <Icons.chevronDown
          className={cn(
            isActive ? 'text-tokena-white' : 'text-tokena-dark-gray',
            'ml-auto group-hover:text-tokena-white dark:text-tokena-white'
          )}
        />
      )}
    </Link>
  )
}
