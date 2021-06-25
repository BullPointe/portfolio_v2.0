const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ["./src/**/*.js"],
  theme: {
    container: {
      center: true
    },
    
    extend: {
      colors: {
        'custom-back-white':'#ffe8e6',
        'custom-back-black':'#1e1e24',
        'custom-blue': '#243c5a',
        'custom-orange': '#fe8277',
        'custom-yellow': '#f4e409',
        'custom-purple': '#bdb2ff',
        'custom-sienna': '#EE6C4D',
        'custom-green': '#7BF1A8',
        'custom-blue': '#90F1EF',
        'custom-darkpink': '#FFADAD',
        'custom-grey': '#adb5bd',
      }
    },
    fontFamily: {
      mono: ['ibm-plex-mono', ...defaultTheme.fontFamily.mono],
      sans: ['source-sans-pro',...defaultTheme.fontFamily.sans]
    }
  },
  variants: {},
  plugins: [],
}
