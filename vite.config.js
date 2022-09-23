import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { minifyHtml, injectHtml } from "vite-plugin-html";
import path from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig(({ mode }) => {
  require("dotenv").config({ path: "./.env" });
  const plugins = [
    vue(),
    minifyHtml(),
    injectHtml({
      injectData: {
        version: new Date(),
      },
    }),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ];

  return {
    plugins,
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
        comps: path.resolve(__dirname, "src/components/"),
        views: path.resolve(__dirname, "src/views/"),
        styles: path.resolve(__dirname, "src/styles/"),
        Service: path.resolve(__dirname, "./src/service/"),
      },
    },
    server: {
      port: process.env.VUE_APP_PORT || 8014,
      open: true,
      proxy: {
        "^/rest": {
          target: process.env.VUE_APP_PROXY ,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/rest/, ""),
        },
      },
      host: true,
    },
    base: "./",
  }
})
