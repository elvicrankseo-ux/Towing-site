import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        asphalt: "#181A1D",
        steel: "#3A3F45",
        chalk: "#F3F1EA",
        amber: "#FFB020",
        vest: "#C6D200",
        signal: "#E4402C",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      keyframes: {
        beacon: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.4", transform: "scale(0.85)" },
        },
        sweep: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        beacon: "beacon 1.4s ease-in-out infinite",
        sweep: "sweep 2.6s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
