import marketplace from '@@/images/marketplace.png'
import { Icons } from '@/components/common/icons'
import { Button } from '@/components/ui/button'
import { ComponentProps } from 'react'
import { CustomImage } from '@/components/common/custom-image'

interface Props extends ComponentProps<'div'> {}

export const NewsCard = ({}: Props) => {
  return (
    <div className='space-y-2.5 rounded-xl border border-tokena-light-gray p-2.5 dark:border-tokena-gray/15 dark:bg-tokena-dark-blue-secondary'>
      <header className='flex items-stretch gap-2'>
        <CustomImage
          src={marketplace}
          alt='Marketplace logo'
          width={32}
          height={32}
          className='size-8'
        />

        <div className='*:text-xs'>
          <h4 className='mb-0 font-semibold text-tokena-dark dark:text-tokena-white'>
            CoinMarketCap
          </h4>
          <span className='text-tokena-dark-gray dark:text-tokena-light-gray'>
            News - 7 hours ago
          </span>
        </div>
      </header>

      <main
        role='img'
        className='aspect-video w-full rounded-lg bg-tokena-light-gray dark:bg-tokena-dark/70'
      ></main>

      <footer className='space-y-2'>
        <div className='space-y-1.5 *:text-xs'>
          <h3 className='font-semibold italic text-tokena-dark dark:text-tokena-gray'>
            Ethereum’s Merge Coming and the Stakes Couldn’t Be Higher
          </h3>

          <p className='line-clamp-2 truncate font-medium text-tokena-dark-gray dark:text-tokena-white'>
            The most important upgrade in blockchain history is slated for August. And the outcome
            of Ethereum
          </p>
        </div>

        <div className='space-x-2.5 *:items-center *:gap-1 *:p-0 *:text-sm *:font-medium *:*:text-tokena-dark *:*:dark:text-tokena-gray'>
          <Button variant='transparent'>
            <Icons.heart className='size-4.5' />
            <span>5</span>
          </Button>

          <Button variant='transparent'>
            <Icons.comment className='size-4.5' />
            <span>5</span>
          </Button>
        </div>
      </footer>
    </div>
  )
}
