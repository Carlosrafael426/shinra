import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // caminhos relativos: funciona em GitHub Pages (user.github.io/repo/),
  // em subpasta, em domínio próprio e no preview local — sem hardcode do repo.
  base: './',
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    port: 3030,
    strictPort: true,
    host: true,
  },
  preview: {
    port: 3030,
    strictPort: true,
    host: true,
  },
})


