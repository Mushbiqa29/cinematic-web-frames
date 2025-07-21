import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// Add your repo name in "base"
export default defineConfig({
  base: '/cinematic-web-frames/',
  plugins: [react()],
})