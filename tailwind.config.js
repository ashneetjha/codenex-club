/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        colors: {
          cyan: "#00CCFF",
          purple: "#9747FF",
          black: "#000000",
          grayText: "#B0B0B0",
        },
        fontFamily: {
          inter: ["Inter", "sans-serif"],
        },
      },
    },
    plugins: [],
  };
  