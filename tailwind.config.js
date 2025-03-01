module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#EB773F',
          50: '#fef4ee',
          100: '#fde9dd',
          200: '#fbd3bb',
          300: '#f8b38a',
          400: '#f49359',
          500: '#EB773F',
          600: '#e05e1c',
          700: '#ba4c17',
          800: '#954018',
          900: '#793a19',
        },
        dark: {
          DEFAULT: '#222222',
          50: '#f7f7f7',
          100: '#e3e3e3',
          200: '#c8c8c8',
          300: '#a4a4a4',
          400: '#818181',
          500: '#666666',
          600: '#515151',
          700: '#434343',
          800: '#383838',
          900: '#222222',
        },
        cta: {
          DEFAULT: '#EB773F',
          500: '#EB773F',
          600: '#e05e1c',
          700: '#ba4c17',
        }
      },
      backgroundColor: theme => ({
        ...theme('colors'),
        'dark-page': '#222222',
      }),
      textColor: theme => ({
        ...theme('colors'),
        'primary-accent': '#EB773F',
      }),
      borderColor: theme => ({
        ...theme('colors'),
        'primary-accent': '#EB773F',
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms')
  ],
} 