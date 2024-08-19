import localFont from 'next/font/local'

const monaSans = localFont({
  src: [
    {
      path: './mona-sans/Mona-Sans-Regular.ttf',
      weight: '400',
      style: 'normal'
    },
    {
      path: './mona-sans/Mona-Sans-Medium.ttf',
      weight: '500',
      style: 'normal'
    },
    {
      path: './mona-sans/Mona-Sans-SemiBold.ttf',
      weight: '600',
      style: 'normal'
    },
    {
      path: './mona-sans/Mona-Sans-SemiBoldItalic.ttf',
      weight: '600',
      style: 'italic'
    },
    {
      path: './mona-sans/Mona-Sans-Bold.ttf',
      weight: '700',
      style: 'normal'
    }
  ],
  variable: '--font-mono-sans'
})

export { monaSans }
