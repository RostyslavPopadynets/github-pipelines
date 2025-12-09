import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
export default defineConfig({
    plugins: [react()],
    test: {
        environment: 'jsdom',
        // setup файл у корені:
        setupFiles: './setupTests.ts',
        css: true,
        // якщо тести у папці tests/:
        include: ['tests/**/*.test.{ts,tsx}'],
        // якщо хочеш також дозволити тести в src/, додай:
        // include: ['tests/**/*.test.{ts,tsx}', 'src/**/*.test.{ts,tsx}'],
    },
});
