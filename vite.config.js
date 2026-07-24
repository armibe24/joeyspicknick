import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'node:fs'
import path from 'node:path'

// Copy the built index.html to 404.html so static hosts (e.g. GitHub Pages)
// serve the SPA for deep links like /impressum instead of a host 404.
function spaFallback() {
  return {
    name: 'spa-404-fallback',
    closeBundle() {
      const outDir = path.resolve(__dirname, 'dist')
      const index = path.join(outDir, 'index.html')
      const notFound = path.join(outDir, '404.html')
      if (fs.existsSync(index)) {
        fs.copyFileSync(index, notFound)
      }
    }
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), spaFallback()],
})
