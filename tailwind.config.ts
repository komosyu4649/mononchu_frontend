import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        white: '#FFFFFF',
        blck: "#423D35",
        gray: "#F5F5F5",
        line: "#D6DCDF",
        danger: "#B13131"
      },
      fontSize: {
        defaultText: [
          "1.4rem",
          {
            lineHeight: "1.8"
          }
        ],
        defaultTitle: [
          "2rem",
          {
            lineHeight: "1.5"
          }
        ],
        lGTitle: [
          "2.4rem",
          {
            lineHeight: "1.5"
          }
        
        ]
      }
    },
  },
  plugins: [],
}
export default config
