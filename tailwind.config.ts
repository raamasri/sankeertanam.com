import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FAF8F5",
        parchment: "#F5F0E8",
        ink: "#1A1A1A",
        "ink-light": "#4A4A4A",
        "ink-muted": "#8A8A8A",
        saffron: "#C45A2C",
        "saffron-dark": "#A04520",
        maroon: "#7A2E2E",
        "border-subtle": "#E8E2D8",
      },
      fontFamily: {
        serif: ["Playfair Display", "Georgia", "Times New Roman", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-lg": ["4rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display": ["3rem", { lineHeight: "1.15", letterSpacing: "-0.02em" }],
        "display-sm": ["2.25rem", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
        "heading": ["1.75rem", { lineHeight: "1.3" }],
        "body-lg": ["1.125rem", { lineHeight: "1.75" }],
        "body": ["1rem", { lineHeight: "1.75" }],
        "caption": ["0.875rem", { lineHeight: "1.5" }],
      },
      maxWidth: {
        "article": "42rem",
        "content": "72rem",
      },
      spacing: {
        "section": "6rem",
        "section-sm": "3rem",
      },
    },
  },
  plugins: [],
};

export default config;
