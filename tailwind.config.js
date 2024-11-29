/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#ff8000",
        secondary: "#fe9b37",
        custom: {
          background: "var(--background)",
          text: "var(--text)",
          hover: "var(--hover)",
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
}
