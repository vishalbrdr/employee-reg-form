/** @type {import('tailwindcss').Config} */
export default {
  daisyui: {
    themes: ["light", "dark", "nord"],
  },
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [require("daisyui")],
};
