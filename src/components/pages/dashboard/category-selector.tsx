import { Icons } from '@/components/common/icons'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { Skeleton } from '@/components/ui/skeleton'
import { useCoins } from '@/hooks/use-coins'
import { cn } from '@/lib/utils'
import { useState, useEffect, ComponentProps } from 'react'

interface Props extends ComponentProps<typeof Button> {
  current: string | null
  onCategoryChange: (value: string) => void
}

interface State {
  categories: any[]
  categoriesLoading: boolean
  categoriesError?: boolean
}

export const CategorySelector = ({ current, onCategoryChange, className, ...rest }: Props) => {
  const [state, setState] = useState<State>({ categoriesLoading: true, categories: [] })

  const { getCategories } = useCoins()

  const getCategoriesData = async (signal?: AbortSignal) => {
    try {
      setState(prev => ({ ...prev, categoriesLoading: true }))

      const categories = await getCategories(signal)

      setState(prev => ({ ...prev, categories, categoriesLoading: false }))
    } catch (error) {
      if (!signal?.aborted) {
        setState(prev => ({ ...prev, categoriesLoading: false }))
      }
    }
  }

  useEffect(() => {
    const controller = new AbortController()

    getCategoriesData(controller.signal)

    return () => controller.abort()
  }, [])

  return state.categoriesLoading ? (
    <Skeleton className='h-10 w-full md:w-[234px]' />
  ) : state.categories ? (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant='outline'
          className={cn(
            'relative block w-full truncate px-5 py-2.5 text-start md:w-[234px]',
            className
          )}
        >
          {current
            ? state.categories.find(category => category.category_id === current)?.name ||
              'Categories'
            : 'Categories'}
          <Icons.chevronUpDown className='absolute right-2 top-1/2 size-4 -translate-y-1/2 dark:text-tokena-light-gray' />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align='center' className='h-[172px] w-full p-1.5 md:w-[234px]'>
        <DropdownMenuRadioGroup
          value={current || undefined}
          onValueChange={onCategoryChange}
          className='no-scrollbar max-h-80 overflow-y-auto'
        >
          {state.categories.map(category => {
            return (
              <DropdownMenuRadioItem
                key={category.category_id}
                value={category.category_id}
                className='block w-full truncate'
              >
                {category.name}
              </DropdownMenuRadioItem>
            )
          })}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  ) : (
    <Button variant='link' onClick={() => getCategoriesData()}>
      Réessayer
    </Button>
  )
}
