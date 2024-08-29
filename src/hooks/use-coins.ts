import { CATEGORIES, COIN_CHART_DATA, COIN_DATA } from '@/config/api/urls'
import { fetcher } from '@/lib/fetcher'
import { Category, CoinDetails } from '@/types/coins'

interface CoinDataGetterParams {
  id: string
  days: number
  signal?: AbortSignal
  currency: string | undefined
}

export const useCoins = () => {
  const apiKey = process.env.NEXT_PUBLIC_COINGECKO_API_KEY

  const getDetails = async (id: string, signal?: AbortSignal) => {
    if (!apiKey) throw new Error('Missing API key')

    const response = await fetcher.get<CoinDetails>(COIN_DATA(id), {
      headers: { 'x-cg-demo-api-key': apiKey },
      signal
    })

    return response.data
  }

  const getCoinChartData = async ({ id, days, signal, currency }: CoinDataGetterParams) => {
    if (!apiKey) throw new Error('Missing API key')

    const response = await fetcher.get<
      Record<'prices' | 'market_caps' | 'total_volumes', Array<number[]>>
    >(COIN_CHART_DATA(id, days || 7, currency), {
      headers: { 'x-cg-demo-api-key': apiKey },
      signal
    })

    return response.data
  }

  const getCategories = async (signal?: AbortSignal) => {
    if (!apiKey) throw new Error('Missing API key')

    const response = await fetcher.get<Category[]>(CATEGORIES, {
      headers: { 'x-cg-demo-api-key': apiKey },
      signal
    })

    return response.data
  }

  return { getDetails, getCoinChartData, getCategories }
}
