import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react';
import compression from "vite-plugin-compression";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
  compression({
    algorithm: "brotliCompress", // ✅ Corrected from "brotilCompress"
    ext: ".br", // Output file extension for Brotli
    threshold: 1024, // Only compress files larger than 1KB
    deleteOriginFile: false, // Keep original files
  }),


  ],
})
