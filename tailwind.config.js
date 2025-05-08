/** @type {import('tailwindcss').Config} */
const plugin = require('tailwind-scrollbar-hide');
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  
  theme: {
    extend: {},
  },
  plugins: [plugin],
}

