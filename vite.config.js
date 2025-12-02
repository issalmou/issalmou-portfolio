import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/chatbot': {
        target: 'https://chatbot-portfolio-yk56.onrender.com',
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
