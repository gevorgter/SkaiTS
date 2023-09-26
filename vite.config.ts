import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path';

export default defineConfig({
    base: "",
    logLevel: 'info',
    server: {
        port: 8085,
        strictPort: true,
    },
    build: {
        outDir: "/admin",
    },
    plugins: [vue()],
    resolve: {
        extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
    optimizeDeps: {
        exclude: ['@braks/vue-flow'],
    },
})
