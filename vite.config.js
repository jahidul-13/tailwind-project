import { build } from "vite";
import { resolve } form "path";
import { defineConfig } form "vite";

export default  defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, "index.html"),
                news: resolve(__dirname, "news.html"),
            },
        },
    },
});