import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
    plugins: [react()],
    build: {
        outDir: 'dist',
        cssCodeSplit: true,
        polyfillModulePreload: false,
        rollupOptions: {
            maxParallelFileOps: 2,
            output: {
                manualChunks: (id) => {
                    if (id.includes('node_modules')) {
                        return 'vendor';
                    }
                },
                sourceMap: true,
            },
            cache: false,
        },
    },
    server: {
        fs: {
            deny: [
                '.env',
                '.env.*',
                '*.env',
                '/node_modules/',
                'package.json',
                'app-config.json',
                '.prettierrc.json',
                'yarn.lock',
                '*.config.js',
            ],
        },
        host: '0.0.0.0',
        port: 8000,
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
    },
});
