/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}", "./src/*/*.{html,js}", "./src/*/*/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "brand-green": "#50AD79"
      },
    },
    fontFamily: {
      "serif": ["Cambria", "Times New Roman", "serif"]
    },
  },
  plugins: [],
}

