import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// Static-only build. No SSR adapters.
export default defineConfig({
  base: '/cavern/',
  site: 'https://cavern-erbil.example.com',
  output: 'static',
  integrations: [tailwind({ applyBaseStyles: false })],
  build: {
    inlineStylesheets: 'auto',
  },
  vite: {
    ssr: { noExternal: ['three', 'lenis'] },
  },
});