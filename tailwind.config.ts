import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['var(--font-glacial-indifference)'],
        header: ['var(--font-garamond)']
      },
      colors: {
        blue: {
          500: "#151547",
          600: "#0d0d39"
        },
        red: {
          500: "#EB2025"
        },
        cream: {
          500: "#FBF6DE"
        }
      },
      backgroundImage: {
        "flag": "url('../public/american-flag.jpg')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
