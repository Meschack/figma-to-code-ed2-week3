import { getList } from '@/actions/coins'
import { ErrorComponent } from '@/components/common/error'
import { DashboardPage } from '@/components/pages/dashboard/dashboard-page'
import { createSearchParamsCache, parseAsInteger, parseAsString } from 'nuqs/server'

interface Props {
  searchParams: Record<string, string | string[] | undefined>
}

const searchParamsCache = createSearchParamsCache({
  category: parseAsString,
  items: parseAsInteger.withDefault(100),
  sort: parseAsString.withDefault('market_cap_desc')
})

const Page = async ({ searchParams }: Props) => {
  const { category, items, sort } = searchParamsCache.parse(searchParams)

  try {
    const response = await getList(category || undefined, items, sort)

    return <DashboardPage coins={response} />
  } catch (error) {
    return (
      <ErrorComponent
        title='An error occured !'
        description="We have not been able to fetch this page's details. Pleasen, retry !"
        label='Retry'
        to=''
      />
    )
  }
}

export default Page
