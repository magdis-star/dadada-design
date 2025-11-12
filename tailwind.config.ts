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
        'primary-brand': '#059669',
        'secondary-brand': '#F0B53D',
        'accent-green': '#6EE7B7',
        'background-light': '#F7E5D4',
        'text-dark': '#2D3748',
      },
      fontFamily: {
        heading: ['var(--font-poppins)', 'sans-serif'],
        body: ['var(--font-nunito)', 'sans-serif'],
        abril: ['var(--font-abril)', 'cursive'],
      },
    },
  },
  plugins: [],
};

export default config;
