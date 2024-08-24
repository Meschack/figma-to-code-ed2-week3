import { COIN_DATA, COINS_LIST_MARKET_DATA } from '@/config/api/urls'
import { fetcher } from '@/lib/fetcher'
import { Coin, CoinDetails } from '@/types/coins'

const apiKey = process.env.NEXT_PUBLIC_COINGECKO_API_KEY

export const getList = async (category?: string, items?: number, sort?: string) => {
  if (!apiKey) throw new Error('Missing API key.')

  const response = await fetcher.get<Coin[]>(COINS_LIST_MARKET_DATA(category, items, sort), {
    headers: { 'x-cg-demo-api-key': apiKey }
  })

  return response.data
}

export const getDetails = async (id: string) => {
  if (!apiKey) throw new Error('Missing API key')

  const response = await fetcher.get<CoinDetails>(COIN_DATA(id), {
    headers: { 'x-cg-demo-api-key': apiKey }
  })

  return response.data
}
