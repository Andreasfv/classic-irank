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
        dk: "#C41E3A",
        druid: "#FF7C0A",
        hunter: "#AAD372",
        mage: "#3FC7EB",
        paladin: "#F58CBA",
        priest: "#FFFFFF",
        rogue: "#FFF569",
        shaman: "#0070DE",
        warlock: "#8787ED",
        warrior: "#C79C6E",
      },
    },
  },
  plugins: [],
} satisfies Config;
