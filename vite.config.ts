import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react';
import resolve from "@rollup/plugin-node-resolve";
import { fileURLToPath } from 'node:url';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "./runtimeConfig": "./runtimeConfig.browser",
    },
  },
  plugins: [
    resolve({
      browser: true,
      preferBuiltins: false,
      dedupe: ["antd"]
    }),
    react(),
  ],
})
