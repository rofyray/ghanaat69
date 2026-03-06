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
        "ghana-red": "#CE1126",
        "ghana-gold": "#FCD116",
        "ghana-green": "#006B3F",
        "ghana-black": "#000000",
        "deep-charcoal": "#0E0E12",
        "dark-panel": "#16161C",
        "crt-dark": "#1A1A22",
        "crt-green": "#6BFF8E",
        "amber": "#F39C12",
        "worn-white": "#D6D0C4",
        "faded-white": "#8A857B",
      },
      fontFamily: {
        display: ["var(--font-press-start)", "monospace"],
        body: ["var(--font-space-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
