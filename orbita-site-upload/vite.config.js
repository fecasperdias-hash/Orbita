import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// GitHub Pages: repo em https://usuario.github.io/NOME-DO-REPO/
// Se o repositório tiver outro nome, altere aqui ou defina GITHUB_PAGES_BASE=/seu-repo/
const githubPagesBase = process.env.GITHUB_PAGES_BASE || '/orbita-site/';

export default defineConfig({
  base: process.env.GITHUB_PAGES === 'true' ? githubPagesBase : '/',
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 5173,
    strictPort: false,
    host: true,
    open: true,
  },
  preview: {
    port: 4173,
    host: true,
  },
});
