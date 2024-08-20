import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Home() {
  return (
    <div className='flex h-screen w-full flex-col items-center justify-center gap-10'>
      <h1>Page d'accueil</h1>

      <Button asChild>
        <Link href='/dashboard'>Consulter le dashboard</Link>
      </Button>
    </div>
  )
}
