import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Primary — deep navy from logo
        navy: {
          950: "#081A34",
          900: "#0F244A",
          800: "#17305A",
          700: "#1F3B6B",
          600: "#2B518E",
          500: "#3A6AB2",
        },
        // Accent — bright cyan-blue from the logo shield and wordmark
        azure: {
          400: "#63C6E9",
          500: "#35B0E0",
          600: "#2596C4",
          700: "#1A78A0",
        },
        cream: {
          50: "#FBF8F1",
          100: "#F5EFE4",
          200: "#EDE3D0",
          300: "#DFD1B4",
        },
        clay: {
          500: "#B45340",
          600: "#963F30",
        },
        ink: {
          900: "#0B1310",
          700: "#1C2925",
          500: "#4A5751",
          400: "#6B766F",
        },
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-2xl": ["clamp(2.75rem, 8vw, 7rem)", { lineHeight: "0.98", letterSpacing: "-0.03em" }],
        "display-xl": ["clamp(2.25rem, 6vw, 5rem)", { lineHeight: "1.02", letterSpacing: "-0.025em" }],
        "display-lg": ["clamp(1.875rem, 4.5vw, 3.75rem)", { lineHeight: "1.08", letterSpacing: "-0.02em" }],
        "display-md": ["clamp(1.5rem, 3vw, 2.5rem)", { lineHeight: "1.18", letterSpacing: "-0.015em" }],
      },
      maxWidth: {
        "8xl": "88rem",
        "9xl": "96rem",
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-out",
        "fade-up": "fadeUp 1s ease-out",
        "slow-zoom": "slowZoom 20s ease-out infinite alternate",
        "marquee": "marquee 40s linear infinite",
      },
      keyframes: {
        fadeIn: { "0%": { opacity: "0" }, "100%": { opacity: "1" } },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slowZoom: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.08)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
