module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        logo: ["Satisfy"],
        body: ["Inter"],
      },
      colors: {
        steel: {
          50: "#F9FAFB",
          100: "#F3F6F8",
          200: "#E3E8F0",
          300: "#CED1E8",
          400: "#ACA9D8",
          500: "#817FC3",
          600: "#5C5AA2",
          700: "#45457D",
          800: "#33355A",
          900: "#282B45",
        },
      },
    },
  },
  plugins: [],
};
