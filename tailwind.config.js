/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
       fontFamily: {
        prata: ['Prata', 'serif'], // Adding Prata font
         outfit: ['Outfit', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

