import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';
import db from '@astrojs/db';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  // ESTA LÍNEA ES CLAVE:
  output: 'server', 
  adapter: netlify(),
  integrations: [tailwind(), db()],
});
