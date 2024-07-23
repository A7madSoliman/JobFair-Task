/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    container: {
      center: true,
      screens: {
        sm: "690px",
        md: "928px",
        lg: "1220px",
        xl: "1420px",
        "2xl": "1680px",
      },
    },
  },
  plugins: [],
};
