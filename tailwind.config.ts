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
        surface: "#0a0a0a",
        surfaceElevated: "#121212",
        accent: "#FFD700",
        accentDim: "#FACC15",
        neonGreen: "#22c55e",
        muted: "#9ca3af",
        border: "#27272a",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      boxShadow: {
        "glow-yellow": "0 0 30px -5px rgba(255, 215, 0, 0.5)",
        "glow-green": "0 0 20px 0 rgba(34, 197, 94, 0.4)",
        "nav-glow": "0 -4px 24px -2px rgba(34, 197, 94, 0.35)",
      },
    },
  },
  plugins: [],
};

export default config;
