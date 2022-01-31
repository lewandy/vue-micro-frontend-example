import { defineConfig } from "vite";
import { createVuePlugin } from "vite-plugin-vue2";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    createVuePlugin(),
    federation({
      name: "app",
      filename: "remoteEntry.js",
      remotes: {
        home: "http://localhost:9001/assets/remoteEntry.js",
      },
      shared: ["vue"],
    }),
  ],
  server: { port: 9000 },
  build: {
    target: "es2020",
    minify: false,
    cssCodeSplit: true,
    rollupOptions: {
      // sharedPlugin need input required
      // input:{},
      output: {
        minifyInternalExports: false,
      },
    },
  },
});
