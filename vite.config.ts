/// <reference types="vitest" />
import react from "@vitejs/plugin-react-swc";
import dts from "vite-plugin-dts";
import { resolve, extname, relative } from "path";
import { fileURLToPath } from "url";
import { glob } from "glob";
import { libInjectCss } from "vite-plugin-lib-inject-css";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  assetsInclude: ["/sb-preview/runtime.js"],
  build: {
    copyPublicDir: false,
    lib: {
      entry: resolve(__dirname, "lib/index.ts"),
      formats: ["es"],
    },
    sourcemap: true,
    emptyOutDir: true,
    rollupOptions: {
      external: ["react", "react-dom"],
      input: Object.fromEntries(
        glob
          .sync("src/lib/**/*.{ts,tsx}", {
            ignore: ["node_modules"],
          })
          .map((file) => [
            relative(
              "src/lib",
              file.slice(0, file.length - extname(file).length)
            ),

            fileURLToPath(new URL(file, import.meta.url)),
          ])
      ),
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
        assetFileNames: "[name]/[name][extname]",
        entryFileNames: "[name].js",
      },
    },
  },

  plugins: [
    react(),
    dts({
      rollupTypes: true,
      include: ["src/lib"],
    }),
    libInjectCss(),
  ],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./tests/setup.ts",
  },
});
