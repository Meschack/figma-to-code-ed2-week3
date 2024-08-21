'use client'

import { AIRDROPS_LIST } from '@/config/api/urls'
import { CustomError } from '@/lib/custom-error'
import { fetcher } from '@/lib/fetcher'
import { useEffect, useState } from 'react'
import { NewsCard } from './news-card'
import { Icons } from '@/components/common/icons'

interface Props {
  token: string
}

interface State {
  airdrops: any[]
  loading: boolean
  error?: string
}

interface GetParamsType {
  start?: number
  limit?: number
  signal?: AbortSignal
}

export const NewsPage = ({ token }: Props) => {
  const [state, setState] = useState<State>({ airdrops: Array.from({ length: 8 }), loading: true })

  const getAirdrops = async ({ limit, signal, start }: GetParamsType) => {
    try {
      setState(prev => ({ ...prev, loading: true }))

      const response = await fetcher.get(AIRDROPS_LIST(start, limit), {
        signal,
        headers: { 'X-CMC_PRO_API_KEY': token }
      })

      setState(prev => ({
        ...prev,
        airdrops: [...prev.airdrops, ...response.data],
        loading: false
      }))
    } catch (error) {
      if (error instanceof CustomError) {
        setState(prev => ({ ...prev, loading: false, error: error.message }))

        return
      }
    }
  }

  useEffect(() => {
    const controller = new AbortController()

    getAirdrops({ signal: controller.signal })

    return () => controller.abort()
  }, [])

  return (
    <div className='space-y-5'>
      <div role='list' className='grid gap-3 md:grid-cols-2 xl:grid-cols-4'>
        {state.airdrops.map((airdrop, index) => (
          <NewsCard role='listitem' key={index} />
        ))}
      </div>

      <button className='mx-auto flex items-center gap-1 rounded-full border border-tokena-gray bg-tokena-light-gray px-3.5 py-2.5 text-sm font-medium dark:border-tokena-gray/20 dark:bg-tokena-dark-blue-secondary dark:*:text-tokena-light-gray'>
        <span className='text-black'>Load More</span>
        <Icons.arrowDown className='text-tokena-dark' />
      </button>
    </div>
  )

  if (state.loading) {
    return <p>Chargement en cours...</p>
  }

  if (state.error) {
    return <p>Erreur : {state.error}</p>
  }

  if (state.airdrops.length === 0) {
    return <p>Aucun airdrop disponible pour le moment.</p>
  }
}
