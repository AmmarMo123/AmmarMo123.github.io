import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Relative base path: works regardless of the eventual repo name/subpath,
  // since this is a single static page with no client-side routing. If
  // client-side routing is added later, switch this to an absolute
  // '/<REPO_NAME>/' instead.
  base: './',
})
