import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
// import styleImport, { ElementPlusResolve } from 'vite-plugin-style-import';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  console.log({ mode });

  return {
    plugins: [
      vue(),
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ],
    // base: mode === 'production' ? '/demo/' : '/',
    base: '/demo/',
    resolve: {
      alias: {
        '@': '/src',
      },
    },
    build: {
      outDir: './docs',
    },
  };
});
