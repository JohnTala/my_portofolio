import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/my_portofolio/',  // Replace with your GitHub repo name
  build: {
    outDir: 'build', // Optional: ensures the build folder is called "build"
  }
})

