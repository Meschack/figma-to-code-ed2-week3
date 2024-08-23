import { Header } from '@/components/layout/header'
import { Sidebar } from '@/components/layout/sidebar'
import { PropsWithChildren } from 'react'

interface Props extends PropsWithChildren {}

const Layout = ({ children }: Props) => {
  return (
    <div className='flex h-screen w-screen overflow-hidden'>
      <Sidebar className='hidden xl:flex' />

      <main className='flex w-full flex-col'>
        <Header className='sticky' />

        <div className='no-scrollbar overflow-y-scroll px-5 py-6 md:px-12 lg:px-6'>{children}</div>
      </main>
    </div>
  )
}

export default Layout
