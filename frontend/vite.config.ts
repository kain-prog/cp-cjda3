import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '::',
    port: 5700,
    allowedHosts: true,
    proxy: {
      '/api': {
        target: 'http://backend:5701',
        changeOrigin: true,
      },
    },
  },
  resolve: {
    alias: {
      '@configs': path.resolve(__dirname, './src/@configs'),
    },
  },
});
