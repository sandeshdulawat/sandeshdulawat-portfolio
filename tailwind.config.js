/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["poppins", "sans-serif"],
        monst: ['Montserrat'],
        pop: ['Poppins'],
        opensans: ['Open Sans'],
        orb: ['Orbitron'],
        curs: ['Cedarville Cursive'],
        protest: ["Protest Revolution"],
      },
      colors: {
        primary: "#14131a",
        secondary: "#1c1b23",
        tertiary: "#2b2a2a",
        purple: "#4e00bb",
        darkBrown: "#554100",
        primaryBlue: "#14131a",
      },
      keyframes:{
        'scrollDown':{
          '0%':{transform: 'translateY(0)'},
          '100%':{transform: 'translateY(-75%)'}
        },
      },
      animation:{
        'scrollDown':'scrollDown 8s ease-in-out'
      },
      container: {
        center: true,
        padding:{
          DEFAULT: "1rem",
          sm: "2rem",
        }
      },
      centered: {
          center: true,
        }
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require('@tailwindcss/typography'),
  ],
  
}
