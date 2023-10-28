/** @type {import('tailwindcss').Config} */


export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {

        primary: {  //red
          50: '#FF0460',
          100: '#FF0460',
          200: '#FF0460',
          300: '#FF0460',
          400: '#FF0460',
          500: '#FF0460',
          600: '#FF0460',
          700: '#FF0460',
          800: '#FF0460',
          900: '#FF0460'
        },

        secondary: { //yellow
          50: '#FFCE00',
          100: '#FFCE00',
          200: '#FFCE00',
          300: '#FFCE00',
          400: '#FFCE00',
          500: '#FFCE00',
          600: '#FFCE00',
          700: '#FFCE00',
          800: '#FFCE00',
          900: '#FFCE00'
        },

        pop: {  //blue
          50: '#1c27f5',
          100: '#1c27f5',
          200: '#1c27f5',
          300: '#1c27f5',
          400: '#1c27f5',
          500: '#1c27f5',
          600: '#1c27f5',
          700: '#1c27f5',
          800: '#1c27f5',
          900: '#1c27f5'
        }
      }
    }
  },
  plugins: [],
}

