/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: '#FAF9F5',
          dark: '#F0EEE6',
        },
        anthropic: {
          black: '#141413',
          gray: '#656562',
        },
        primary: {
          DEFAULT: '#141413',
          light: '#333332',
          dark: '#000000',
        },
        secondary: {
          DEFAULT: '#C5A059',
          light: '#E6C683',
          dark: '#A3813C',
        },
      },
      fontFamily: {
        headings: ['Instrument Sans', 'Inter', 'sans-serif'],
        body: ['Spectral', 'Georgia', 'serif'],
        sans: ['Instrument Sans', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
