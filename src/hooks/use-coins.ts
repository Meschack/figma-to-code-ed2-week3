import { COIN_CHART_DATA, COIN_DATA } from '@/config/api/urls'
import { fetcher } from '@/lib/fetcher'
import { CoinDetails } from '@/types/coins'

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

  const getCoinChartData = async (id: string, days: number = 7, signal?: AbortSignal) => {
    if (!apiKey) throw new Error('Missing API key')

    const response = await fetcher.get<
      Record<'prices' | 'market_caps' | 'total_volumes', Array<number[]>>
    >(COIN_CHART_DATA(id, days), {
      headers: { 'x-cg-demo-api-key': apiKey },
      signal
    })

    return response.data
  }

  return { getDetails, getCoinChartData }
}
