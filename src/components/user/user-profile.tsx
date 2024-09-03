import avatar from '@@/images/avatar.jpg'
import { Icons } from '../common/icons'
import { ComponentProps } from 'react'
import { cn } from '@/lib/utils'
import { CustomImage } from '../common/custom-image'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '../ui/dropdown-menu'
import { logout } from '@/actions/auth'

interface Props extends ComponentProps<'button'> {}

export const UserProfile = ({ className, ...rest }: Props) => {
  const signOut = async () => {
    await logout()

    window.location.href = '/auth/login'
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className={cn(
            'group flex h-fit w-full grow-0 items-center gap-2 rounded-lg p-2 outline-none hover:bg-tokena-blue/10 dark:bg-tokena-dark-blue dark:hover:bg-tokena-user-profile-hover',
            className
          )}
          {...rest}
        >
          <CustomImage
            src={avatar}
            className='rounded-full'
            alt='User profile picture'
            width={40}
            height={40}
          />

          {/* TODO: truncate issues */}

          <div className='flex flex-grow-0 flex-col justify-start *:text-start'>
            <span className='text-xs font-medium text-tokena-dark dark:text-tokena-white'>
              John Doe
            </span>
            <span className='block w-min truncate text-xs font-normal text-tokena-dark-gray dark:text-tokena-gray/50'>
              johndoe8@gmail.com
            </span>
          </div>

          <Icons.chevronDown className='text-tokena-dark dark:text-tokena-white' />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className='w-52'>
        <DropdownMenuItem className='w-full' onClick={signOut}>
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
