import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    theme: {
      extend: {
        height: {
          screen: ["100vh", "100dvh"],
        },
        minHeight: {
          screen: ["100vh", "100dvh"],
        },
        maxHeight: {
          screen: ["100vh", "100dvh"],
        },
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#ad00ff",
          secondary: "#0090ff",
          accent: "#827C3D",
          neutral: "#301C4C",
          "base-100": "#32325B",
          info: "#00d4e8",
          success: "#00f0a9",
          warning: "#ff6100",
          error: "#f81e58",
        },
      },
    ],
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
export default config;
