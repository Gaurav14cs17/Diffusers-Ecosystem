import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Diffusers-Ecosystem/',
  build: {
    outDir: '../docs',
    emptyOutDir: true
  }
})
