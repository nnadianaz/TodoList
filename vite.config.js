import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

<<<<<<< HEAD
export default defineConfig({
  plugins: [react()],
  root: './', // Ensure this matches the project root
  build: {
    rollupOptions: {
      input: '/src/main.jsx', // Ensure this points to the correct entry point
    },
  },
=======
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
>>>>>>> a58244a20e464d652423458d4bbd32831a7ce5ef
})
