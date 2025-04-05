/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'blue': {
          50: '#f0f7ff',
          100: '#e0efff',
          200: '#b9dfff',
          300: '#7cc6ff',
          400: '#36a9ff',
          500: '#0090ff',
          600: '#0072ff',
          700: '#0059d1',
          800: '#0049aa',
          900: '#003c8a',
        },
      },
    },
  },
  plugins: [],
};