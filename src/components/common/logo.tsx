import { Icons } from './icons'

interface Props {}

export const Logo = ({}: Props) => {
  return (
    <div className='flex items-center gap-3 rounded-lg bg-tokena-blue/[7%] px-4 py-3'>
      <div className='rounded-lg bg-tokena-blue/[22%] p-1.5'>
        <Icons.logo className='size-6 text-tokena-blue' />
      </div>

      <div className='flex flex-col'>
        <span className='text-xs font-bold text-tokena-dark-secondary'>Tokena</span>
        <span className='text-xxs font-medium text-tokena-blue'>Finance app</span>
      </div>
    </div>
  )
}
