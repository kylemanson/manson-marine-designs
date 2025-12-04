import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/", // IMPORTANT: ensures assets load correctly on all devices
  server: {
    port: 5173,
    open: true,
  },
  build: {
    outDir: "dist",
  },
});
