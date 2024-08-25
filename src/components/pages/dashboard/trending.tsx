interface Props {}

import { Button } from '@/components/ui/button'
import { TRENDING_SEARCH } from '@/config/api/urls'
import { fetcher } from '@/lib/fetcher'
import { Trendings } from '@/types/trendings'
import { useState, useEffect } from 'react'
import { TrendingCard } from './trending-card'
import { TrendingCardLoading } from './trending-card-loading'

interface State {
  trendings: Trendings['coins']
  trendingsLoading: boolean
  trendingsError?: boolean
}

export const Trending = ({}: Props) => {
  const [state, setState] = useState<State>({ trendingsLoading: true, trendings: [] })

  const getTrendingCoins = async (signal?: AbortSignal) => {
    try {
      setState(prev => ({ ...prev, trendingsLoading: true }))

      const { data } = await fetcher.get<Trendings>(TRENDING_SEARCH)

      setState(prev => ({ ...prev, trendingsLoading: false, trendings: data.coins }))
    } catch (error) {
      if (!signal?.aborted) {
        setState(prev => ({ ...prev, trendingsLoading: false, trendingsError: true }))
      }
    }
  }

  useEffect(() => {
    const controller = new AbortController()

    getTrendingCoins(controller.signal)

    return () => controller.abort()
  }, [])

  return (
    <div className='grid grid-cols-2 gap-1.5 xl:grid-cols-4'>
      {state.trendingsLoading ? (
        Array.from({ length: 4 }).map((_, index) => <TrendingCardLoading key={index} />)
      ) : state.trendingsError ? (
        <div className='col-span-full'>
          Erreur lors de la récupération des données.{' '}
          <Button onClick={() => getTrendingCoins()}>Réessayer</Button>
        </div>
      ) : (
        state.trendings.slice(0, 4).map(({ item }) => <TrendingCard item={item} key={item.id} />)
      )}
    </div>
  )
}
