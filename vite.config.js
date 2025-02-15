import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const isGitHubPages = process.env.NODE_ENV === 'production' && process.env.GITHUB_ACTIONS;

export default defineConfig({
  plugins: [react()],
  base: isGitHubPages ? '/react-map-import-export/' : '/wp-content/plugins/react-map-shortcode/dist/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
});
