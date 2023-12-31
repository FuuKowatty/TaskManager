/** @type {import("prettier").Config} */
module.exports = {
  semi: true,
  trailingComma: "none",
  singleQuote: false,
  printWidth: 80,
  bracketSameLine: true,
  tailwindConfig: "./tailwind.config.cjs",
  plugins: [require("prettier-plugin-tailwindcss")],
};
