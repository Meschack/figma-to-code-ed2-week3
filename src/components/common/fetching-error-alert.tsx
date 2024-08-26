import { Button } from '../ui/button'

interface Props {
  retry: () => void
  title?: string
  buttonLabel?: string
}

export const FetchingErrorAlert = ({ retry, title, buttonLabel }: Props) => {
  return (
    <p>
      {title ?? 'Erreur lors du chargement'}.{' '}
      <Button variant='link' className='p-0 underline' onClick={retry}>
        {buttonLabel ?? 'Réessayer'}
      </Button>
    </p>
  )
}
