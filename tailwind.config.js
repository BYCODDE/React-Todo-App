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
      fontFamily: {
        sans: ["CustomFont", "sans-serif"],
      },
    },
  },
  plugins: [],
};
