import { Sidebar } from '@/components/layout/sidebar'
import { PropsWithChildren } from 'react'

interface Props extends PropsWithChildren {}

const Layout = ({ children }: Props) => {
  return (
    <div className='flex'>
      <Sidebar />

      <main className='grow'>
        {/* Header */}

        <div>{children}</div>
      </main>
    </div>
  )
}

export default Layout
