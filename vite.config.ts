import { VitePWA } from "vite-plugin-pwa";
import { defineConfig } from "vite";
import preact from "@preact/preset-vite";
import tailwindcss from "@tailwindcss/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    preact(),
    VitePWA({
      registerType: "autoUpdate",
      injectRegister: false,

      pwaAssets: {
        disabled: false,
        config: true,
      },

      manifest: {
        name: "Secret Santa Go - Christmas Gift Exchange",
        short_name: "Secret Santa",
        description:
          "Easily organize your Secret Santa gift exchange. Generate random pairs securely, share unique codes and enjoy Christmas stress-free!",
        theme_color: "#dc2626",
        background_color: "#ffffff",
        display: "standalone",
        lang: "en",
        start_url: "/",
        scope: "/",
        categories: ["lifestyle", "social"],
        icons: [
          {
            src: "/favicon.svg",
            sizes: "any",
            type: "image/svg+xml",
            purpose: "any maskable",
          },
        ],
      },

      workbox: {
        globPatterns: ["**/*.{js,css,html,svg,png,ico}"],
        cleanupOutdatedCaches: true,
        clientsClaim: true,
      },

      devOptions: {
        enabled: false,
        navigateFallback: "index.html",
        suppressWarnings: true,
        type: "module",
      },
    }),
    tailwindcss(),
  ],
});
