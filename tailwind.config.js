/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors:{
        primary:"#ssss",
        Grenne:"#108A00"
      },
      fontFamily:{
        display:["Poppins", 'sans-serif'],
        body:["Instrument Sans", 'sans-serif']
      },
      width:{
        containerCustom:"80%"
      }

    },
  },
  plugins: [],
}

