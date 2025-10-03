import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import path from "path";
import { imagetools } from "vite-imagetools";

export default defineConfig({
  plugins: [sveltekit(), imagetools()],
  assetsInclude: ["**/*.md"],
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
  },
});
