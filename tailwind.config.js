/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  plugins: [require("@tailwindcss/forms")],
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        gloock: ["Gloock", "sans-serif"],
      },
      colors: {
        primary: "#f6f4ee",
        secondary: "#e4dece",
        tertiary: "#05727a",
        quaternary: "#b9b3a3",
        quinary: "#a8a191",
        senary: "#05727a",
        septenary: "#7fb5c5",
        octonary: "#3e9097",
        nonary: "#78d5d7",
      },

      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      boxShadow: {
        small: "0px 0px 16px 6px rgba(0,0,0,0.07)",
        medium: "0px 0px 16px 6px rgba(0,0,0,0.17)",
      },
    },
  },
};
