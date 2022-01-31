import { defineConfig } from "vite";
import { createVuePlugin } from "vite-plugin-vue2";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    createVuePlugin(),
    federation({
      name: "home",
      filename: "remoteEntry.js",
      exposes: {
        "./home-button": "./src/components/Button.vue",
        "./home-section": "./src/components/Section.vue",
      },
      shared: ["vue"],
    }),
  ],
  server: {
    port: 9001,
  },
  build: {
    target: "es2020",
    minify: false,
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        minifyInternalExports: false,
      },
    },
  },
});
