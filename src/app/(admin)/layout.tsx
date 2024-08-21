import { Header } from '@/components/layout/header'
import { Sidebar } from '@/components/layout/sidebar'
import { PropsWithChildren } from 'react'

interface Props extends PropsWithChildren {}

const Layout = ({ children }: Props) => {
  return (
    <div className='flex h-screen overflow-y-hidden'>
      <Sidebar />

      <main className='flex grow flex-col'>
        <Header className='sticky' />

        <div className='no-scrollbar grow overflow-y-scroll p-6'>{children}</div>
      </main>
    </div>
  )
}

export default Layout
