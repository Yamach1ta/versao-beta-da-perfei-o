import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/arquivo-confidencial/', //versao-beta-da-perfei-o
  plugins: [react()],
})
