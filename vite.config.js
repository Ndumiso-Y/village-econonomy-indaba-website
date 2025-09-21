import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/', // If deploying at domain root. Change to '/tvei/' if in a subfolder.
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
})
