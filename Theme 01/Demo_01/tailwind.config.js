/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/*.{html,js,ts,jsx,tsx}', './src/components/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      height: {
        '91/100': '91%',
      },
      backgroundImage: {
        'spacePlanets': "url('../../images/Photographs/city.png')",
        'city' : "url('../../images/Photographs/city.png')",
        
     //   'footer-texture': "url('/img/footer-texture.png')",
      },
      fontFamily: {
        'source': ["'Source Code Pro'", 'sans-serif']
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
}


