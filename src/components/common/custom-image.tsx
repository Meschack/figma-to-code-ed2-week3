import Image from 'next/image'
import { ComponentProps } from 'react'

import placeholderImage from '@@/images/placeholder.png'

interface Props extends ComponentProps<typeof Image> {}

export const CustomImage = ({ placeholder, blurDataURL, alt, ...rest }: Props) => {
  return (
    <Image
      alt={alt ?? 'Generic alternative text'}
      placeholder={placeholder || 'blur'}
      blurDataURL={placeholderImage.src || blurDataURL}
      {...rest}
    />
  )
}
