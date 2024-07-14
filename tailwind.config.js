/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      dropShadow: {
        "white-md": "0 0px 3px rgba(255,255,255,0.75)",
        "white-lg": "0 0px 5px rgba(255,255,255.1)",
      },
      fontFamily: {
        pretendard: "Pretendard",
      },
      backgroundColor: {
        "hanyang-blue": "#0E4A84",
        "hipe-blue":"#78D4FC"
      },
    },
  },
  plugins: [],
};