import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  base: '/show/', // замените на имя репозитория
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})