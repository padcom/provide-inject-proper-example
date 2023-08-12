import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// @ts-ignore because there is no type information for this library
import eslint from 'vite-plugin-eslint'

const CUSTOM_ELEMENTS = [
  'cool-mixed',
  'recursive-structure-renderer',
]

export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: tag => CUSTOM_ELEMENTS.includes(tag),
        },
      },
    }),
    eslint(),
  ],
})
