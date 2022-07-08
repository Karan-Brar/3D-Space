import { defineConfig } from "vite";

export default defineConfig({
  base: "/my3dproject/",
  build: {
    chunkSizeWarningLimit: 1000,
  },
});
