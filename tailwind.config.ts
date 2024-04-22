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
        header: ['var(--font-sports-world)']
      },
      colors: {
        green: {
          500: "#26352E"
        },
        orange1: {
          500: "#F25F40"
        },
        orange2: {
          500: "#EE6D45"
        },
        cream: {
          500: "#FBF6DE"
        }
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
