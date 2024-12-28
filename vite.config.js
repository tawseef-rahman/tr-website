import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import fs from "fs";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/tr-website/",

  build: {
    outDir: "dist",
    rollupOptions: {
      plugins: [
        {
          name: "add-cname",
          writeBundle() {
            // Copy the CNAME file into the dist/ folder after build
            fs.copyFileSync(
              resolve(__dirname, "CNAME"),
              resolve(__dirname, "dist", "CNAME")
            );
          },
        },
      ],
    },
  },
});
