/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#157A6E',
          dark: '#0B5340',
          light: '#7BD389'
        },
        gold: '#D4A373'
      },
      boxShadow: {
        'soft': '0 10px 25px rgba(0,0,0,0.08)'
      }
    },
  },
  plugins: [],
};
