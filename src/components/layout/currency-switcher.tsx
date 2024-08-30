'use client'

import { useState, useEffect } from 'react'
import { Button } from '../ui/button'
import { useCurrencies } from '@/hooks/use-currencies'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger
} from '../ui/dropdown-menu'
import { Icons } from '../common/icons'
import { Skeleton } from '../ui/skeleton'
import { changeCurrency } from '@/actions/currencies'

interface Props {
  current: string | undefined
}

interface State {
  currencies: string[]
  currenciesLoading: boolean
  currenciesError?: boolean
}

export const CurrencySwitcher = ({ current }: Props) => {
  const [state, setState] = useState<State>({ currenciesLoading: true, currencies: [] })

  const { get } = useCurrencies()

  const getCurrencies = async (signal?: AbortSignal) => {
    try {
      setState(prev => ({ ...prev, currenciesLoading: true }))

      // Call API
      const response = await get(signal)

      setState(prev => ({ ...prev, currenciesLoading: false, currencies: response }))
    } catch (error) {
      if (!signal?.aborted) {
        setState(prev => ({ ...prev, currenciesLoading: false, currenciesError: true }))
      }
    }
  }

  const onCurrencyChange = (value: string) => {
    try {
      changeCurrency(value)
    } catch (error) {}
  }

  useEffect(() => {
    const controller = new AbortController()

    getCurrencies(controller.signal)

    return () => controller.abort()
  }, [])

  return (
    <div>
      {state.currenciesLoading ? (
        <Skeleton className='h-10 w-24' />
      ) : (
        !state.currenciesError && (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant='outline'
                className='relative block h-full w-fit min-w-[89px] px-5 py-2.5 text-start uppercase'
              >
                {current}
                <Icons.chevronUpDown className='absolute right-2 top-1/2 size-4 -translate-y-1/2 dark:text-tokena-light-gray' />
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align='end'>
              <DropdownMenuRadioGroup
                value={current || undefined}
                onValueChange={onCurrencyChange}
                className='no-scrollbar max-h-80 overflow-y-auto'
              >
                {state.currencies.map(currency => {
                  return (
                    <DropdownMenuRadioItem key={currency} value={currency} className='uppercase'>
                      {currency}
                    </DropdownMenuRadioItem>
                  )
                })}
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        )
      )}
    </div>
  )
}
