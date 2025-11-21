// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        snow: "#F8F2F4",
        melon: "#F2ABA6",
        bittersweat: "#E8685E",
        red: "#D52B1E",
        darker: "#6B150F",

        white: "#FFFFFF",
        silver: "#BCB8B1",
        greyOlive: "#8A817C",
        taupe: "#463F3A",
        black: "#000000",
      },
      backgroundImage: {
        linear: "linear-gradient(to right, #6B150F, #D52B1E)",
      },
    },
  },
  plugins: [],
};

export default config;
