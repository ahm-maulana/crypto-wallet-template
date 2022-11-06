/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.html',
    './src/*.js'
  ],
  theme: {
    extend: {
      colors: {
        'body': '#F5F5F5',
        'primary': '#807D7D',
        'heading': '#0D0D0D',
        'secondary': '#236E57',
        'cta': '#F05830',
        'feature': '#E7E6EF',
      },
      fontFamily: {
        'gilroy-bold': '"Gilroy-Bold", sans-serif',
        'gilroy-heavy': '"Gilroy-Heavy", sans-serif',
        'gilroy-light': '"Gilroy-Light", sans-serif',
        'gilroy-medium': '"Gilroy-Medium", sans-serif',
        'gilroy-regular': '"Gilroy-Regular", sans-serif',
      }
    },
  },
  plugins: [],
}
