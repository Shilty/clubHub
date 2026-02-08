/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",           // Vite entry HTML
    "./src/**/*.{js,ts,jsx,tsx}" // All React/TS files
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: "#f2f5f4",       // very light gray
          secondary: "#cfd6db",     // light cool gray
        },
        text: {
          primary: "#273742",       // dark blue-gray
          muted: "rgba(39, 55, 66, 0.7)",
          placeholder: "rgba(39, 55, 66, 0.5)",
          inverse: "#f2f5f4",
        },
        accent: "#ffa35c",           // orange
        border: {
          DEFAULT: "rgba(39, 55, 66, 0.2)",
          focus: "#ffa35c",
        },
        btn: {// button
          primary: {
            bg: "#ffa35c",
            text: "#f2f5f4",
          },
          secondary: {
            bg: "#273742",
            text: "#f2f5f4",
          },
        },
      },
      brightness: {
        hover: "0.95",
        active: "0.9",
      },
      opacity: {
        disabled: "0.4",
      },
    },
  },
  plugins: [],
}
