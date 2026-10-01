/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBg: "#050814",
        cardBg: "#0B1021",
        accentPurple: "#8B5CF6",
        accentBlue: "#2563EB",
      },
    },
  },
  plugins: [],
}
