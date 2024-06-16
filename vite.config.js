import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // base: 'https://Vignesh-Mariappan.github.io/six-pack-mind/',
});

/* 
 add the following in package.json for hosting in github pages
 "homepage": "https://Vignesh-Mariappan.github.io/six-pack-mind",
*/
