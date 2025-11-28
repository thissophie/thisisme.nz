import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

const site = (process.env.VERCEL_TARGET_ENV === 'production' && 'https://www.thisisme.nz') ||
  (process.env.VERCEL_TARGET_ENV === 'preview' && `https://${process.env.VERCEL_URL}`) ||
  (process.env.VERCEL_TARGET_ENV === 'development' && `https://${process.env.VERCEL_URL}`) ||
  'http://localhost';

export default defineConfig({
  integrations: [],
  output: 'static',
  site,

  vite: {
    plugins: [tailwindcss()],
  },
});