<script lang="ts">
  // import "@/styles/routes/home.scss";
  import Header from "$components/Header/Header.svelte";
  import Footer from "$components/Footer/Footer.svelte";
</script>

<div class="HomeWrapper">
  <Header />
  <main class="Home">
    <section class="Home__Section">
      <h1 class="Home__Title">Home</h1>
    </section>
  </main>
  <Footer />
</div>

<style lang="scss" src="../styles/routes/home.scss" global></style>