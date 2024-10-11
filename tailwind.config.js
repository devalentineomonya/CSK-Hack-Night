/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        grotesk: ['Space Grotesk']
      },
      screens: {
        xs: '460px',
      },

    },
  },
  plugins: [],
}

