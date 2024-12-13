import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  root: './', // Ensure this matches the project root
  build: {
    rollupOptions: {
      input: '/src/main.jsx', // Ensure this points to the correct entry point
    },
  },
})
