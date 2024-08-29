'use server'

import { cookies } from 'next/headers'

export const changeCurrency = async (value: string) => {
  cookies().set('currency', value, { maxAge: 31536000 })
}

export const getCurrentCurrency = async () => cookies().get('currency')?.value
