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
          300: '#93928B',
          400: '#A6A188',
          800: '#302A24',
          900: '#31312F',
        },
      },
      fontFamily: {
        Concielian: ['Concielian', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
