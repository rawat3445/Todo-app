import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/Todo-app/",  // This line is REQUIRED for GitHub Pages deployment
  plugins: [react()],
});
