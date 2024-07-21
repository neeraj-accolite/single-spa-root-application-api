/// <reference types="vitest" />
/// <reference types="vite/client" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { viteStaticCopy } from "vite-plugin-static-copy";
import externalize from 'vite-plugin-externalize-dependencies';
import reactRefresh from '@vitejs/plugin-react-refresh'

// const externalDependencies = ["react", "react/jsx-dev-runtime", "react/jsx-runtime", "react-dom", "react-dom/client", "@example/root-config"]

// https://vitejs.dev/config/
export default defineConfig(async ({ mode }) => {
  return {
    // resolve: {
    //   alias: {
    //     // 'react/jsx-runtime': 'react/jsx-runtime.js',
    //   }
    // },
    // optimizeDeps: {
    //   include: ['react/jsx-runtime']
    // },
    plugins: [
      react(),
      // reactRefresh(),
      // externalize({ externals: externalDependencies }),
      // use correct import-map based on which mode we are using (dev, prod)
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
    test: {
      globals: true,
      environment: "jsdom",
    },
    build: {
      target: "es2022",
      rollupOptions: {
        input: ["./src/acc-root-config.ts"],
        preserveEntrySignatures: "strict",
        // external: externalDependencies,
        output: {
          format: "esm",
          exports: "auto",
          entryFileNames: "[name].js",
        },
      },
    },
  };
});