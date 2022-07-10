<script>
  import Header from "../../components/Header/Header.svelte";
  const Santhosh="Santhosh";
  const func = (AB)=>{Santhosh};

  console.log(func())
</script>

<svelte:head>
  <title>ABSanthosh</title>
</svelte:head>

<div class="HomeWrapper">
  <Header />
  <main class="HomeWrapper__main">
    <section class="HomeWrapper__hero"><p>Coming Soon!</p></section>
  </main>
</div>

<style lang="scss" src="./Home.scss"></style>
