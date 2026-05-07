/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Aliases yang lebih deskriptif untuk dev experience
        "porto-bg": "#FFF4E0",
        "porto-surface": "#F3E5DD",
        "porto-border": "#D8C7C3",
        "porto-divider": "#E6D9D3",
        "porto-text": "#5C554D",
        "porto-muted": "#8C847A",
        "porto-btn": "#BE919C",
        "porto-btn-hover": "#A97885",
        "porto-btn-text": "#FFF8F6",
        "porto-accent": "#E5D1D0",
      },
      fontFamily: {
        body: ["'Fredoka'", "sans-serif"],
        display: ["'Fredoka'", "sans-serif"],
      },
      borderRadius: {
        // Override default supaya konsisten sama --radius
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
