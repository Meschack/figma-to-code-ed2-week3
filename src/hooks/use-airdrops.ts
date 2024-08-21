import { AIRDROPS_LIST } from '@/config/api/urls'
import { fetcher } from '@/lib/fetcher'

export const useAirdrops = () => {
  const token = process.env.NEXT_PUBLIC_COINMARKETCAP_API_KEY!

  const get = async (start: number = 1, limit: number = 8, signal?: AbortSignal) => {
    const response = await fetcher.get(AIRDROPS_LIST(start, limit), {
      signal,
      headers: { 'X-CMC_PRO_API_KEY': token }
    })

    return response
  }

  return { get }
}
