import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0d0b2b',
          light: '#1a1650',
          dark: '#07061a',
        },
        accent: {
          DEFAULT: '#00d9ff',
          light: '#5ce1ff',
          dark: '#00a8cc',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #07061a 0%, #0d0b2b 50%, #1a1650 100%)',
      },
    },
  },
  plugins: [],
}

export default config
