/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        nier: {
          100: '#FAF8EF',
          300: '##BCAEA3',
          // 300: '#93928B',
          200: '#A19D93',
          400: '#A6A188',
          800: '#302A24',
          900: '#31312F',
          950: '#191713',
        },
      },
      fontFamily: {
        Concielian: ['Concielian', 'sans-serif'],
        RodinProL: ['RodinProL', 'sans-serif'],
        RodinProM: ['RodinProM', 'sans-serif'],
        RodinProDB: ['RodinProDB', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
