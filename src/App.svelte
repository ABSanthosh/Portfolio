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

    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (event) => {
        const theme = event.matches ? "dark-mode" : "light-mode";
        localStorage.setItem("theme", theme);
        document.body.classList = [];
        document.body.classList.add(theme);
      });
  </script>
</svelte:head>

<Router {url}>
  <Route path="/"><Home /></Route>
  <Route path="/project/:projectName" let:params><Project {params} /></Route>
</Router>

<style>
  :global(body) {
    --lightGray: #f3f4f6;
    --lightPurple: #adacff;
    --headerBackground: #fdfdfd3a;
    --headerBrackets: #2532f5;
    --headerBlur: blur(20px);
    --headerParams: #e1944d;
    --headerArrow: #9fd2c3;
    --highlightColor: #e7e5e4;
    --borderColor: #d1d5db;
    --headingColor: #2d3045;
    --backgroundColor: #fdfdfd;
    --baseTextColor: #111111;
    --scrollbarThumb: #d3d1cb;
    --scrollbarTrack: #edece9;
    --textSelectionColor: #2daadb4d;
    --footerBackground: #f3f4f6;
    --downArrow: url("data:image/svg+xml;utf8,<svg fill='black' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>");
    color-scheme: light;
    --successColor: #1a7f37;
    --dangerColor: #cf222e;
    --headerShadow: 0 2px 4px rgb(0 0 0 / 2%), inset 0 -1px 0 rgb(0 0 0 / 6%);
  }
  :global(body.dark-mode) {
    --lightGray: #1d1f22;
    --lightPurple: #adacff;
    --headerBackground: #2d30456b;
    --headerBrackets: #ff0000;
    --headerBlur: blur(5px);
    --headerParams: #e1944d;
    --headerArrow: #0affa2;
    --highlightColor: #494949;
    --borderColor: #9a9a9a;
    --headingColor: #ffffff;
    --backgroundColor: #111111;
    --baseTextColor: #f3f4f6;
    --scrollbarThumb: #d3d1cb;
    --scrollbarTrack: #2d3045;
    --textSelectionColor: #2daadb4d;
    --footerBackground: #292929;
    --downArrow: url("data:image/svg+xml;utf8,<svg fill='white' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>");
    color-scheme: dark;
    --successColor: #3fb950;
    --dangerColor: #f85149;
    --headerShadow: inset 0 -1px 0 hsl(0deg 0% 100% / 10%);
  }
</style>
