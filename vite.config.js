import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/contact.php': '/assets/forms/contact.php' // Redirige vers ton serveur PHP
    }
  }
});
