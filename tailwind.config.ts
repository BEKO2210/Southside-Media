import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Marken-Hintergrund (Near-Black, warm)
        ink: {
          DEFAULT: "#0a0a0c",
          50: "#16161a",
          100: "#101014",
          900: "#050506",
        },
        // Marken-Akzent (Orange → Rot, exakt aus der Preisübersicht)
        brand: {
          DEFAULT: "#ff6a2b",
          50: "#fff3ec",
          100: "#ffe1d1",
          200: "#ffc1a3",
          300: "#ff9d6e",
          400: "#ff7a3d",
          500: "#ff6a2b",
          600: "#ed4d12",
          700: "#c43a0e",
          800: "#9c2f12",
          900: "#7e2a14",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-sora)", "var(--font-inter)", "sans-serif"],
      },
      backgroundImage: {
        "brand-gradient":
          "linear-gradient(135deg, #ff8a3d 0%, #ff6a2b 45%, #e5371a 100%)",
        "radial-glow":
          "radial-gradient(60% 60% at 50% 0%, rgba(255,106,43,0.18) 0%, rgba(255,106,43,0) 70%)",
      },
      boxShadow: {
        glass: "0 8px 40px -12px rgba(0,0,0,0.6)",
        "brand-glow": "0 10px 40px -10px rgba(255,106,43,0.45)",
      },
      backdropBlur: {
        xs: "2px",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 6s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
