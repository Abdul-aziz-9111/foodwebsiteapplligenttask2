import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: process.env.VITE_BASE_PATH || "/react-vite-deploy", // 👈 top-level par
  plugins: [
    react(),  
    tailwindcss(),  
  ],
})
