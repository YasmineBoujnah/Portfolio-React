import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
  base: "/Boujnah-Yasmine-Portfolio",
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        silenceDeprecations: ['mixed-decls'],
      },
    },
  },
})
