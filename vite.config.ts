/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: './src/__tests__/setup.ts',
        coverage: {
            provider: 'v8',
            reporter: ['lcov', 'text'],
            exclude: ['src/main.tsx', 'src/vite-env.d.ts'],
        },
    },
});
