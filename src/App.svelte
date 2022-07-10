<script>
  import { Router, Route } from "svelte-routing";

  // Pages
  import Home from "./routes/Home/Home.svelte";

  export let url = "";
</script>

<svelte:head>
  <style lang="scss" src="./styles/global.scss"></style>
  <style lang="scss" src="./styles/fonts.scss"></style>
</svelte:head>

<Router {url}>
  <Route path="/"><Home /></Route>
</Router>
