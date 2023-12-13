import { defineConfig } from 'astro/config';

import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  publicDir: 'static',
  outDir: 'public',
  integrations: [vue()],
  // 加上這個配置，主要是為了避免打包後的圖片自動產生 hash，
  // 同時為每個頁面新增一個檔案來存放該頁面的 HTML 內容。
  // 例如，如果新增了一個名為 about 的頁面，則最終建置的結果將是 about/about.html。
  vite: {
    build: {
      rollupOptions: {
        output: {
          manualChunks: 'app',
          entryFileNames: `assets/[name].js`,
          chunkFileNames: `assets/[name].js`,
          assetFileNames: `assets/[name].[ext]`,
        },
      },
    },
  },
});
