/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'cal': 'rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;',
        'input': 'inset -5px 5px 4px #abc4c8, inset 5px -5px 4px #d9fafe;',
        'btn': '-8px 8px 16px #1d282b, 8px -8px 16px #2d3d43;',
      }
    },
  },
  plugins: [],
}

