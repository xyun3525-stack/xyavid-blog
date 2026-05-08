// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://xyavid.github.io',
  base: '/myblog',

  vite: {
    plugins: [tailwindcss()],
  },

  markdown: {
    syntaxHighlight: 'prism',
  },
});
