<script lang="ts">
  import "@/styles/root/markdown.scss";
  import { base } from "$app/paths";

  export let data;
</script>

<svelte:head>
  <link rel="stylesheet" href={`${base}/theme/prism.css`} />
</svelte:head>

<main class="Article Page">
  <!-- <h1>
    {data.meta.title}
  </h1> -->
  <article class="MarkdownBody">
    {@html data.html}
  </article>
</main>

<style lang="scss" src="../../../styles/routes/article.scss" global></style>
