<script lang="ts">
  import "@/styles/root/markdown.scss";
  import { base } from "$app/paths";

  export let data;
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
