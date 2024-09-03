'use client'

import { Input } from '../ui/input'
import { FormEvent, useState } from 'react'
import { login } from '@/actions/auth'
import { LoadingButton } from '../common/loading-button'

interface State {
  error?: string
  loading?: boolean
}

export const LoginForm = () => {
  const [state, setState] = useState<State>({})

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    setState({ loading: true, error: '' })

    try {
      const form = event.target as HTMLFormElement

      const formData = new FormData(form)

      const email = formData.get('email')
      const password = formData.get('password')

      console.log({ email, password })

      if (!email || !password) {
        setState({ loading: false, error: 'Veuillez fournir vos identifiants !' })

        return
      }

      // Simuler un chargement

      setTimeout(async () => {
        await login()

        window.location.href = '/dashboard'

        setState({ loading: false, error: '' })
      }, 2000)
    } catch (error) {
      setState({ loading: false, error: 'Une erreur est survenue !' })
    }
  }

  return (
    <div className='mx-auto w-full max-w-md rounded-xl bg-tokena-white p-6 shadow-md dark:bg-tokena-dark-blue'>
      <h2 className='mb-6 text-center text-2xl font-bold'>Welcome !</h2>
      <form className='space-y-6' onSubmit={onSubmit}>
        <div className='space-y-4'>
          <div>
            <label htmlFor='email' className='mb-2 block text-sm font-medium'>
              Email
            </label>

            <Input
              id='email'
              name='email'
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

              <a href='/reset' className='text-sm text-blue-600 hover:underline'>
                Forgot your password ?
              </a>
            </div>

            <Input
              id='password'
              name='password'
              type='password'
              placeholder='******'
              className='w-full rounded border p-2'
              required
            />
          </div>
        </div>

        {state.error && (
          <div className='rounded border border-tokena-red/30 bg-tokena-red/30 px-2 py-3 text-tokena-white'>
            {state.error && <span>{state.error}</span>}
          </div>
        )}

        <LoadingButton loading={state.loading} className='w-full'>
          Login
        </LoadingButton>
      </form>
    </div>
  )
}
