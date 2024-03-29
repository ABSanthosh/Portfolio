import adapter from "@sveltejs/adapter-static";
import autoprefixer from "autoprefixer";
import preprocess from "svelte-preprocess";
import { mdsvex } from "mdsvex";

const dev = process.argv.includes("dev");

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://kit.svelte.dev/docs/integrations#preprocessors
  // for more information about preprocessors 
  extensions: [".svelte", ".md"],
  preprocess: [
    mdsvex({
      extension: ".md",
    }),
    preprocess({
      scss: {
        prependData: `
        @import "src/styles/root/_mixins.scss";
        @import "src/styles/root/_colors.scss";
        `,
      },
      postcss: {
        plugins: [autoprefixer()],
      },
    }),
  ],

  kit: {
    // adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
    // If your environment is not supported or you settled on a specific environment, switch out the adapter.
    // See https://kit.svelte.dev/docs/adapters for more information about adapters.
    adapter: adapter(),
    alias: {
      $components: "src/components",
      $styles: "src/styles/routes",
      $data: "src/data",
      $utils: "src/utils",
    }
  },
};

export default config;
