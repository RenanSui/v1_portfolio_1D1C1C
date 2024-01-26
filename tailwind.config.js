/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        xs: '360px',
      },
      colors: {
        'nier-light': {
          100: '#DAD4BB',
          500: '#979381',
          800: '#57544A',
          900: '#302A24',
        },
        'nier-alert': {
          500: '#CD664D',
        },
        'nier-light-trans': {
          100: '#DAD4BBCC',
          500: '#97938199',
          900: '#57544A99',
        },
        'nier-alert-trans': {
          500: 'CD664DB3',
        },
      },
      animation: {
        loading: 'loading 0.75s linear infinite',
        pulse: 'pulse 1.125s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        loading: {
          from: { transform: 'rotate(0turn)' },
          to: { transform: 'rotate(1turn)' },
        },
      },
    },
  },
  plugins: [],
}
