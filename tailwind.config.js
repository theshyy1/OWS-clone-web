/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss/plugin";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      black: "#000",
      white: "#fff",
      orange: "#E65F2B",
      background: {
        dark: "#EBDFD7",
        light: "#F2EAE5",
      },
      text: {
        light: "#9B9B9B",
      },
      error: "#dc3545",
      success: "#28a745",
      warning: "#ffc107",
    },
  },
  plugins: [
    plugin(function ({ addComponents, theme }) {
      addComponents({});
    }),
  ],
};
