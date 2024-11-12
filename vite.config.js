import { resolve } from "path";
import handlebars from "vite-plugin-handlebars";

/** @type {import('vite').UserConfig} */
export default {
  root: "src",
  base: "/",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        cv: resolve(__dirname, "src/cv.html"),
        imprint: resolve(__dirname, "src/imprint.html"),
      },
    },
  },
  plugins: [
    handlebars({
      partialDirectory: resolve(__dirname, "src/partials"),
    }),
  ],
};
