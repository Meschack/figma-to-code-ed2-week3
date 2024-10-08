import type { Config } from 'tailwindcss'

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}'
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      screens: { xs: '360px' },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        tokena: {
          white: '#FFFFFF',
          gray: '#D1D5DB',
          dark: {
            DEFAULT: '#1D1D1D',
            secondary: '#0065EA',
            gray: '#6B7280',
            blue: {
              DEFAULT: '#171923',
              secondary: '#292C3B'
            }
          },
          yellow: '#F2D604',
          green: '#01B130',
          red: '#CB0101',
          blue: '#006EFF',
          'light-gray': '#F3F4F6',
          'user-profile-hover': '#414451'
        }
      },
      fontSize: { xxs: '10px' },
      spacing: { 4.5: '18px', 43: '172px', 58.5: '234px', 22.75: '89px', 23: '92px' },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      fontFamily: { sans: ['var(--font-mono-sans)'] },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        },
        wiggle: {
          '0%, 100%': { transform: 'translate(1px)' }
        },
        shimmer: {
          '100%': {
            transform: 'translateX(100%)'
          }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        wiggle: 'wiggle 300ms ease-in-out',
        shimmer: 'shimmer 2s infinite'
      },
      gap: { 0.5: '2px', 0.75: '3px', 1.25: '5px' },
      borderWidth: { 1.5: '1.5px' },
      rounded: { 2: '2px' },
      zIndex: { 0: '0' }
    }
  },
  plugins: [require('tailwindcss-animate')]
} satisfies Config

export default config
