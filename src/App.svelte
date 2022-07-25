<script>
  import { Router, Route } from "svelte-routing";
  import Home from "./routes/Home/Home.svelte";
  import Project from "./routes/Project/Project.svelte";
  export let url = "";
</script>

<svelte:head>
  <style lang="scss" src="./styles/global.scss"></style>
  <style lang="scss" src="./styles/fonts.scss"></style>

  <script>
    const theme = localStorage.getItem("theme");
    if (theme) {
      document.body.classList.add(theme);
    } else {
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        document.body.classList.add("dark-mode");
        localStorage.setItem("theme", "dark-mode");
      }
    }
  </script>
</svelte:head>

<Router {url}>
  <Route path="/"><Home /></Route>
  <Route path="/project/:projectName" let:params><Project params={params} /></Route>
</Router>

<style>
  :global(body) {
    --lightGray: #e7e5e4;
    --lightPurple: #adacff;
    --headerBackground: #fdfdfd3a;
    --headerBrackets: #2532f5;
    --headerBlur: blur(20px);
    --headerParams: #e1944d;
    --headerArrow: #9fd2c3;
    --borderColor: #d3d3d3;
    --headingColor: #2d3045;
    --backgroundColor: #fdfdfd;
    --baseTextColor: #3a3a3a;
    --scrollbarThumb: #d3d1cb;
    --scrollbarTrack: #edece9;
    --textSelectionColor: #2daadb4d;
    --footerBackground: #f5f5f5;
    --downArrow: url("data:image/svg+xml;utf8,<svg fill='black' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>");
    color-scheme: light;
    --successColor: #1a7f37;
    --dangerColor: #cf222e;
  }
  :global(body.dark-mode) {
    --lightGray: #5f5f5f;
    --lightPurple: #adacff;
    --headerBackground: #2d30456b;
    --headerBrackets: #ff0000;
    --headerBlur: blur(5px);
    --headerParams: #e1944d;
    --headerArrow: #0affa2;
    --borderColor: #e6e6e6;
    --headingColor: #ffffff;
    --backgroundColor: #2d3045;
    --baseTextColor: #fdfdfd;
    --scrollbarThumb: #d3d1cb;
    --scrollbarTrack: #2d3045;
    --textSelectionColor: #2daadb4d;
    --footerBackground: #353b66;
    --downArrow: url("data:image/svg+xml;utf8,<svg fill='white' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>");
    color-scheme: dark;
    --successColor: #3fb950;
    --dangerColor: #f85149;
  }
</style>
