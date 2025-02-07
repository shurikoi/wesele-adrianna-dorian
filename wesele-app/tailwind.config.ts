import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      fellFrench: ["var(--font-fell-french)"],
      sfPro: ["var(--font-sf-pro)"],
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        textPeach: "#fcebd5",
        backgroundPeach: '#d2b48c',
        // background: "bg-[#FFF8E2]",
        // primary: "",
      },
    },
  },
  plugins: [],
} satisfies Config;
