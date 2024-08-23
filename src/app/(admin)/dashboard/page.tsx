import { getList } from '@/actions/coins'
import { ErrorComponent } from '@/components/common/error'
import { DashboardPage } from '@/components/pages/dashboard/dashboard-page'

interface Props {}

const Page = async ({}: Props) => {
  try {
    const response = await getList()

    return <DashboardPage coins={response} />
  } catch (error) {
    return (
      <ErrorComponent
        title='Une erreur est survenue !'
        description="We have not been able to fetch this page's details. Pleasen, retry !"
        label='Retry'
        to=''
      />
    )
  }
}

export default Page
