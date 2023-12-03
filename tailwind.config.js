/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      keyframes:{
        'scrollDown':{
          '0%':{transform: 'translateY(0)'},
          '100%':{transform: 'translateY(-75%)'}
        },
      },
      animation:{
        'scrollDown':'scrollDown 8s ease-in-out'
      }
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require('@tailwindcss/typography'),
  ],
  
}
