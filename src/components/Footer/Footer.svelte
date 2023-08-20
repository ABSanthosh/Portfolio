<script lang="ts">
  import { nekoStore } from "$lib/NekoStore";
  import { NekoSizeVariations } from "$utils/Neko";
  import { base } from "$app/paths";

  const nextSize = (size: NekoSizeVariations) => {
    switch (size) {
      case NekoSizeVariations.SMALL:
        return NekoSizeVariations.MEDIUM;
      case NekoSizeVariations.MEDIUM:
        return NekoSizeVariations.LARGE;
      case NekoSizeVariations.LARGE:
        return NekoSizeVariations.SMALL;
    }
  };

  const prevSize = (size: NekoSizeVariations) => {
    switch (size) {
      case NekoSizeVariations.SMALL:
        return NekoSizeVariations.LARGE;
      case NekoSizeVariations.MEDIUM:
        return NekoSizeVariations.SMALL;
      case NekoSizeVariations.LARGE:
        return NekoSizeVariations.MEDIUM;
    }
  };
</script>

<footer class="FooterWrapper" data-scroll-section>
  <div class="FooterWrapper__container">
    <div class="FooterWrapper__container--left">
      Made with <span class="FooterWrapper__container--heart">&hearts;</span>
      and
      <a href="https://svelte.dev" target="_blank">
        <img src={`${base}/assets/Images/Languages/svelte.png`} alt="Svelte" />
      </a>
      by
      <a
        href="https://www.linkedin.com/in/a-b-santhosh-97872612b/"
        target="_blank"
      >
        Santhosh
      </a>
    </div>
    <div class="FooterWrapper__container--right">
      <button
        class="FancyButton"
        on:click={() => {
          nekoStore.update((neko) => {
            neko.size = prevSize(neko.size);
            return neko;
          });
        }}
        title="Decrease Neko Size"
        disabled={$nekoStore.size === NekoSizeVariations.SMALL}
      >
        -
      </button>
      <span class="FooterWrapper__NekoBox">
        <input
          type="checkbox"
          id="nekoCheck"
          checked={$nekoStore.isShown}
          on:change={() => {
            nekoStore.update((neko) => {
              neko.isShown = !neko.isShown;
              return neko;
            });
          }}
          title="Toggle Neko"
        />
        <label
          for="nekoCheck"
          class={`FooterWrapper__Neko${$nekoStore.isShown ? "" : "--strike"}`}
        >
          NEKO
        </label>
        <a
          href="https://eliotakira.com/neko/"
          target="_blank"
          referrerpolicy="no-referrer"
          title="What is Neko about?"
        >
          ?
        </a>
      </span>
      <button
        class="FancyButton"
        on:click={() => {
          nekoStore.update((neko) => {
            neko.size = nextSize(neko.size);
            return neko;
          });
        }}
        title="Increase Neko Size"
        disabled={$nekoStore.size === NekoSizeVariations.LARGE}
      >
        +
      </button>
    </div>
  </div>
</footer>

<style lang="scss" src="./Footer.scss"></style>
