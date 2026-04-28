import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // True sage green — earthy, organic, healing
        sage: {
          50:  '#f3f7f1',
          100: '#e4eddf',
          200: '#c6d9be',
          300: '#9cbd91',
          400: '#6f9e63',
          500: '#527f46',
          600: '#3f6636',
          700: '#314f29',
          800: '#233a1d',
          900: '#162412',
        },
        // Gold — warm amber accent
        gold: {
          50:  '#fdf8ec',
          100: '#faf0d0',
          200: '#f5e0a1',
          300: '#eecf72',
          400: '#e5bc3e',
          500: '#c49a3c',
          600: '#a07b25',
          700: '#7c5d14',
          800: '#583f0a',
          900: '#342103',
        },
        // Warm stone/cream — soft, human, inviting
        warm: {
          50:  '#faf8f4',
          100: '#f2ece3',
          200: '#e4d6c8',
          300: '#cdbba6',
          400: '#b09783',
          500: '#8e7565',
          600: '#6e5a4e',
          700: '#51433a',
          800: '#352c26',
          900: '#1d1713',
        },
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
}

export default config
