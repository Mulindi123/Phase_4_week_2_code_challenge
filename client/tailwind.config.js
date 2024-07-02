/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'slate-600': '#475569', // This is the default slate-600 color, added here for customization
      },
    },
  },
  plugins: [],
}