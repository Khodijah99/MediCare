import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'none': 'none',
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'black': '#000000',
      'blue':{
          'dark':'#172554',
          'light':'#60a5fa',
          'extra':'#bfdbfe'
        },
      'slate':{
          'dark':'#0f172a',
          'light':'#64748b',
          'extra':'#e2e8f0'
          },
        'gray':{
          'dark':'#111827',
          'light':'#6b7280',
          'extra':'#f9fafb',
          },
          'faded': 'rgba(250, 250, 250, 0.6)',
              // Using modern `rgb`
              // primary: 'rgb(var(--color-primary))',
            
    },
   
 
    extend: {
      // backgroundImage: {
      //   "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      //   "gradient-conic":
      //     "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      // },
    },
  },
  plugins: [],
};
export default config;
