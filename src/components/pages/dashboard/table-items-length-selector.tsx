import { Icons } from '@/components/common/icons'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'

interface Props {
  value: number
  onItemsLengthChange: (value: string) => void
}

export const TableItemsLengthSelector = ({ value, onItemsLengthChange }: Props) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant='outline'
          className='relative order-last block h-full w-fit min-w-[89px] truncate px-5 py-2.5 text-start'
        >
          Rows
          <Icons.chevronUpDown className='absolute right-2 top-1/2 size-4 -translate-y-1/2 dark:text-tokena-light-gray' />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align='end' className='p-1.5'>
        <DropdownMenuRadioGroup
          value={value.toString()}
          onValueChange={value => onItemsLengthChange(value)}
          className='no-scrollbar max-h-80 overflow-y-auto'
        >
          {[50, 100, 150].map(item => {
            return (
              <DropdownMenuRadioItem
                key={item}
                value={item.toString()}
                className='block w-full truncate'
              >
                {item}
              </DropdownMenuRadioItem>
            )
          })}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
