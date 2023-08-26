import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true,
    },
    host: 'localhost', 
    strictPort: true,
    port: 3000, 
    proxy: {
      '/api': {
        target: 'http://localhost:8080', // Point to Quarkus service
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
      '/data': {
        target: 'http://store:5432', // Point to PostgreSQL container
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/data/, ''),
      },
    },
  },
})
