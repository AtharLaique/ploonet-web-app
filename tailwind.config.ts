import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        'bml': '800px',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(96.34deg, #FF4E83 0.62%, #FFBB54 97.92%)',
        'white-gradient':'linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 53.75%, rgba(255, 255, 255, 0) 100%)'
      },
      fontFamily: {
        pretendard:'var(--font-pretendard)'
      },
    },
  },
  plugins: [],
}
export default config
