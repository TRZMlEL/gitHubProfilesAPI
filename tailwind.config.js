/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'light': '#C3C3E0',
      'dark': '#0F0C29',
      'color': '#413A83',
      'gradient1': '#0F0C29',
      'gradient2': '#302B63',
      'gradient3': '#24243E',
    },
    extend: {},
  },
  plugins: [],
}