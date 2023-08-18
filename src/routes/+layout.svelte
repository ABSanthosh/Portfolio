<script lang="ts">
  import { theme } from "$lib/ThemeStore";
  import { onMount } from "svelte";
  import { nekoStore } from "$lib/NekoStore";
  import { Neko, NekoSizeVariations } from "$utils/Neko";

  onMount(() => {
    let neko: Neko | null = new Neko(NekoSizeVariations.SMALL);

    theme.subscribe((value) => {
      if (document) {
        document.documentElement.setAttribute("data-theme", value);
      }
    });

    nekoStore.subscribe((value) => {
      if (value.isShown && neko === null) {
        neko = new Neko(value.size);
      } else if (!value.isShown && neko !== null) {
        neko.destroy();
        neko = null;
      }

      if (neko?.size !== value.size) {
        neko?.setSize(value.size);
      }
    });
  });
</script>

<svelte:head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="keywords" content="ABSanthosh" />
  <meta name="author" content="ABSanthosh" />

  <meta name="color-scheme" content={$theme} />

  <link rel="stylesheet" href="/theme/light.css" />
  <link rel="stylesheet" href="/theme/dark.css" />

  <title>ABSanthosh</title>
</svelte:head>

<slot />

<style lang="scss" global>
  @import "../styles/root/global.scss";
</style>
