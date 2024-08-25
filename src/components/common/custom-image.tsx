import Image from 'next/image'
import { ComponentProps } from 'react'

import placeholderImage from '@@/images/placeholder.webp'

interface Props extends ComponentProps<typeof Image> {}

export const CustomImage = ({ placeholder, blurDataURL, src, alt, ...rest }: Props) => {
  return (
    <Image
      src={src.toString().startsWith('missing') ? placeholderImage.src : src}
      alt={alt ?? 'Generic alternative text'}
      /* placeholder={placeholder || 'blur'}
      blurDataURL={placeholderImage.src || blurDataURL}
      {...rest} */
      onError={event =>
        navigator.onLine && ((event.target as HTMLImageElement).src = placeholderImage.src)
      }
      {...rest}
    />
  )
}
