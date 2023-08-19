<script lang="ts">
  import Footer from "$components/Footer/Footer.svelte";
  import Header from "$components/Header/Header.svelte";

  import "@/styles/root/markdown.scss";

  export let data;
</script>

<div class="ArticleWrapper">
  <Header />
  <main class="Article">
    <h1>
      {data.meta.title}
    </h1>
    <article class="MarkdownBody">
      {@html data.html}
    </article>
  </main>
  <Footer />
</div>

<style lang="scss" src="../../../styles/routes/article.scss" global></style>