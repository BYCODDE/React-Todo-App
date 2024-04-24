/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      "2xl": { max: "1535px" },
      xl: { max: "1279px" },
      lg: { max: "1023px" },
      md: { max: "768px" },
      sm: { max: "639px" },
    },
    extend: {
      colors: {
        customColor: '#25273D',
        customColor2: 'rgba(118, 121, 146, 1)'
      },
      fontFamily: {
        sans: ["CustomFont", "sans-serif"],
      },
      boxShadow: {
        custom: "0 0 0 2px rgba(227, 228, 241, 0.6)",
        customColor2: '0 0 0 2px rgba(57, 58, 75, 1)',

      },
    },
  },
  plugins: [],
};
