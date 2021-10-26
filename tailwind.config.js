module.exports = {
  purge: [
    'public/*.html'
  ],
  jit: true,
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': 'nowbold, Helvetica, Arial, sans-serif',
    },
    textColor: {
      'primary': '#7CB340',
      'secondary': '#29ABE2',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  corePlugins: {
    float: false,
  },
  plugins: [],
}
