import type { Config } from "tailwindcss";

const config: Config = {
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
      backgroundImage: {
        'gradient': 'linear-gradient(to right, rgba(254, 210, 206, 1) 100%, rgba(254, 210, 206, 1) 80%, rgba(255, 169, 164, 0.74) 74%, rgba(230, 129, 216, 0.53) 53%, rgba(139, 159, 232, 0.26) 26%, rgba(53, 195, 243, 0) 0%)',
      },
    },
  },
  plugins: [],
};
export default config;
