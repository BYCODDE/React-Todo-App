/** @type {import('tailwindcss').Config} */
export default {
  important:true,
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
      outline: {
        custom: ['1px solid red '], 
      },
      colors: {
        customColor: "#25273D",
        customColor2: "rgba(118, 121, 146, 1)",
        customColor3: "#494C6B",
        customColor4: "#9495A5",
        customColor5: '#3A7CFD',
        background: "#FFF",
        background2: "#F3F3F5",
        background3: "#E3E4F1",
      },
      fontFamily: {
        sans: ["CustomFont", "sans-serif"],
      },
      boxShadow: {
        custom: "0 0 0 2px rgba(227, 228, 241, 0.6)",
        customColor2: "0 0 0 2px rgba(57, 58, 75, 1)",
      },
    },
  },
  plugins: [],
};
