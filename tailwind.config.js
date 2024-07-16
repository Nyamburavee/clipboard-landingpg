/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        strongCyan: 'hsl(171, 66%, 44%)',
        lightBlue:'hsl(233, 100%, 69%)',
        darkGrayishBlue: 'hsl(210, 10%, 33%)',
        grayishBlue: 'hsl(201, 11%, 66%)'
      },
      fontFamily: {
        Bai: ['Bai Jamjuree', 'San-serif']
      },
      backgroundImage: {
        bgImageDt: "url('/public/bg-header-desktop.png')",
        bgImageMb: "url('/public/bg-header-mobile.png')",

      }
    },
  },
  plugins: [],
}