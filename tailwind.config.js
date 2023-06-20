/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    './public/index.html'
  ],
  theme: {
    extend: {
      colors: {
        "dark-purple": "#081A51",
        "light-white": "rgba(255,255,255,0.18)",
        "light-gray": "#272626",
        "dark-gray": "#1b1a1a",
        "white-variation": "#faebd7",
        "gray-variation": "#808080",
        "gray-album": "#413d3d",
        "gray-player": "#4d4d4d",
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
}

