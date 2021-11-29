module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        cream: '#F7F5F6',
        sage: '#D6CEC0',
        ebony: '#344443',
        blacky: '#29292A',
      },
      
      fontFamily: {
       'title': ['Kings', 'cursive'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
