import { resolve } from "path"
import { defineConfig } from "vite"
import dts from "vite-plugin-dts"

// vite.config.js
export default defineConfig ({
  plugins: [dts()],
    build: {
      lib: {
        entry: resolve(__dirname, 'src/index.ts'),
        name: 'core',
        fileName: (format) => `core.${format}.js`
      },
      rollupOptions: {
        external: ['react', 'jotai'],
        output: {
          globals: {
            react: 'React',
            jotai: 'jotai'
          }
        }
      }
    }
  })