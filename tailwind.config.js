const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx,jsx,js}'],
  theme: {
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.875rem', { lineHeight: '1.5rem' }],
      base: ['1rem', { lineHeight: '1.75rem' }],
      lg: ['1.125rem', { lineHeight: '2rem' }],
      xl: ['1.25rem', { lineHeight: '2rem' }],
      '2xl': ['1.5rem', { lineHeight: '2rem' }],
      '3xl': ['2rem', { lineHeight: '2.5rem' }],
      '4xl': ['2.5rem', { lineHeight: '3.5rem' }],
      '5xl': ['3rem', { lineHeight: '3.5rem' }],
      '6xl': ['3.75rem', { lineHeight: '1' }],
      '7xl': ['4.5rem', { lineHeight: '1.1' }],
      '8xl': ['6rem', { lineHeight: '1' }],
      '9xl': ['8rem', { lineHeight: '1' }],
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#59852C',
          50: '#B5DA8F',
          100: '#ABD57F',
          200: '#96CB61',
          300: '#82C142',
          400: '#6EA436',
          500: '#59852C',
          600: '#3D5B1E',
          700: '#213110',
          800: '#040702',
          900: '#000000',
        },
        charcoal: {
          DEFAULT: '#343434',
          50: '#B9B9B9',
          100: '#AEAEAE',
          200: '#9A9A9A',
          300: '#868686',
          400: '#717171',
          500: '#5D5D5D',
          600: '#484848',
          700: '#343434',
          800: '#181818',
          900: '#000000',
        },
        secondary: '#29ABE2',
        tertiary: '#FFCD00',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        display: ['Lexend', ...defaultTheme.fontFamily.sans],
        handwritten: ['Zilla Slab Highlight', ...defaultTheme.fontFamily.sans],
      },
      maxWidth: {
        '2xl': '40rem',
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography'), require('@tailwindcss/aspect-ratio')],
};
