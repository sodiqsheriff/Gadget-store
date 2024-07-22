// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  // other config options
  server: {
    proxy: {
      '/api': {
        target: 'https://gadget-store-hpjw.onrender.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      },
    },
  },
  resolve: {
    alias: {
      '@fortawesome/react-fontawesome': '@fortawesome/react-fontawesome/dist/react-fontawesome.es.js',
      // Add aliases for other Font Awesome packages if needed
    },
  },
});
