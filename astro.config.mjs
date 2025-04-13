// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import vue from '@astrojs/vue';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://dylanbritz.dev',
  trailingSlash: 'ignore',
  integrations: [vue(), mdx()],
  vite: {
    plugins: [tailwindcss()],
  },
});
