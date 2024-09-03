import { LoginForm } from '@/components/auth/login-form'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tokena | Sign In'
}

const Page = () => <LoginForm />

export default Page
