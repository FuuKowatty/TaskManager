import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: '@', replacement: '/src' }],
   },
   server: {
    proxy: {
      '/accounts': 'http://localhost:8000',
      '/api': 'http://localhost:8000'
    }
   },
   optimizeDeps: {
    entries: [
      '@radix-ui/react-select/styles',
    ],
  },
})
