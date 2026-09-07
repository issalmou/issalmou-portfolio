import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

// Proxy dev vers /chatbot retiré : chatApi.js appelle l'URL absolue du
// backend directement (VITE_CHATBOT_API_URL).
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/setupTests.js'],
    globals: true,
  },
});
