import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/TexasUAB/', // Set base for GitHub Pages deployment
  plugins: [react()],
  root: '.',
  build: {
    outDir: 'dist',
  },
  server: {
    open: true,
  },
});
