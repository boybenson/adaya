/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ugBlue: "#143F79",
        sidebarGray: "#F7F7F7",
        ugBrown: "#D1AB66",
        pink: "#F178B6",
      },
    },
  },
  plugins: [],
};
