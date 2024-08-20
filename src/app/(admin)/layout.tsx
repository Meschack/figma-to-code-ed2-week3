import { Header } from '@/components/layout/header'
import { Sidebar } from '@/components/layout/sidebar'
import { PropsWithChildren } from 'react'

interface Props extends PropsWithChildren {}

const Layout = ({ children }: Props) => {
  return (
    <div className='flex'>
      <Sidebar />

      <main className='flex grow flex-col'>
        <Header />

        <div className='grow p-6'>{children}</div>
      </main>
    </div>
  )
}

export default Layout
