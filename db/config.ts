import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';
import db from '@astrojs/db';

export default defineConfig({
  output: 'server',
  adapter: vercel(),
  integrations: [db()],
  security: {
    checkOrigin: true,
  },
  server: {
    // Esto le dice a Astro que confíe en tu dominio de Vercel
    allowedHosts: ['ler-remeras.vercel.app'] 
  }
});