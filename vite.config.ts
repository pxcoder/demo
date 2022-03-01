import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import importCDN from 'vite-plugin-cdn-import';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    importCDN({
      modules: [
        {
          name: 'vue',
          var: 'Vue',
          path: '//unpkg.com/vue@3.2.25/dist/vue.global.prod.js',
        },
        {
          name: 'element-plus',
          var: 'ElementPlus',
          path: '//unpkg.com/element-plus@2.0.2/dist/index.full.min.js',
        },
      ],
    }),
  ],
  base: process.env.NODE_ENV === 'production' ? '/demo/' : '/',
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  build: {
    outDir: './docs',
  },
});
