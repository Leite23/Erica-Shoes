import tailwindcss from "tailwindcss";
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  base: "/ericashoes/",
  plugins: [],
  resolve: {
    /*something*/
  },
  css: {
    postcss: {
      plugins: [tailwindcss],
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "./src/index.html"),
        checkout: resolve(__dirname, "./src/checkout.html"),
        pedidos: resolve(__dirname, "./src/pedidos.html"),
      },
    },
  },
});
