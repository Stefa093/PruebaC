/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '12rem',
        sm: '2rem',
        md: '16rem',
        '2xl': '20rem',
      },
    },
    extend: {
      colors: {
        white: '#ffffff',
        purple: '#3D408F',
        purpleop: '#3D408FCC',
        sdwpurple: '#3D408F42',
        lightorange: '#FF887A',
        strongorange: '#EC3A26',
        orange: '#FE6D5C',
        bggray: '#3D408F26',
        gray: '#707070',
        bgblue: '#F5F4F9',
        csgreen: '#00E9B8',
      },
    },
  },
  plugins: [],
};
