/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,hbs}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto Condensed", "sans-serif"],
      },
      colors: {
        mustard: "#EED974",
        dark: "#28292B",
      },
      screens: {
        xxs: "361px",
        xs: "401px",
        x: "439px",
      },
    },
  },
  plugins: [],
};
