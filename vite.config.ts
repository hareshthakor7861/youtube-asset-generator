import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
// FIX: Import 'process' to provide correct type definitions for process.cwd().
import process from 'process'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), '');
  return {
    plugins: [react()],
    define: {
      'process.env.API_KEY': JSON.stringify(env.API_KEY)
    }
  }
})
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import process from 'process'
export default defineConfig(({ mode }) => {
  export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd(), '');
    import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import process from 'process'
    export default defineConfig(({ mode }) => {
      const env = loadEnv(mode, process.cwd(), '');
      define: {
  'process.env.API_KEY': JSON.stringify(env.API_KEY)
      }
      plugins: [react()],
