import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: { "2xl": "1280px" },
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1E2228", // Charcoal
          dark: "#14171B",
          light: "#2C323A",
        },
        accent: {
          DEFAULT: "#A3E635", // Lime Green
          dark: "#84CC16",
          light: "#BEF264",
        },
        secondary: {
          DEFAULT: "#374151",
        },
        background: "#FFFFFF",
        surface: "#F9FAFB",
        foreground: "#0F172A",
        muted: {
          DEFAULT: "#64748B",
        },
        border: "#E2E8F0",
      },
      fontFamily: {
        display: ["var(--font-geist-sans)", "Inter", "sans-serif"],
        sans: ["var(--font-inter)", "Inter", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["4.5rem", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "display-lg": ["3.25rem", { lineHeight: "1.08", letterSpacing: "-0.02em" }],
        "display-md": ["2.25rem", { lineHeight: "1.15", letterSpacing: "-0.01em" }],
      },
      maxWidth: {
        content: "1280px",
      },
      boxShadow: {
        premium: "0 20px 40px -15px rgba(30, 34, 40, 0.15)",
        card: "0 4px 20px -4px rgba(30, 34, 40, 0.08)",
        hover: "0 12px 30px -8px rgba(30, 34, 40, 0.12)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0", opacity: "0" },
          to: { height: "var(--radix-accordion-content-height)", opacity: "1" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)", opacity: "1" },
          to: { height: "0", opacity: "0" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.25s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in-up": "fade-in-up 0.5s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
