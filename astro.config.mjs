import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  integrations: [],
  output: 'static',
  site: process.env.VERCEL_URL && `https://${process.env.VERCEL_URL}` || 'https://www.thisisme.nz',

  vite: {
    plugins: [tailwindcss()],
  },
});