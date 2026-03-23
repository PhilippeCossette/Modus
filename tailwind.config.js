/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "hsl(var(--color-primary))",
        secondary: "hsl(var(--color-secondary))",
        accent: "hsl(var(--color-accent))",
        background: "hsl(var(--color-background))",
        "page-background": "hsl(var(--color-page-background))",

        "text-primary": "hsl(var(--color-text-primary))",
        "text-secondary": "hsl(var(--color-text-secondary))",
        button: "hsl(var(--color-button))",
        muted: "hsl(var(--color-muted))",
        "grid-line": "hsl(var(--color-border-grid))",
      },

      fontFamily: {
        primary: ["var(--font-primary)"],
        secondary: ["var(--font-secondary)"],
      },

      spacing: {
        sm: "var(--spacing-small)",
        md: "var(--spacing-medium)",
        lg: "var(--spacing-large)",
      },

      borderRadius: {
        sm: "var(--border-radius-small)",
        md: "var(--border-radius-medium)",
        lg: "var(--border-radius-large)",
      },

      keyframes: {
        "ping-long": {
          "0%": {
            transform: "scale(1)",
            opacity: "1",
          },
          "60%": {
            transform: "scale(1.6)",
            opacity: "1",
          },
          "100%": {
            transform: "scale(2)",
            opacity: "0",
          },
        },
      },
      animation: {
        "ping-long": "ping-long 2s cubic-bezier(0,0,0.2,1) infinite",
      },
    },
  },
  plugins: [],
};
