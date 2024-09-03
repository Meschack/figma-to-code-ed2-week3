'use server'

import { cookies } from 'next/headers'

export const changeCurrency = async (value: string) => {
  cookies().set('currency', value, { maxAge: 60 * 60 * 24 * 7 })
}

export const getCurrentCurrency = async () => cookies().get('currency')?.value || 'usd'
