/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        night: "#0D0D1A",
        marine: "#1A1A2E",
        gold: "#C9A96E",
        cream: "#E8E0D0",
        border: "#2A2A3D",
        muted: "#A7A7B5",
      },
      fontFamily: {
        heading: ["'Cormorant Garamond'", "serif"],
        body: ["'DM Sans'", "sans-serif"],
        mono: ["'Space Grotesk'", "monospace"],
      },
      spacing: {
        section: "48px",
        element: "24px",
      },
    },
  },
  plugins: [],
};
