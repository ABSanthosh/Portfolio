<script lang="ts">
  import { theme } from "$lib/ThemeStore";

  // TODO: Get resume link from global store
</script>

<header class="HeaderWrapper">
  <div class="Header">
    <div class="Header__left">
      <a href="/" class="Header__title" id="headerName">
        <span class="Header__title--brackets">(</span>
        <span class="Header__title--params">AB</span>
        <span class="Header__title--brackets">)</span>
        <span class="Header__title--arrow"> =></span>
        <span class="Header__title--name">Santhosh</span>
      </a>
    </div>
    <div class="Header__right">
      <a
        href="https://raw.githubusercontent.com/ABSanthosh/Portfolio/main/public/assets/Docs/AB%20Santhosh%20Resume.pdf"
        target="_blank">Resume</a
      >
      <button
        class="FancyButton"
        on:click={() => {
          theme.set($theme === "dark" ? "light" : "dark");
        }}
      >
        <svg viewBox="0 0 20 20" width="16px" height="16px" fill="currentColor">
          {#if $theme === "dark"}
            <path
              d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
            />
          {:else}
            <path
              fill-rule="evenodd"
              d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
              clip-rule="evenodd"
            />
          {/if}
        </svg>
        {$theme}
      </button>
    </div>
  </div>
</header>

<style lang="scss" src="./Header.scss"></style>
