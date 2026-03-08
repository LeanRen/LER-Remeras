import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';
import db from '@astrojs/db';

export default defineConfig({
  output: 'server',
  adapter: vercel(),
  integrations: [db()]
});