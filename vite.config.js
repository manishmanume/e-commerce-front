import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', 
  build: {
    outDir: 'dist', 
  },
  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: 'https://e-comerce-backend-lt0l.onrender.com',
        changeOrigin: true,
        secure: false,
      },
    },
  },
  resolve: {
    alias: {
      '@': '/src', 
    },
  },
  esbuild: {
    drop: ['console'], 
  },
});
