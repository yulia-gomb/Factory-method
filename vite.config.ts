import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
    server: {
        host: true,
        port: 5173,
    },
    build: {
        outDir: 'dist',
        emptyOutDir: true,
    },
    assetsInclude: ['**/*.txt'],
    optimizeDeps: {
        exclude: ['path'],
    },
});