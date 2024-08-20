import { ComponentPropsWithoutRef } from 'react'

interface IconProps extends ComponentPropsWithoutRef<'svg'> {}

export const Icons = {
  heart: (props: IconProps) => (
    <svg
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
      color='#1D1D1D'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M16.2189 3.32846C13.9842 1.95769 12.0337 2.51009 10.8621 3.39001C10.3816 3.7508 10.1414 3.93119 10.0001 3.93119C9.85875 3.93119 9.61858 3.7508 9.13808 3.39001C7.96643 2.51009 6.01599 1.95769 3.78128 3.32846C0.848472 5.12745 0.184848 11.0624 6.94969 16.0695C8.23818 17.0232 8.88241 17.5 10.0001 17.5C11.1177 17.5 11.762 17.0232 13.0505 16.0695C19.8153 11.0624 19.1517 5.12745 16.2189 3.32846Z'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  ),
  logo: (props: IconProps) => (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M14 18C18.4183 18 22 14.4183 22 10C22 5.58172 18.4183 2 14 2C9.58172 2 6 5.58172 6 10C6 14.4183 9.58172 18 14 18Z'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
      />
      <path
        d='M13.1669 20.9689C12.063 21.6239 10.7742 22 9.3975 22C5.31197 22 2 18.688 2 14.6025C2 13.2258 2.37607 11.937 3.03107 10.8331'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
      />
    </svg>
  ),
  comment: (props: IconProps) => (
    <svg
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
      color='#1D1D1D'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M6.66675 11.25H13.3334M6.66675 7.08334H10.0001'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M5.08242 15.8333C3.999 15.7268 3.18737 15.4013 2.64306 14.857C1.66675 13.8808 1.66675 12.3093 1.66675 9.16668V8.75001C1.66675 5.60731 1.66675 4.03597 2.64306 3.05965C3.61937 2.08334 5.19071 2.08334 8.33341 2.08334H11.6667C14.8094 2.08334 16.3808 2.08334 17.3571 3.05965C18.3334 4.03597 18.3334 5.60731 18.3334 8.75001V9.16668C18.3334 12.3093 18.3334 13.8808 17.3571 14.857C16.3808 15.8333 14.8094 15.8333 11.6667 15.8333C11.1997 15.8438 10.8277 15.8793 10.4622 15.9625C9.46358 16.1924 8.53883 16.7034 7.62497 17.1491C6.32282 17.784 5.67175 18.1015 5.26316 17.8043C4.48149 17.2221 5.24553 15.4183 5.41675 14.5833'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  ),
  news: (props: IconProps) => (
    <svg
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
      color='#1D1D1D'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M8.75 6.66666H15.4167M8.75 9.99999H10.8333M15.4167 9.99999H13.3333M8.75 13.3333H10.8333M15.4167 13.3333H13.3333'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M5.83341 6.25H5.00008C3.42873 6.25 2.64306 6.25 2.15491 6.73816C1.66675 7.22631 1.66675 8.01198 1.66675 9.58333V15C1.66675 16.1506 2.59949 17.0833 3.75008 17.0833C4.90067 17.0833 5.83341 16.1506 5.83341 15V6.25Z'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M13.3333 2.91666H9.16667C8.39167 2.91666 8.0042 2.91666 7.68628 3.00184C6.82356 3.23301 6.14968 3.90688 5.91852 4.76961C5.83333 5.08752 5.83333 5.47501 5.83333 6.24999V15C5.83333 16.1506 4.90059 17.0833 3.75 17.0833H13.3333C15.6903 17.0833 16.8688 17.0833 17.6011 16.3511C18.3333 15.6188 18.3333 14.4403 18.3333 12.0833V7.91666C18.3333 5.55963 18.3333 4.38112 17.6011 3.64889C16.8688 2.91666 15.6903 2.91666 13.3333 2.91666Z'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  ),
  tradeDown: (props: IconProps) => (
    <svg
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
      color='#1D1D1D'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M16.6667 9.16666V13.3333H12.5'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M16.6666 13.3333L12.4999 9.16666C11.7644 8.43116 11.3968 8.06345 10.9454 8.0228C10.8708 8.01607 10.7958 8.01607 10.7211 8.0228C10.2698 8.06345 9.90209 8.43116 9.16659 9.16666C8.43109 9.90216 8.06338 10.2698 7.61206 10.3105C7.53745 10.3172 7.46239 10.3172 7.38778 10.3105C6.93646 10.2698 6.56872 9.90216 5.83325 9.16666L3.33325 6.66666'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  ),
  creditCard: (props: IconProps) => (
    <svg
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
      color='#1D1D1D'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M16.6667 4.16666H3.33341C2.41294 4.16666 1.66675 4.91285 1.66675 5.83332V14.1667C1.66675 15.0871 2.41294 15.8333 3.33341 15.8333H16.6667C17.5872 15.8333 18.3334 15.0871 18.3334 14.1667V5.83332C18.3334 4.91285 17.5872 4.16666 16.6667 4.16666Z'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M1.66675 8.33334H18.3334'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  ),
  reports: (props: IconProps) => (
    <svg
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
      color='#1D1D1D'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M12.5001 1.66666H7.50008C7.03984 1.66666 6.66675 2.03975 6.66675 2.49999V4.16666C6.66675 4.62689 7.03984 4.99999 7.50008 4.99999H12.5001C12.9603 4.99999 13.3334 4.62689 13.3334 4.16666V2.49999C13.3334 2.03975 12.9603 1.66666 12.5001 1.66666Z'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M13.3333 3.33334H14.9999C15.4419 3.33334 15.8659 3.50894 16.1784 3.8215C16.491 4.13406 16.6666 4.55798 16.6666 5.00001V16.6667C16.6666 17.1087 16.491 17.5326 16.1784 17.8452C15.8659 18.1577 15.4419 18.3333 14.9999 18.3333H4.99992C4.55789 18.3333 4.13397 18.1577 3.82141 17.8452C3.50885 17.5326 3.33325 17.1087 3.33325 16.6667V5.00001C3.33325 4.55798 3.50885 4.13406 3.82141 3.8215C4.13397 3.50894 4.55789 3.33334 4.99992 3.33334H6.66659'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M10 9H13.3333'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M10 13.3333H13.3333'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M6.66675 9.16666H6.67508'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M6.66675 13.3333H6.67508'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  ),
  bell: (props: IconProps) => (
    <svg
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
      color='#1D1D1D'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M5 6.66666C5 5.34057 5.52678 4.0688 6.46447 3.13112C7.40215 2.19344 8.67392 1.66666 10 1.66666C11.3261 1.66666 12.5979 2.19344 13.5355 3.13112C14.4732 4.0688 15 5.34057 15 6.66666C15 12.5 17.5 14.1667 17.5 14.1667H2.5C2.5 14.1667 5 12.5 5 6.66666Z'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M8.58325 17.5C8.72274 17.7537 8.92779 17.9653 9.17699 18.1127C9.4262 18.26 9.7104 18.3378 9.99992 18.3378C10.2894 18.3378 10.5736 18.26 10.8228 18.1127C11.072 17.9653 11.2771 17.7537 11.4166 17.5'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  ),
  headPhone: (props: IconProps) => (
    <svg
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
      color='#1D1D1D'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M2.5 11.6667H5C5.44203 11.6667 5.86595 11.8423 6.17851 12.1548C6.49107 12.4674 6.66667 12.8913 6.66667 13.3333V15.8333C6.66667 16.2754 6.49107 16.6993 6.17851 17.0118C5.86595 17.3244 5.44203 17.5 5 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V10C2.5 8.01088 3.29018 6.10322 4.6967 4.6967C6.10322 3.29018 8.01088 2.5 10 2.5C11.9891 2.5 13.8968 3.29018 15.3033 4.6967C16.7098 6.10322 17.5 8.01088 17.5 10V15.8333C17.5 16.2754 17.3244 16.6993 17.0118 17.0118C16.6993 17.3244 16.2754 17.5 15.8333 17.5H15C14.558 17.5 14.134 17.3244 13.8215 17.0118C13.5089 16.6993 13.3333 16.2754 13.3333 15.8333V13.3333C13.3333 12.8913 13.5089 12.4674 13.8215 12.1548C14.134 11.8423 14.558 11.6667 15 11.6667H17.5'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  ),
  settings: (props: IconProps) => (
    <svg
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
      color='#1D1D1D'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M10.1833 1.66666H9.81667C9.37464 1.66666 8.95072 1.84225 8.63816 2.15481C8.3256 2.46737 8.15 2.8913 8.15 3.33332V3.48332C8.1497 3.77559 8.07255 4.06265 7.92628 4.31569C7.78002 4.56873 7.56978 4.77885 7.31667 4.92499L6.95834 5.13332C6.70497 5.2796 6.41756 5.35661 6.125 5.35661C5.83244 5.35661 5.54503 5.2796 5.29167 5.13332L5.16667 5.06666C4.78422 4.84604 4.32987 4.78619 3.90334 4.90025C3.47681 5.0143 3.11296 5.29294 2.89167 5.67499L2.70833 5.99166C2.48772 6.3741 2.42787 6.82846 2.54192 7.25499C2.65598 7.68152 2.93461 8.04536 3.31667 8.26666L3.44167 8.34999C3.69356 8.49542 3.90302 8.70423 4.04921 8.95568C4.1954 9.20713 4.27325 9.49247 4.275 9.78332V10.2083C4.27617 10.502 4.19971 10.7908 4.05337 11.0454C3.90703 11.3 3.69601 11.5115 3.44167 11.6583L3.31667 11.7333C2.93461 11.9546 2.65598 12.3185 2.54192 12.745C2.42787 13.1715 2.48772 13.6259 2.70833 14.0083L2.89167 14.325C3.11296 14.707 3.47681 14.9857 3.90334 15.0997C4.32987 15.2138 4.78422 15.1539 5.16667 14.9333L5.29167 14.8667C5.54503 14.7204 5.83244 14.6434 6.125 14.6434C6.41756 14.6434 6.70497 14.7204 6.95834 14.8667L7.31667 15.075C7.56978 15.2211 7.78002 15.4313 7.92628 15.6843C8.07255 15.9373 8.1497 16.2244 8.15 16.5167V16.6667C8.15 17.1087 8.3256 17.5326 8.63816 17.8452C8.95072 18.1577 9.37464 18.3333 9.81667 18.3333H10.1833C10.6254 18.3333 11.0493 18.1577 11.3618 17.8452C11.6744 17.5326 11.85 17.1087 11.85 16.6667V16.5167C11.8503 16.2244 11.9275 15.9373 12.0737 15.6843C12.22 15.4313 12.4302 15.2211 12.6833 15.075L13.0417 14.8667C13.295 14.7204 13.5824 14.6434 13.875 14.6434C14.1676 14.6434 14.455 14.7204 14.7083 14.8667L14.8333 14.9333C15.2158 15.1539 15.6701 15.2138 16.0967 15.0997C16.5232 14.9857 16.887 14.707 17.1083 14.325L17.2917 14C17.5123 13.6175 17.5721 13.1632 17.4581 12.7367C17.344 12.3101 17.0654 11.9463 16.6833 11.725L16.5583 11.6583C16.304 11.5115 16.093 11.3 15.9466 11.0454C15.8003 10.7908 15.7238 10.502 15.725 10.2083V9.79166C15.7238 9.49797 15.8003 9.2092 15.9466 8.95457C16.093 8.69994 16.304 8.4885 16.5583 8.34166L16.6833 8.26666C17.0654 8.04536 17.344 7.68152 17.4581 7.25499C17.5721 6.82846 17.5123 6.3741 17.2917 5.99166L17.1083 5.67499C16.887 5.29294 16.5232 5.0143 16.0967 4.90025C15.6701 4.78619 15.2158 4.84604 14.8333 5.06666L14.7083 5.13332C14.455 5.2796 14.1676 5.35661 13.875 5.35661C13.5824 5.35661 13.295 5.2796 13.0417 5.13332L12.6833 4.92499C12.4302 4.77885 12.22 4.56873 12.0737 4.31569C11.9275 4.06265 11.8503 3.77559 11.85 3.48332V3.33332C11.85 2.8913 11.6744 2.46737 11.3618 2.15481C11.0493 1.84225 10.6254 1.66666 10.1833 1.66666Z'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  ),
  invoice: (props: IconProps) => (
    <svg
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
      color='#1D1D1D'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M3.33325 15.5382V6.71187C3.33325 4.33353 3.33325 3.14436 4.06549 2.40551C4.79772 1.66666 5.97623 1.66666 8.33325 1.66666H11.6666C14.0236 1.66666 15.2021 1.66666 15.9343 2.40551C16.6666 3.14436 16.6666 4.33353 16.6666 6.71187V15.5382C16.6666 16.7979 16.6666 17.4277 16.2816 17.6757C15.6525 18.0809 14.68 17.2312 14.1908 16.9227C13.7867 16.6678 13.5847 16.5404 13.3603 16.5331C13.118 16.5251 12.9123 16.6473 12.4757 16.9227L10.8833 17.927C10.4537 18.1978 10.2389 18.3333 9.99992 18.3333C9.76092 18.3333 9.54617 18.1978 9.11658 17.927L7.52419 16.9227C7.12004 16.6678 6.91797 16.5404 6.69369 16.5331C6.45135 16.5251 6.24569 16.6473 5.80898 16.9227C5.31988 17.2312 4.34731 18.0809 3.71821 17.6757C3.33325 17.4277 3.33325 16.7979 3.33325 15.5382Z'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M9.16675 9.16666H6.66675'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M11.6667 5.83334H6.66675'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  ),
  wallet: (props: IconProps) => (
    <svg
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
      color='#1D1D1D'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <g clipPath='url(#clip0_5087_290)'>
        <path
          d='M13.3333 11.6667C13.3333 12.357 13.8929 12.9167 14.5833 12.9167C15.2736 12.9167 15.8333 12.357 15.8333 11.6667C15.8333 10.9763 15.2736 10.4167 14.5833 10.4167C13.8929 10.4167 13.3333 10.9763 13.3333 11.6667Z'
          stroke='currentColor'
          strokeWidth='1.5'
        />
        <path
          d='M15.75 6.66666C15.8047 6.3974 15.8333 6.11871 15.8333 5.83332C15.8333 3.53214 13.9678 1.66666 11.6667 1.66666C9.3655 1.66666 7.5 3.53214 7.5 5.83332C7.5 6.11871 7.52869 6.3974 7.58335 6.66666'
          stroke='currentColor'
          strokeWidth='1.5'
        />
        <path
          d='M5.83341 6.66104H13.3334C15.6904 6.66104 16.8689 6.66104 17.6012 7.39363C18.3334 8.12622 18.3334 9.30526 18.3334 11.6634V13.3309C18.3334 15.6891 18.3334 16.8682 17.6012 17.6008C16.8689 18.3333 15.6904 18.3333 13.3334 18.3333H8.33341C5.19071 18.3333 3.61937 18.3333 2.64306 17.3566C1.66675 16.3798 1.66675 14.8077 1.66675 11.6634V9.99601C1.66675 6.85177 1.66675 5.27966 2.64306 4.30288C3.42896 3.51659 4.60044 3.36325 6.66675 3.33334H8.33341'
          stroke='currentColor'
          strokeWidth='1.5'
          strokeLinecap='round'
        />
      </g>
      <defs>
        <clipPath id='clip0_5087_290'>
          <rect width='20' height='20' fill='white' />
        </clipPath>
      </defs>
    </svg>
  ),
  sun: (props: IconProps) => (
    <svg
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
      color='#1D1D1D'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M10.0001 13.3333C11.841 13.3333 13.3334 11.8409 13.3334 9.99999C13.3334 8.15904 11.841 6.66666 10.0001 6.66666C8.15913 6.66666 6.66675 8.15904 6.66675 9.99999C6.66675 11.8409 8.15913 13.3333 10.0001 13.3333Z'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M10 3.33334H10.0083'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M16.6667 10H16.6751'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M10 16.6667H10.0083'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M3.33325 10H3.34159'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M14.7141 5.28583H14.7224'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M14.7141 14.7142H14.7224'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M5.28589 14.7142H5.29422'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M5.28589 5.28583H5.29422'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  ),
  moon: (props: IconProps) => (
    <svg
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
      color='#1D1D1D'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M10 2.5C9.00544 3.49456 8.4467 4.84348 8.4467 6.25C8.4467 7.65652 9.00544 9.00544 10 10C10.9946 10.9946 12.3435 11.5533 13.75 11.5533C15.1565 11.5533 16.5054 10.9946 17.5 10C17.5 11.4834 17.0601 12.9334 16.236 14.1668C15.4119 15.4001 14.2406 16.3614 12.8701 16.9291C11.4997 17.4968 9.99168 17.6453 8.53683 17.3559C7.08197 17.0665 5.7456 16.3522 4.6967 15.3033C3.64781 14.2544 2.9335 12.918 2.64411 11.4632C2.35472 10.0083 2.50325 8.50032 3.07091 7.12987C3.63856 5.75943 4.59986 4.58809 5.83323 3.76398C7.0666 2.93987 8.51664 2.5 10 2.5Z'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  ),
  addWallet: (props: IconProps) => (
    <svg
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
      color='#1D1D1D'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M13.335 11.25C13.335 11.9403 13.8945 12.5 14.585 12.5C15.2753 12.5 15.835 11.9403 15.835 11.25C15.835 10.5597 15.2753 10 14.585 10C13.8945 10 13.335 10.5597 13.335 11.25Z'
        stroke='currentColor'
        strokeWidth='1.5'
      />
      <path
        d='M1.66821 9.16667C1.66821 6.02397 1.66821 4.45262 2.64453 3.47631C3.62084 2.5 5.19219 2.5 8.33492 2.5H11.6683C12.4432 2.5 12.8307 2.5 13.1486 2.58518C14.0113 2.81635 14.6852 3.49022 14.9163 4.35295C15.0016 4.67087 15.0016 5.05836 15.0016 5.83333M8.33492 5.83333H13.3349C15.6919 5.83333 16.8704 5.83333 17.6027 6.56557C18.3349 7.2978 18.3349 8.47633 18.3349 10.8333V12.5C18.3349 14.857 18.3349 16.0355 17.6027 16.7677C16.8704 17.5 15.6919 17.5 13.3349 17.5H10.417'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
      <path
        d='M8.33341 14.1667H5.00008M5.00008 14.1667H1.66675M5.00008 14.1667V17.5M5.00008 14.1667V10.8333'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  ),
  close: (props: IconProps) => (
    <svg
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
      color='#1D1D1D'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M15 5L5 15'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M5 5L15 15'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  ),
  menu: (props: IconProps) => (
    <svg
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
      color='#1D1D1D'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M3.33325 10H16.6666'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M3.33325 5H16.6666'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M3.33325 15H16.6666'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  ),
  tradeUp: (props: IconProps) => (
    <svg
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
      color='#1D1D1D'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M16.6667 10.8333V6.66666H12.5'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M16.6666 6.66666L12.4999 10.8333C11.7644 11.5688 11.3968 11.9365 10.9454 11.9772C10.8708 11.9839 10.7958 11.9839 10.7211 11.9772C10.2698 11.9365 9.90209 11.5688 9.16659 10.8333C8.43109 10.0978 8.06338 9.73016 7.61206 9.68949C7.53745 9.68274 7.46239 9.68274 7.38778 9.68949C6.93646 9.73016 6.56872 10.0978 5.83325 10.8333L3.33325 13.3333'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  ),
  chart: (props: IconProps) => (
    <svg
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
      color='#1D1D1D'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M15 16.6667V8.33334'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M10 16.6667V3.33334'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M5 16.6667V11.6667'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  ),
  home: (props: IconProps) => (
    <svg
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
      color='#1D1D1D'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M12.5 17.5V10.8333C12.5 10.6123 12.4122 10.4004 12.2559 10.2441C12.0996 10.0878 11.8877 10 11.6667 10H8.33333C8.11232 10 7.90036 10.0878 7.74408 10.2441C7.5878 10.4004 7.5 10.6123 7.5 10.8333V17.5'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M2.5 8.33335C2.49994 8.0909 2.55278 7.85137 2.65482 7.63144C2.75687 7.41152 2.90566 7.21651 3.09083 7.06001L8.92417 2.06085C9.22499 1.8066 9.60613 1.66711 10 1.66711C10.3939 1.66711 10.775 1.8066 11.0758 2.06085L16.9092 7.06001C17.0943 7.21651 17.2431 7.41152 17.3452 7.63144C17.4472 7.85137 17.5001 8.0909 17.5 8.33335V15.8333C17.5 16.2754 17.3244 16.6993 17.0118 17.0119C16.6993 17.3244 16.2754 17.5 15.8333 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0119C2.67559 16.6993 2.5 16.2754 2.5 15.8333V8.33335Z'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  ),
  spinner: (props: IconProps) => (
    <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' {...props}>
      <circle
        className='opacity-25'
        cx='12'
        cy='12'
        r='10'
        stroke='currentColor'
        strokeWidth='4'
      ></circle>
      <path
        className='opacity-75'
        fill='currentColor'
        d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
      />
    </svg>
  ),
  ellipsis: (props: IconProps) => (
    <svg
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
      color='#1D1D1D'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M10.0001 10.8333C10.4603 10.8333 10.8334 10.4602 10.8334 9.99999C10.8334 9.53975 10.4603 9.16666 10.0001 9.16666C9.53984 9.16666 9.16675 9.53975 9.16675 9.99999C9.16675 10.4602 9.53984 10.8333 10.0001 10.8333Z'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M10.0001 5.00001C10.4603 5.00001 10.8334 4.62691 10.8334 4.16668C10.8334 3.70644 10.4603 3.33334 10.0001 3.33334C9.53984 3.33334 9.16675 3.70644 9.16675 4.16668C9.16675 4.62691 9.53984 5.00001 10.0001 5.00001Z'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M10.0001 16.6667C10.4603 16.6667 10.8334 16.2936 10.8334 15.8333C10.8334 15.3731 10.4603 15 10.0001 15C9.53984 15 9.16675 15.3731 9.16675 15.8333C9.16675 16.2936 9.53984 16.6667 10.0001 16.6667Z'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  ),
  arrowDown: (props: IconProps) => (
    <svg
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
      color='#1D1D1D'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M10 4.16666V15.8333'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M15.8334 10L10.0001 15.8333L4.16675 10'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  ),
  arrowUp: (props: IconProps) => (
    <svg
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
      color='#1D1D1D'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M4.16675 9.99999L10.0001 4.16666L15.8334 9.99999'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M10 15.8333V4.16666'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  ),
  chevronUpDown: (props: IconProps) => (
    <svg
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
      color='#1D1D1D'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M5.83325 12.5L9.99992 16.6667L14.1666 12.5'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M5.83325 7.50001L9.99992 3.33334L14.1666 7.50001'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  ),
  chevronLeft: (props: IconProps) => (
    <svg
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
      color='#1D1D1D'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M12.5 15L7.5 10L12.5 5'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  ),
  chevronUp: (props: IconProps) => (
    <svg
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
      color='#1D1D1D'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M15 12.5L10 7.5L5 12.5'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  ),
  chevronRight: (props: IconProps) => (
    <svg
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
      color='#1D1D1D'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M7.5 15L12.5 10L7.5 5'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  ),
  chevronDown: (props: IconProps) => (
    <svg
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
      color='#1D1D1D'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M5 7.5L10 12.5L15 7.5'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  ),
  search: (props: IconProps) => (
    <svg
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
      color='#1D1D1D'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <g clipPath='url(#clip0_5039_665)'>
        <path
          d='M14.583 14.583L18.333 18.333'
          stroke='currentColor'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M16.667 9.16699C16.667 5.02486 13.3092 1.66699 9.16699 1.66699C5.02486 1.66699 1.66699 5.02486 1.66699 9.16699C1.66699 13.3092 5.02486 16.667 9.16699 16.667C13.3092 16.667 16.667 13.3092 16.667 9.16699Z'
          stroke='currentColor'
          strokeWidth='1.5'
          strokeLinejoin='round'
        />
      </g>
      <defs>
        <clipPath id='clip0_5039_665'>
          <rect width='20' height='20' fill='white' />
        </clipPath>
      </defs>
    </svg>
  ),
  star: (props: IconProps) => (
    <svg
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
      color='#1D1D1D'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M9.56664 2.91584C9.60189 2.82987 9.66191 2.75632 9.73907 2.70456C9.81624 2.65279 9.90706 2.62515 9.99997 2.62515C10.0929 2.62515 10.1837 2.65279 10.2609 2.70456C10.338 2.75632 10.3981 2.82987 10.4333 2.91584L12.2041 7.17501C12.2373 7.2547 12.2918 7.32371 12.3616 7.37443C12.4315 7.42516 12.5139 7.45563 12.6 7.46251L17.1983 7.83084C17.6141 7.86417 17.7825 8.38334 17.4658 8.65417L13.9625 11.6558C13.897 11.7118 13.8482 11.7848 13.8215 11.8666C13.7947 11.9485 13.791 12.0362 13.8108 12.12L14.8816 16.6075C14.9032 16.6975 14.8975 16.7919 14.8654 16.8788C14.8333 16.9656 14.7762 17.041 14.7013 17.0953C14.6264 17.1497 14.5371 17.1807 14.4446 17.1844C14.3521 17.188 14.2606 17.1642 14.1816 17.1158L10.2441 14.7117C10.1706 14.6668 10.0861 14.643 9.99997 14.643C9.91382 14.643 9.82933 14.6668 9.75581 14.7117L5.81831 17.1167C5.73935 17.165 5.64785 17.1888 5.55535 17.1852C5.46286 17.1815 5.37352 17.1506 5.29861 17.0962C5.22371 17.0418 5.16661 16.9664 5.13452 16.8796C5.10243 16.7928 5.09678 16.6984 5.11831 16.6083L6.18914 12.12C6.209 12.0362 6.20535 11.9485 6.17859 11.8666C6.15183 11.7847 6.103 11.7118 6.03747 11.6558L2.53414 8.65417C2.46359 8.59403 2.41248 8.51431 2.38727 8.4251C2.36207 8.33589 2.3639 8.24121 2.39255 8.15305C2.42119 8.06488 2.47536 7.9872 2.54818 7.92984C2.62101 7.87248 2.70922 7.83803 2.80164 7.83084L7.39997 7.46251C7.48601 7.45563 7.56849 7.42516 7.63833 7.37443C7.70817 7.32371 7.76266 7.2547 7.79581 7.17501L9.56664 2.91584Z'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  ),
  circle: (props: IconProps) => (
    <svg
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
      color='#1D1D1D'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <circle cx='10' cy='10' r='9.25' stroke='currentColor' strokeWidth='1.5' />
    </svg>
  )
}
