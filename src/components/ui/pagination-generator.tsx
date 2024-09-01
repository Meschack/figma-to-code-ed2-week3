import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from '@/components/ui/pagination'
import { cn } from '@/lib/utils'
import { ComponentProps } from 'react'

interface PaginationProps extends ComponentProps<typeof Pagination> {
  currentPage: number
  totalPages: number
  onPageChange: (pageNumber: number) => void
}

export const PaginationGenerator = ({
  currentPage,
  totalPages,
  onPageChange,
  className,
  ...rest
}: PaginationProps) => {
  return (
    <Pagination className={cn(className)} {...rest}>
      <PaginationContent>
        <button disabled={currentPage === 1}>
          <PaginationItem>
            <PaginationPrevious
              onClick={() => onPageChange(currentPage === 1 ? 1 : currentPage - 1)}
              className={cn(
                'cursor-pointer',
                currentPage === 1 && 'pointer-events-none cursor-not-allowed opacity-60'
              )}
              aria-disabled={currentPage === 1}
            />
          </PaginationItem>
        </button>

        {Array.from({ length: totalPages }).map((_, number) => (
          <PaginationItem key={number}>
            <PaginationLink
              className={cn('cursor-pointer', currentPage === number + 1 && 'bg-pink text-black')}
              onClick={() => onPageChange(number + 1)}
              isActive={currentPage === number + 1 ? true : false}
            >
              {number + 1}
            </PaginationLink>
          </PaginationItem>
        ))}

        <button disabled={currentPage === totalPages}>
          <PaginationItem>
            <PaginationNext
              onClick={() => onPageChange(currentPage + 1)}
              className={cn(
                'cursor-pointer',
                currentPage === totalPages && 'pointer-events-none cursor-not-allowed opacity-60'
              )}
              aria-disabled={currentPage === totalPages}
            />
          </PaginationItem>
        </button>
      </PaginationContent>
    </Pagination>
  )
}
