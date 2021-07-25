import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      manifest: {
        name: '写メ丸',
        short_name: '写メ丸',
      },
    }),
  ],
  base: '/shamemaru/',
  resolve: {
    alias: {
      '@typings': './typings',
    },
  },
});
