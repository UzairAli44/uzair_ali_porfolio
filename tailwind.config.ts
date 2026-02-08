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
        surface: "#0a0a0f",
        surfaceElevated: "#12121a",
        accent: "#00d4aa",
        accentDim: "#00a884",
        accentGlow: "rgba(0, 212, 170, 0.4)",
        muted: "#6b7280",
        border: "#1f2937",
        violet: "#8b5cf6",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
        "slide-up-delay": "slideUp 0.7s ease-out forwards",
        float: "float 6s ease-in-out infinite",
        "glow-pulse": "glowPulse 3s ease-in-out infinite",
        "gradient-shift": "gradientShift 8s ease infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        glowPulse: {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "0.9" },
        },
        gradientShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "grid-pattern":
          "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
        "gradient-accent":
          "linear-gradient(135deg, #00d4aa 0%, #00a884 50%, #8b5cf6 100%)",
        "gradient-hero-name":
          "linear-gradient(135deg, #00d4aa 0%, #5eead4 50%, #8b5cf6 100%)",
      },
      backgroundSize: {
        grid: "48px 48px",
        "200%": "200% 200%",
      },
      boxShadow: {
        glow: "0 0 40px -10px rgba(0, 212, 170, 0.35)",
        "glow-lg": "0 0 60px -15px rgba(0, 212, 170, 0.4)",
        card: "0 4px 24px -4px rgba(0, 0, 0, 0.4)",
        "card-hover": "0 20px 40px -12px rgba(0, 212, 170, 0.15)",
      },
    },
  },
  plugins: [],
};

export default config;
