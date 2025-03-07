import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/

export default defineConfig({
  base:'/myportfolio/',
  plugins: [react(), tailwindcss(),],
  resolve:{
    alias:{
      '@': 'src',
    },
  },
})
