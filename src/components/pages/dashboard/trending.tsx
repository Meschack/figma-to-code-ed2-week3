import { Button } from '@/components/ui/button'
import { TRENDING_SEARCH } from '@/config/api/urls'
import { fetcher } from '@/lib/fetcher'
import { Trendings } from '@/types/trendings'
import { useState, useEffect } from 'react'
import { TrendingCard } from './trending-card'
import { TrendingCardLoading } from './trending-card-loading'
import { Icons } from '@/components/common/icons'

interface Props {
  onCardClick: (id: string) => void
}

interface State {
  trendings: Trendings['coins']
  trendingsLoading: boolean
  trendingsError?: boolean
}

export const Trending = ({ onCardClick }: Props) => {
  const [state, setState] = useState<State>({ trendingsLoading: true, trendings: [] })

  const getTrendingCoins = async (signal?: AbortSignal) => {
    try {
      setState(prev => ({ ...prev, trendingsLoading: true, trendingsError: false }))

      const { data } = await fetcher.get<Trendings>(TRENDING_SEARCH, { signal })

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
    <div className='space-y-3'>
      <div className='flex items-center justify-between'>
        <h2 className='text-base font-semibold text-tokena-dark dark:text-tokena-white'>
          Trending
        </h2>
        <Button
          variant='link'
          className='text-xxs font-medium text-tokena-dark-gray dark:text-tokena-light-gray'
        >
          Voir plus
          <Icons.chevronRight className='size-3.5 font-medium text-tokena-dark-gray dark:text-tokena-gray' />
        </Button>
      </div>

      <div className='grid grid-cols-2 gap-1.5 xl:grid-cols-4'>
        {state.trendingsLoading ? (
          Array.from({ length: 4 }).map((_, index) => <TrendingCardLoading key={index} />)
        ) : state.trendingsError ? (
          <div className='col-span-full'>
            Erreur lors de la récupération des données.{' '}
            <Button variant='link' className='p-0' onClick={() => getTrendingCoins()}>
              Réessayer
            </Button>
          </div>
        ) : (
          state.trendings
            .slice(0, 4)
            .map(({ item }) => <TrendingCard onCardClick={onCardClick} item={item} key={item.id} />)
        )}
      </div>
    </div>
  )
}
