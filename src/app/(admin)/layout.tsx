import { getCurrentCurrency } from '@/actions/currencies'
import { Header } from '@/components/layout/header'
import { Sidebar } from '@/components/layout/sidebar'
import { Metadata } from 'next'
import { PropsWithChildren } from 'react'

interface Props extends PropsWithChildren {}

export const metadata: Metadata = {
  title: 'Tokena | Dashboard'
}

const Layout = async ({ children }: Props) => {
  const currency = await getCurrentCurrency()

  return (
    <div className='flex h-screen w-screen overflow-hidden'>
      <Sidebar className='hidden xl:flex' />

      <main className='flex w-full grow-0 flex-col'>
        <Header className='sticky' currency={currency} />

        <div className='no-scrollbar w-full grow-0 overflow-scroll px-5 py-6 md:px-12 xl:px-6'>
          {children}
        </div>
      </main>
    </div>
  )
}

export default Layout
