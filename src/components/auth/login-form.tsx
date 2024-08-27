import Link from 'next/link'
import { Button } from '../ui/button'
import { Input } from '../ui/input'

export const LoginForm = () => {
  return (
    <div className='mx-auto w-full max-w-md rounded-xl bg-tokena-white p-6 shadow-md dark:bg-tokena-dark-blue'>
      <h2 className='mb-6 text-center text-2xl font-bold'>Welcome !</h2>
      <form className='space-y-6'>
        <div className='space-y-4'>
          <div>
            <label htmlFor='email' className='mb-2 block text-sm font-medium'>
              Email
            </label>

            <Input
              id='email'
              type='email'
              placeholder='john.doe@example.com'
              className='w-full rounded border p-2'
              required
            />
          </div>

          <div>
            <div className='flex items-center justify-between'>
              <label htmlFor='password' className='mb-2 block text-sm font-medium'>
                Password
              </label>

              <Link href='/auth/reset' className='text-sm text-blue-600 hover:underline'>
                Forgot your password ?
              </Link>
            </div>

            <Input
              id='password'
              type='password'
              placeholder='******'
              className='w-full rounded border p-2'
              required
            />
          </div>
        </div>

        <Button type='button' className='w-full' asChild>
          <Link href='/dashboard'>Login</Link>
        </Button>
      </form>
    </div>
  )
}
