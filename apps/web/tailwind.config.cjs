/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app.tsx"
  ],
  theme: {
    extend: {
      colors: {
        neutral: {
          "light": "#fafafa",
          "light-hover": "#f5f5f5",
          "light-active": "#e5e5e5",
          "normal": "#d4d4d4",
          "normal-hover": "#a3a3a3",
          "normal-active": "#737373",
          "dark": "#525252",
          "dark-hover": "#404040",
          "dark-active": "#262626",
          "darker": "#171717"
        },
        blue: {
          "light": "#eff6ff",
          "light-hover": "#dbeafe",
          "light-active": "#bfdbfe",
          "normal": "#93c5fd",
          "normal-hover": "#60a5fa",
          "normal-active": "#3b82f6",
          "dark": "#2563eb",
          "dark-hover": "#1d4ed8",
          "dark-active": "#1e40af",
          "darker": "#1e3a8a",
        }
      }
    },
  },
  plugins: [],
}
