/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/renderer/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#21ca78',
        secondary: '#f0dc4e',
        tertial: '#f42a8b'
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif']
      }
    }
  },
  plugins: []
}
