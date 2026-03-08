/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        street: {
          negro: '#0A0A0A',
          gris: '#1A1A1A',
          amarillo: '#FFD700',
          blanco: '#F5F5F5',
        }
      }
    },
  },
  plugins: [],
}