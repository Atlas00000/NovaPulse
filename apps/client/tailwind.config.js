// apps/client/tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./styles/**/*.{css}",
    "./node_modules/@shadcn/ui/dist/**/*.js"
  ],
  theme: {
    extend: {},
  },
  darkMode: "selector", // Change from "class" to "selector"
  plugins: [],
};
