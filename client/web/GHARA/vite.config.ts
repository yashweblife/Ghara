import tailwind from '@tailwindcss/vite'
import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwind()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5170',
        changeOrigin: true,
        secure: false
      },

    }
  }
})
