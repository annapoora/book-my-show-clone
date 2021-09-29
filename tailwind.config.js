module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        annapoorani:
      
      {
        50: '#ffe4ef',
        100: '#fbb9cc',
        200: '#f28daa',
        300: '#ec6087',
        400: '#e53465',
        500: '#cb1a4c',
        600: '#9f123b',
        700: '#730b2a',
        800: '#470418',
        900: '#1e0007',
      },
      navCol:
        {
           50: '#f5edfd',
           100: '#d8cfe5',
           200: '#bdb1cf',
           300: '#a391ba',
           400: '#8872a6',
           500: '#6f588c',
           600: '#56456e',
           700: '#3e314f',
           800: '#261c31',
           900: '#0e0817',
         }
      
    }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
