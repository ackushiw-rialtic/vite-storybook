import Unocss from 'unocss/vite'
import { defineConfig } from 'vite'
import ViteFonts from 'vite-plugin-fonts'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Unocss(),
    ViteFonts({
      google: {
        families: ['Poppins']
      },
    })
  ],
  server: {
    port: 8080
  }
})
