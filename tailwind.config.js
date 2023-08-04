/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        main: `Cormorant Garamond`,
        quotes: `Annie Use Your Telescope`
      }
    },
    colors: {
      'otfMaroon': '#481f44',
      'otfGreen': '#767d47',
      'otfBookGrey': '#c5c4b0',
      'otfImageGrey': '#bcb3a0',
      'white': 'white',
    }
  },
  plugins: [],
}