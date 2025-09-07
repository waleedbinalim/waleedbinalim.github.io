import { defineConfig } from "@solidjs/start/config";
import solidSvg from "vite-plugin-solid-svg";

export default defineConfig({
    ssr: true,
    server: {
        baseURL: "/",
        preset: "github-pages",
        prerender: {
            crawlLinks: true,
            autoSubfolderIndex: true,
        },
    },
    vite: {
        plugins: [solidSvg()]
    }
});