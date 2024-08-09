/** @type {import('tailwindcss').Config} */ module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: { pretendard: ["Pretendard", "sans-serif"] },
      screens: {
        maxmd: { max: "767px" },
      },
    },
  },
  plugins: [],
};
