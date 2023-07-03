/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lightGray: "#f2f2f2",
        darkGray: "#333333",
      },
    },
    fontFamily: {
      roboto: ["var(--font-roboto)"],
      "golos-text": ["var(--font-golos-text)"],
    },
  },
  plugins: [],
};
