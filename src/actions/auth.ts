'use server'

import { cookies } from 'next/headers'

export const login = async () => {
  new Date().getTime()

  cookies().set('user', new Date().getTime().toString(), { maxAge: 60 * 60 * 24 * 7 })
}

export const logout = async () => cookies().delete('user')
