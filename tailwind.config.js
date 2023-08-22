/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgblue: "#0A1F36",
        txwhite: "#F5F9FD",
        txyellow: "#DDA64D",
      },
    },
    plugins: [],
  },
};
