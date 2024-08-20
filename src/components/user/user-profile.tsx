import Image from 'next/image'
import { Button } from '../ui/button'
import avatar from '@@/images/avatar.jpg'
import { Icons } from '../common/icons'
import { ComponentProps } from 'react'
import { cn } from '@/lib/utils'

interface Props extends ComponentProps<typeof Button> {}

export const UserProfile = ({ className, ...rest }: Props) => {
  return (
    <Button
      className={cn(
        'group flex h-fit w-full grow-0 items-center gap-2 rounded-lg p-2 hover:bg-tokena-blue/10 dark:bg-tokena-dark-blue dark:hover:bg-[#414451]',
        className
      )}
      {...rest}
    >
      <Image
        src={avatar}
        className='rounded-full'
        alt='User profile picture'
        width={40}
        height={40}
      />

      {/* TODO: truncate issues */}

      <div className='flex flex-grow-0 flex-col justify-start *:text-start'>
        <span className='text-xs font-medium text-tokena-dark group-hover:text-tokena-white dark:text-tokena-white'>
          John Doe
        </span>
        <span className='block w-min truncate text-xs font-normal text-tokena-dark-gray dark:text-tokena-gray/50'>
          johndoe8@gmail.com
        </span>
      </div>

      <Icons.chevronDown className='text-tokena-dark group-hover:text-tokena-white dark:text-tokena-white' />
    </Button>
  )
}
