import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslintPlugin from "@nabla/vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [react(), eslintPlugin()],
  base:
    process.env.NODE_ENV === "production" ? "/tequiniela-oscares/" : undefined,
});
