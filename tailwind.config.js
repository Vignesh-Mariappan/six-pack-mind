/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '400px',
      },
      fontFamily: {
        "open-sans": ['"Open Sans"', ...defaultTheme.fontFamily.sans],
        'merri-weather': ['"Merriweather"', ...defaultTheme.fontFamily.serif]
      }
    },
  },
  plugins: [ 
    daisyui,
  ],
  daisyui: {
    themes: ["night", "coffee", "synthwave", "forest"],
  },
}