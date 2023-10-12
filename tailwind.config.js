/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'black': 'black',
        'white': 'white',
        'yellow': 'rgb(202 138 4)',
        'slate': 'rgb(226 232 240)',
        'gray':'rgb(107 114 128)'
      }
    },
  },
  plugins: [],
}
