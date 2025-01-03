import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        fredoka: ["var(--font-fredoka)"],
        luckiestGuy: ["var(--font-luckiestGuy)"],
      },
      boxShadow: {
        custom: "0px 6px 8px rgba(0, 0, 0, 0.2)",
        customHover: "0px 4px 6px rgba(255, 255, 255, 0.8)",
        dextoolShadow: "0px 6px 12px rgba(0, 0, 0, 0.2)",
        dexscreenerShadwow: "0px 6px 8px rgba(0, 0, 0, 0.2)",
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        scroll: "scroll 10s linear infinite", // Adjust timing (10s for speed)
      },
    },
  },
  plugins: [],
} satisfies Config;
