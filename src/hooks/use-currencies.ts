import { CURRENCIES_LIST } from '@/config/api/urls'
import { fetcher } from '@/lib/fetcher'

export const useCurrencies = () => {
  const apiKey = process.env.NEXT_PUBLIC_COINGECKO_API_KEY

  const get = async (signal?: AbortSignal) => {
    if (!apiKey) throw new Error('Missing API key')

    const response = await fetcher.get<string[]>(CURRENCIES_LIST, {
      headers: { 'x-cg-demo-api-key': apiKey },
      signal
    })

    return response.data
  }

  return { get }
}
