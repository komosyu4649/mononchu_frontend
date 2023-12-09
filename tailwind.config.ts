import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      width: {
        defaultWidth: `calc(100% - 3.2rem)`,
        lgWidth: '112rem',
        mdWidth: '96rem',
        smWidth: '64rem',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        white: '#FFFFFF',
        black: '#423D35',
        gray: '#F5F5F5',
        line: '#D6DCDF',
        danger: '#B13131',
      },
      fontSize: {
        defaultText: [
          '1.4rem',
          {
            lineHeight: '1.8',
          },
        ],
        defaultTitle: [
          '2rem',
          {
            fontWeight: 'bold',
            lineHeight: '1.5',
          },
        ],
        lgTitle: [
          '2.4rem',
          {
            fontWeight: 'bold',
            lineHeight: '1.5',
          },
        ],
      },
      borderRadius: {
        sm: '.4rem',
        md: '.6rem',
        lg: '.8rem',
        xl: '1rem',
        xxl: '1.2rem',
      },
    },
  },
  plugins: [],
}
export default config
