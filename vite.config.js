import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/react-map-import-export/', // برای GitHub Pages ضروریه
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
})
