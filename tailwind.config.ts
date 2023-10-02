import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'tg-bg': 'var(--tg-bg-color)',
        'tg-text': 'var(--tg-text-color)',
        'tg-hint': 'var(--tg-hint-color)',
        'tg-link': 'var(--tg-link-color)',
        'tg-button': 'var(--tg-button-color)',
        'tg-button-text': 'var(--tg-button-text-color)',
        'tg-secondary': 'var(--tg-secondary-bg-color)',
      },
    },
  },
  plugins: [],
}
export default config
