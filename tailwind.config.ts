import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#050505",
        smoke: "#9CA3AF",
        panel: "rgba(255,255,255,0.06)",
        line: "rgba(255,255,255,0.12)",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["SFMono-Regular", "ui-monospace", "monospace"],
      },
      boxShadow: {
        glow: "0 24px 80px rgba(255,255,255,0.08)",
      },
      backgroundImage: {
        grid: "linear-gradient(rgba(255,255,255,.055) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.055) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};

export default config;
