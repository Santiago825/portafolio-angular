const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  // Estrategia por clase: Tailwind aplica los `dark:` cuando <html> tiene la clase "dark".
  // La clase la pone (1) el script inline de index.html antes del primer render y
  // (2) ThemeService después de arrancar Angular.
  darkMode: 'class',

  // Angular usa .html y .ts (plantillas inline) — no hace falta escanear nada más.
  content: ['./src/**/*.{html,ts}'],

  theme: {
    extend: {
      colors: {
        // Azul de marca: 500 es el #4364c0 original del portafolio en React.
        brand: {
          50: '#eef2fb',
          100: '#dce4f7',
          200: '#b9c8ef',
          300: '#8fa6e4',
          400: '#6683d3',
          500: '#4364c0',
          600: '#3651a3',
          700: '#2d4283',
          800: '#263669',
          900: '#1f2b53',
        },
        // Grises azulados: 600 es el #434752 original (el fondo del modo oscuro antiguo).
        ink: {
          50: '#f3f4f7',
          100: '#e6e8ec',
          200: '#cdd0d8',
          300: '#a3a8b5',
          400: '#7b8090',
          500: '#5a5f6d',
          600: '#434752',
          700: '#383c47',
          800: '#2e313b',
          900: '#252830',
          950: '#1c1e26',
        },
      },
      fontFamily: {
        // Nombres que exponen @fontsource-variable/* (self-hosted: sin peticiones a Google).
        sans: ['"Hanken Grotesk Variable"', ...defaultTheme.fontFamily.sans],
        display: ['"Fraunces Variable"', ...defaultTheme.fontFamily.serif],
      },
      // Medidas del "shell": una sola fuente de verdad para topbar y sidebar.
      spacing: {
        topbar: '4rem',
        sidebar: '15rem',
      },
    },
  },
  plugins: [],
};
