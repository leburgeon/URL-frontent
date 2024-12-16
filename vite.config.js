import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      },
      '/': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        rewrite: (path) => {
          return path === '/' ? '/index.html' : path
        },
      }
    }
  }
})
