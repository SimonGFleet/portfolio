import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // Relative assets work whether Pages is hosted at / or /repository-name/.
  base: "./",
});
