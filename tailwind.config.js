/** @type {import('tailwindcss').Config} */

const { colors: defaultColors } = require('tailwindcss/defaultTheme')

const colors = {
  ...defaultColors,
  ...{
    'base': '#222222',
    'base-2': '#1F1F1F',
    'base-3': '#161616',
    'second': '#F26C4F',
    'second-100': '#F16B4E',
    'second-hover': '#DE6C4F',
    'white': '#ffffff',
    'gray-200': '#C2C2C2',
    'gray-100': '#303030',
  },
}

export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '1.25rem'
    },
    extend: {
      colors: {
        'base': '#222222',
        'base-2': '#1F1F1F',
        'base-3': '#161616',
        'second': '#F26C4F',
        'second-100': '#F16B4E',
        'second-hover': '#DE6C4F',
        'white': '#ffffff',
        'gray-200': '#C2C2C2',
        'gray-100': '#303030',
      },
    },
  },
  plugins: [],
}