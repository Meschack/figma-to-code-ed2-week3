import { Icons } from '@/components/common/icons'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { sortingOptions } from './dashboard-page'

interface Props {
  value: string
  onSortingOptionChange: (value?: string) => void
}

export const SortOptionSelector = ({ onSortingOptionChange, value }: Props) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='outline' size='icon'>
          <Icons.ellipsis className='dark:!text-tokena-light-gray' />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align='end'>
        <DropdownMenuRadioGroup
          value={value || undefined}
          onValueChange={onSortingOptionChange}
          className='no-scrollbar max-h-80 overflow-y-auto'
        >
          {sortingOptions.map(option => {
            return (
              <DropdownMenuRadioItem key={option.value} value={option.value}>
                {option.label}
              </DropdownMenuRadioItem>
            )
          })}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
