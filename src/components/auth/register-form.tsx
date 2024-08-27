import { Button } from '../ui/button'
import { Input } from '../ui/input'
import Link from 'next/link'

export const RegisterForm = () => {
  return (
    <div className='mx-auto w-full max-w-md rounded-xl bg-tokena-white p-6 shadow-md dark:bg-tokena-dark-blue'>
      <h2 className='mb-6 text-center text-2xl font-bold text-tokena-dark dark:text-tokena-light-gray'>
        Create an account
      </h2>
      <form className='space-y-6'>
        <div className='space-y-4'>
          <div>
            <label htmlFor='name' className='mb-2 block text-sm font-medium'>
              Fullname
            </label>
            <Input
              id='name'
              type='text'
              placeholder='John Doe'
              className='w-full rounded border p-2'
              required
              minLength={2}
              maxLength={50}
            />
          </div>

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
            <label htmlFor='password' className='mb-2 block text-sm font-medium'>
              Password
            </label>

            <Input
              id='password'
              type='password'
              placeholder='******'
              className='w-full rounded border p-2'
              required
              minLength={8}
              pattern='(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}'
              title='Doit contenir au moins un chiffre, une lettre majuscule, une lettre minuscule, et au moins 8 caractères'
            />
          </div>
        </div>

        <Button type='button' className='w-full' asChild>
          <Link href='/dashboard'>Login</Link>
        </Button>
      </form>

      <p className='mt-4 text-center text-sm text-tokena-dark dark:text-tokena-light-gray'>
        Do you have already an account ?{' '}
        <Button asChild variant='link'>
          <a href='/login' className='px-0 !text-blue-600'>
            Sign in
          </a>
        </Button>
      </p>
    </div>
  )
}
