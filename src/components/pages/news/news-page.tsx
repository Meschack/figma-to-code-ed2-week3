import { NewsCard } from './news-card'
import { Icons } from '@/components/common/icons'

export const NewsPage = () => {
  const news = Array.from({ length: 8 })

  return (
    <div className='space-y-5'>
      <div role='list' className='grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-4'>
        {news.map((_, index) => (
          <NewsCard role='listitem' key={index} />
        ))}
      </div>

      <button className='mx-auto flex items-center gap-1 rounded-full border border-tokena-gray bg-tokena-light-gray px-3.5 py-2.5 text-sm font-medium dark:border-tokena-gray/20 dark:bg-tokena-dark-blue-secondary dark:*:text-tokena-light-gray'>
        <span className='text-black'>Load More</span>
        <Icons.arrowDown className='text-tokena-dark' />
      </button>
    </div>
  )
}
