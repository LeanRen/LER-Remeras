import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';
import db from '@astrojs/db';

export default defineConfig({
  output: 'server',
  adapter: vercel({
    // Movemos la configuración de seguridad aquí si es necesario
    webAnalytics: { enabled: true },
  }),
  integrations: [db()],
  // Si la línea 7 te daba error, es mejor quitar el bloque 'security' 
  // y dejar que Vercel maneje el origen por defecto.
});