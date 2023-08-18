<script lang="ts">
  import { theme } from "$lib/ThemeStore";
  import { onMount } from "svelte";
  import { nekoStore } from "$lib/NekoStore";
  import { Neko, NekoSizeVariations } from "$utils/Neko";

  onMount(() => {
    theme.subscribe((value) => {
      if (document) {
        document.documentElement.setAttribute("data-theme", value);
      }
    });

    nekoStore.subscribe((value) => {
      if (value.length > 0) {
        value.forEach((singleNeko) => {
          if (!singleNeko.isShown) {
            const newNeko = new Neko(singleNeko.id, singleNeko.size);
            nekoStore.update((neko) => {
              return neko.map((singleNeko) => {
                if (singleNeko.id === singleNeko.id) {
                  return {
                    ...singleNeko,
                    isShown: true,
                    neko: newNeko,
                    size: singleNeko.size,
                  };
                }
                return singleNeko;
              });
            });
          }
        });
      }
    });

    nekoStore.set([
      {
        id: 1,
        isShown: false,
        size: NekoSizeVariations.SMALL,
        neko: null,
      },
    ]);
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
