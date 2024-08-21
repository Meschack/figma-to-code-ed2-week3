import { ErrorComponent } from '@/components/common/error'
import { NewsPage } from '@/components/pages/news/news-page'

interface Props {}

const Page = ({}: Props) => {
  const token = process.env.NEXT_PUBLIC_COINMARKETCAP_API_KEY

  if (!token) {
    return (
      <ErrorComponent
        description='An error occured while loading datas. Please, retry'
        title='An error occured'
        label='Retry'
        to=''
      />
    )
  }

  return (
    <div className='space-y-8'>
      <h2 className='text-base font-semibold'>Latest Crypto News</h2>

      <NewsPage token={token} />
    </div>
  )
}

export default Page
