import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import db from '@astrojs/db';
import netlify from '@astrojs/netlify';

export default defineConfig({
  integrations: [tailwind(), db()],
  output: 'server', // <-- ESTO ES LO MÁS IMPORTANTE
  adapter: netlify(),
});