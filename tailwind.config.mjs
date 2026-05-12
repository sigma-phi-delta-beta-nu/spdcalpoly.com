/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}"],
  theme: {
    extend: {
      colors: {
        crimson: {
          DEFAULT: "#A4151E",
          deep: "#8B0000",
          dark: "#5C0A0F",
          ink: "#3A0608",
        },
        gold: {
          DEFAULT: "#C8A951",
          soft: "#D9BE6E",
          dim: "#8E7635",
        },
        ink: {
          DEFAULT: "#141414",
          soft: "#1E1E1E",
          mid: "#2A2A2A",
        },
        ivory: {
          DEFAULT: "#FAF7F1",
          warm: "#F4EFE4",
          edge: "#E8E1D0",
        },
      },
      fontFamily: {
        display: [
          "Fraunces",
          "Cormorant Garamond",
          "Playfair Display",
          "Georgia",
          "serif",
        ],
        sans: ["Manrope", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.045em",
        widest2: "0.24em",
      },
      boxShadow: {
        ember: "0 30px 80px -40px rgba(164,21,30,0.55)",
        plate:
          "0 1px 0 rgba(20,20,20,0.06), 0 14px 40px -22px rgba(20,20,20,0.18)",
      },
      backgroundImage: {
        "paper-grain":
          "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='180' height='180'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0.08  0 0 0 0 0.05  0 0 0 0 0.04  0 0 0 0.045 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
      },
      keyframes: {
        "rise-in": {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "stroke-draw": {
          "0%": { strokeDashoffset: "1000" },
          "100%": { strokeDashoffset: "0" },
        },
      },
      animation: {
        "rise-in": "rise-in 1.1s cubic-bezier(.2,.7,.2,1) both",
        "fade-in": "fade-in 1.2s ease both",
        "stroke-draw": "stroke-draw 2.4s ease forwards",
      },
    },
  },
};
