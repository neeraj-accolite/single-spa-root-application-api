import viteConfig from "./vite.config";
import { defineConfig, mergeConfig } from 'vitest/config';

export default mergeConfig(viteConfig, defineConfig({
    test: {
        globals: true,
        environment: 'jsdom',
        coverage: {
            provider: 'v8'
        }
    }
}))