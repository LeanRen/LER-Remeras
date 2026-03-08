import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel'; // Cambiado aquí
import db from '@astrojs/db';

export default defineConfig({
  output: 'server',
  adapter: vercel(),
  integrations: [db()]
});