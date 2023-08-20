<script lang="ts">
  import "@/styles/root/markdown.scss";

  export let data;
</script>

<main class="Article Page">
  <h1>
    {data.meta.title}
  </h1>
  <article class="MarkdownBody">
    {@html data.html}
  </article>
</main>

<style lang="scss" src="../../../styles/routes/article.scss" global></style>
