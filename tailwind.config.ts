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
        // Rediseño (sep 2026): papel y tinta, y un solo acento, la lima del logo.
        papel: '#F6F2EA',
        blanco: '#FFFDF8',
        tinta: '#1C1B19',
        gris: '#6F6A62',
        linea: '#E3DDD2',
        lima: '#DCF24B',
        // Los nombres antiguos siguen vivos en el blog y en los casos:
        // apuntan a la paleta nueva para no tener que tocar esas páginas todavía.
        'primary-brand': '#1C1B19',
        'secondary-brand': '#DCF24B',
        'accent-green': '#DCF24B',
        'background-light': '#F6F2EA',
        'text-dark': '#1C1B19',
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        logo: ['var(--font-logo)', 'sans-serif'],
        mano: ['var(--font-mano)', 'cursive'],
        heading: ['var(--font-sans)', 'sans-serif'],
        body: ['var(--font-sans)', 'sans-serif'],
        abril: ['var(--font-serif)', 'serif'],
      },
    },
  },
  plugins: [],
};

export default config;
