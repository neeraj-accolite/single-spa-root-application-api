/// <reference types="vitest" />
/// <reference types="vite/client" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { viteStaticCopy } from "vite-plugin-static-copy";

export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: `./import-maps/local.import-map.json`,
          dest: "",
          rename: "import-map.json",
          transform: (content) => {
            const importMapJson = JSON.stringify(
              JSON.parse(content.toString()),
              null,
              2
            );
            return importMapJson;
          },
        },
      ],
    }),
    viteStaticCopy({
      targets: [
        {
          src: `./index.html`,
          dest: "",
        },
      ],
    }),
  ],
  server: {
    port: 9000,
    watch: {
      usePolling: true
    }
  },
  build: {
    target: "es2022",
    rollupOptions: {
      input: ["./src/acc-root-config.ts"],
      preserveEntrySignatures: "strict",
      output: {
        format: "esm",
        exports: "auto",
        entryFileNames: "[name].js",
      },
    },
  },
});