const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: {
    content: ["./src/**/*.js"],
    options: {
      safelist: [
        'bg-purple-400',
        'bg-red-600',
        'bg-indigo-700',
        'text-gray-200',
      ]
    }
  },
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
        'custom-blue2': '#90F1EF',
        'custom-vscode-blue':'#72cee7',
        'custom-darkpurple':'#d104db',
        'custom-darkpink': '#e82eb3',
        'custom-grey': '#adb5bd',
        'custom-logo-purdue-back':'#c28e0e',
        'custom-logo-purdue-front':'#000000',
        'custom-logo-apple-back':'#ffffff',
        'custom-logo-apple-front':'#2e8cff',
        'custom-logo-l3harris-back':'#c23a46',
        'custom-logo-l3harris-front':'#000000',
        'custom-logo-att-back':'#f98d1e',
        'custom-logo-att-front':'#ffffff',
        'custom-logo-cme-back':'#25a9e0',
        'custom-logo-cme-front':'#ffffff',
        'custom-portrait-pic-border': '#a24940',
        'custom-lime':'#9ee82e'
      },
    },
    fontFamily: {
      mono: ['ibm-plex-mono', ...defaultTheme.fontFamily.mono],
      sans: ['source-sans-pro',...defaultTheme.fontFamily.sans]
    }
  },
  variants: {
    extend: {
      ringWidth: ['hover','active'],
      ringColor: ['hover','active'],
      ringOpacity: ['hover','active'],
    }
  },
  plugins: [],
}
