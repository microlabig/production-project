import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

const PORT = 3000;
const isDev = true;
const apiUrl = 'http://localhost:8000';
const project = 'frontend';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        svgr({
            include: '**/*.svg',
        }),
        react(),
    ],
    resolve: {
        alias: [{ find: '@', replacement: '/src' }],
    },
    define: {
        __IS_DEV__: JSON.stringify(isDev),
        __API__: JSON.stringify(apiUrl),
        __PROJECT__: JSON.stringify(project),
    },
    server: {
        port: PORT,
    },
});
