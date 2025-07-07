import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  base: '/show/', // имя репозитория с / на конце
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})