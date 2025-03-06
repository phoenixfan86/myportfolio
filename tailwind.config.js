const scrollbarPlugin = require('tailwind-scrollbar');

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      FontFamily:{
        'sans':['Inter', 'sans-serif']
      }
    },
  },
  plugins: [tailwindScrollbar],
}
