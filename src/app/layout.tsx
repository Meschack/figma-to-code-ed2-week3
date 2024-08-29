import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/theme/theme-provider'
import { monaSans } from '@/config/fonts'
import { cn } from '@/lib/utils'

const baseUrl = process.env.NEXT_PUBLIC_APP_BASE_URL

export const metadata: Metadata = {
  title: 'Tokena',
  description: 'Cryptocurrencies dashboard with Next.js',
  keywords: [
    'crypto',
    'currency',
    'bitcoin',
    'ethereum',
    'dashboard',
    'next',
    'nextjs',
    'crypto dashboard'
  ],
  metadataBase: baseUrl ? new URL(baseUrl) : null
}

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={cn(monaSans.className, 'bg-tokena-white dark:bg-tokena-dark-blue')}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

export default RootLayout
