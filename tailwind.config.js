/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Playfair: "'Playfair Display', serif",
        Lato: "'Lato', sans-serif"
      }
    },
  },
  plugins: [],
}

