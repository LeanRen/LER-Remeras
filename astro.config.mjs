import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import db from '@astrojs/db';
import vercel from '@astrojs/vercel';

import netlify from '@astrojs/netlify';

export default defineConfig({
  integrations: [tailwind(), db()],
  output: 'server',
  adapter: netlify(),
});