import { getList } from '@/actions/coins'
import { getCurrentCurrency } from '@/actions/currencies'
import { ErrorComponent } from '@/components/common/error'
import { DashboardPage } from '@/components/pages/dashboard/dashboard-page'
import { Metadata } from 'next'
import { createSearchParamsCache, parseAsInteger, parseAsString } from 'nuqs/server'

interface Props {
  searchParams: Record<string, string | string[] | undefined>
}

const searchParamsCache = createSearchParamsCache({
  category: parseAsString,
  items: parseAsInteger.withDefault(100),
  sort: parseAsString.withDefault('market_cap_desc')
})

export const metadata: Metadata = {
  title: 'Tokena | Coins List'
}

const Page = async ({ searchParams }: Props) => {
  const { category, items, sort } = searchParamsCache.parse(searchParams)

  try {
    const currency = await getCurrentCurrency()

    const response = await getList(category || undefined, items, sort, currency)

    return <DashboardPage currency={currency} coins={response} />
  } catch (error) {
    return (
      <ErrorComponent
        title='An error occured !'
        description="We have not been able to fetch this page's details. Please, retry !"
        label='Retry'
        to=''
      />
    )
  }
}

export default Page
