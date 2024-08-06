/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {

      screens: {
        xxl: { max: "1500px" },
        xl: { max: "1300px" },
        lg: { max: "1024px" },
        md: { max: "768px" },
        sm: { max: "640px" },
        xs: { max: "500px" },
        xxs: { max: "400px" },
        xxxs: { max: "376px" },
      },
    },
  },
  plugins: [],
};
