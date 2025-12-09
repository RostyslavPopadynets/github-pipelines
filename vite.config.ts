import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/github-pipelines/',
  plugins: [react()],
})
