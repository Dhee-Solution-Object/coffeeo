/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Luxury coffee palette
        espresso: {
          50: '#f8f4f0',
          100: '#f0e9e1',
          200: '#e1d3c2',
          300: '#d2bda4',
          400: '#c3a785',
          500: '#b49166',
          600: '#9a7a52',
          700: '#7f633e',
          800: '#644c2a',
          900: '#4a3516',
        },
        cocoa: {
          50: '#fcf9f6',
          100: '#f8f3ee',
          200: '#f1e7dd',
          300: '#eadbcb',
          400: '#e3cfba',
          500: '#dbc3a8',
          600: '#c5b097',
          700: '#af9c86',
          800: '#998975',
          900: '#837564',
        },
        gold: {
          50: '#fdfcf9',
          100: '#fbf8f3',
          200: '#f7f1e7',
          300: '#f3eadb',
          400: '#eed3cf',
          500: '#eaccc3',
          600: '#d5b8b0',
          700: '#c0a49d',
          800: '#ab908a',
          900: '#967c77',
        },
        cream: {
          50: '#fffefc',
          100: '#fffdf9',
          200: '#fffaf3',
          300: '#fef7ed',
          400: '#fef4e7',
          500: '#fef1e1',
          600: '#e5d9cb',
          700: '#ccc2b5',
          800: '#b2aa9f',
          900: '#999189',
        }
      },
      fontFamily: {
        'playfair-display': ['Playfair Display', 'serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      boxShadow: {
        luxury: '0 10px 30px -10px rgb(74 53 22 / 0.3)',
        'luxury-lg': '0 20px 50px -15px rgb(74 53 22 / 0.4)',
        glow: '0 0 20px rgb(190 156 100 / 0.3)',
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}