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
          DEFAULT: "#7ED321",
          dark: "#68B01B",
          light: "#EDFBDD",
        },
        secondary: {
          DEFAULT: "#1F2937",
        },
        background: "#FFFFFF",
        surface: "#F8FAFC",
        foreground: "#111827",
        muted: {
          DEFAULT: "#6B7280",
        },
        border: "#E5E7EB",
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
        premium: "0 20px 60px -15px rgba(31, 41, 55, 0.15)",
        card: "0 8px 30px -8px rgba(17, 24, 39, 0.08)",
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
      },
      animation: {
        "accordion-down": "accordion-down 0.25s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [],
};

export default config;
