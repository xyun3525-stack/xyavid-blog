// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://xyun3525-stack.github.io',
  base: '/xyavid-blog',

  vite: {
    plugins: [tailwindcss()],
  },

  markdown: {
    syntaxHighlight: 'prism',
  },
});
