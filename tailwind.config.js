/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./(Pages)/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {

    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        light_bg:"#FFFFFF",
        dark_bg:"#2c3e50",
        light_txt:"#000000",
        dark_txt:"#FFFFFF",
        footer:"#838383"
      },
    },
  },
  plugins: [],
};
