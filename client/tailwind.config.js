/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        'fullScreen': '100vw',
        'halfScreen': '50vw',
      },
      height: {
        'fullScreen': '100vh',
        'halfScreen': '50vh',
      },
      backgroundImage: {
        'gradient': "url('./gradient.jpg')"
      },
      colors: {
        greyPrimary: '#221D23',
        greySecondary: '#463F3A',
        greyComplementary: "#DCDCDD",
        lightGrey: "#EEEDEB",
        green: "#A1D6B2",
        blueCard: '#B4E4FF',
        redCard: '#F7A4A4',
        yellowCard: '#FFF7D1',
        greenCard: '#D0E8C5'
      }
    },
  },
  plugins: [],
}