/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,tsx,ts}"],
  theme: {
    extend: {
      colors: {
        "gray-01": "#0D1013",
        "gray-02": "#60616F",
        "gray-03": "#898A93",
        "gray-04": "#D5D5DB",
        "gray-05": "#FCFCFC",
        "gray": "#585858",
        "ciano-blue": "#3CEAF5",
        "strong-blue": "#334C8F",
        "sea-blue": "#3685D9",
        "light-purple": "#7A36D9",
      },
      keyframes: {
        "slow-rotate": {
          "0%": { transform: "rotate(0deg)"},
          "100%": { transform: "rotate(360deg)"}
        }
      },
      animation: {
        rotate: "slow-rotate 20s linear infinite"
      }
    },
  },
  plugins: [],
};
