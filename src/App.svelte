<script>
  import { Router, Route } from "svelte-routing";

  // Pages
  import Home from "./routes/Home/Home.svelte";

  export let url = "";
</script>

<svelte:head>
  <style lang="scss" src="./styles/global.scss"></style>
  <style lang="scss" src="./styles/fonts.scss"></style>
  <style lang="scss" src="./styles/locomotive-scroll.scss"></style>
</svelte:head>

<Router {url}>
  <Route path="/"><Home /></Route>
</Router>

<style>
  :global(body) {
    --lightGray: #e7e5e4;
    --lightPurple: #adacff;
    --headerBackground: #fdfdfd3a;
    --headerBrackets: #2532f5;
    --headerParams: #e1944d;
    --headerArrow: #9fd2c3;
    --borderColor: #e6e6e6;
    --headingColor: #2d3045;
    --backgroundColor: #fdfdfd;
    --baseTextColor: #3a3a3a;
    --scrollbarThumb: #d3d1cb;
    --scrollbarTrack: #edece9;
    --textSelectionColor: #2daadb4d;

    color-scheme: light;
  }
  :global(body.dark-mode) {
    --lightGray: #5f5f5f;
    --lightPurple: #2d3045;
    --headerBackground: #2d3045;
    --headerBrackets: #2532f5;
    --headerParams: #e1944d;
    --headerArrow: #0affa2;
    --borderColor: #e6e6e6;
    --headingColor: #ffffff;
    --backgroundColor: #2d3045;
    --baseTextColor: #fdfdfd;
    --scrollbarThumb: #d3d1cb;
    --scrollbarTrack: #edece9;
    --textSelectionColor: #2daadb4d;
    color-scheme: dark;
  }
</style>
