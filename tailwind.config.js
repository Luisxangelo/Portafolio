/** @type {import('tailwindcss').Config} */
export default {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "principal-font":['Roboto', "sans-serif"],
      }
    },
    screens: {
      xxs : "610px",
      xs:"1080px"
    },
  },
  plugins: [],
}

