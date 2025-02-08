import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "hsl(var(--primary))",
        accent: "hsl(var(--accent))",
        black: {
          pure: "hsl(0, 0%, 0%)",
          dark: "hsl(0, 0%, 10%)",
          light: "hsl(0, 0%, 15%)",
          mediumLight: "hsl(0, 0%, 25%)",
          medium: "hsl(0, 0%, 50%)",
        },
      },
      fontSize: {
        hero: [
          "3.65rem",
          {
            lineHeight: "1.6",
            letterSpacing: "-0.02em",
            fontWeight: "700",
          },
        ],
      },
      screens: {
        mobilesm: "320px",
        mobilemd: "375px",
        mobilexl: "425px",
      },
    },
  },
  plugins: [],
} satisfies Config;
