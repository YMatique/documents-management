/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/renderer/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#21ca78',
        secondary: '#e6a31d',
        darkColor: '#1f232c',
        tertial: '#f42a8b'
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        opensans: ['Open Sans', 'sans-serif'],
        inter: ['Inter', 'sans-serif']
      }
    }
  },
  plugins: []
}
