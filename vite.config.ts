import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';
import Unocss from 'unocss/vite';

const PATH_SRC = path.resolve(__dirname, './src');

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 4000,
  },
  resolve: {
    alias: {
      '~/': `${PATH_SRC}/`,
    },
  },
  plugins: [react(), Unocss()],
});
