import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react'
// import * as dotenv from 'dotenv'

// dotenv.config()

// const port = process.env.PORT;

export default () => {
  return defineConfig({
    plugins: [
      react(),
    ],
    server: {
      port: 5500,
    //   https: true
    },
  });
}
