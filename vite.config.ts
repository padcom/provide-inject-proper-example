import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// @ts-ignore because there is no type information for this library
import eslint from 'vite-plugin-eslint'

export default defineConfig({
  plugins: [
    vue(),
    eslint(),
  ],
})
