import { NewsPage } from '@/components/pages/news/news-page'
import { Metadata } from 'next'

interface Props {}

export const metadata: Metadata = {
  title: 'Tokena | Coins News'
}

const Page = ({}: Props) => {
  return (
    <div className='space-y-8'>
      <h2 className='text-base font-semibold'>Latest Crypto News</h2>

      <NewsPage />
    </div>
  )
}

export default Page
