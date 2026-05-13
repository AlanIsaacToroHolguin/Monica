import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://monicahernandez.com',
  build: {
    inlineStylesheets: 'auto'
  },
  vite: {
    ssr: {
      noExternal: ['gsap', 'lenis', 'swiper']
    }
  }
});
