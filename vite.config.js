import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        frozenMiniPizzaWholesale: resolve(__dirname, 'frozen-mini-pizza-wholesale/index.html')
      }
    }
  }
});
