import { RegisterForm } from '@/components/auth/register-form'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tokena | Register'
}

const Page = () => <RegisterForm />

export default Page
