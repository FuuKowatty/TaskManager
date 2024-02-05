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
      '/accounts': 'http://ec2-16-171-206-207.eu-north-1.compute.amazonaws.com:8000',
      '/api': 'http://ec2-16-171-206-207.eu-north-1.compute.amazonaws.com:8000'
    }
   },
   optimizeDeps: {
    entries: [
      '@radix-ui/react-select/styles',
    ],
  },
})


