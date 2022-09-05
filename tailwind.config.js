// eslint-disable-next-line no-undef
module.exports = {
  content: ['./src/**/*.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        darkcl: '#1B262C',
        darkbl: '#0F4C75',
        blue: '#3282B8',
        lgblue: '#BBE1FA',
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require('tw-elements/dist/plugin')],
};
