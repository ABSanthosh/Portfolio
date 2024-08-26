<script lang="ts">
  import "@/styles/root/markdown.scss";
  import type { PageData } from "./$types";

  export let data: PageData;
</script>

<svelte:head>
  <link rel="stylesheet" href="/theme/prism.css" />
</svelte:head>

<main class="Article Page">
  <article class="MarkdownBody">
    {@html data.html}
  </article>
</main>

<style lang="scss" src="../../../styles/routes/article.scss" global></style>
