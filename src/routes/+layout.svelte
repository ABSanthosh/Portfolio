<script lang="ts">
  import { theme } from "$lib/stores";
  import { onMount } from "svelte";

  onMount(() => {
    theme.subscribe((value) => {
      if (document) {
        document.documentElement.setAttribute("data-theme", value);
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

  <link rel="stylesheet" href={`/theme/light.css`} />
  <link rel="stylesheet" href={`/theme/dark.css`} />
  <link rel="stylesheet" href={`/theme/system.css`} />

  <title>ABSanthosh</title>
</svelte:head>

<slot />
