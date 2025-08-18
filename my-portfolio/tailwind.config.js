/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: '#03005D',
        main: '#FB9AA3',
        background: '#FBE9E9',
      },
      fontFamily: {
        jaro: ['Jaro', 'sans-serif'],
        sans: ['Arial', 'Helvetica', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
