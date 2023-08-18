<script lang="ts">
  import { nekoStore } from "$lib/NekoStore";
  import { NekoSizeVariations } from "$utils/Neko";
  import type { NekoStorage } from "$utils/Neko";

  const RandomSize = () => {
    const sizes = [
      NekoSizeVariations.SMALL,
      NekoSizeVariations.MEDIUM,
      NekoSizeVariations.LARGE,
    ];

    return sizes[Math.floor(Math.random() * sizes.length)];
  };

  const addNeko = () => {
    const nextId = $nekoStore.length + 1;
    nekoStore.set([
      ...$nekoStore,
      {
        id: nextId,
        isShown: false,
        size: RandomSize(),
      },
    ] as NekoStorage);
  };
</script>

<footer class="FooterWrapper" data-scroll-section>
  <div class="FooterWrapper__container">
    <div class="FooterWrapper__container--left">
      Made with <span class="FooterWrapper__container--heart">&hearts;</span>
      and
      <a href="https://svelte.dev" target="_blank">
        <img src="/assets/Images/Languages/svelte.png" alt="Svelte" />
      </a>
      by
      <a
        href="https://www.linkedin.com/in/a-b-santhosh-97872612b/"
        target="_blank">Santhosh</a
      >
    </div>
    <div class="FooterWrapper__container--right">
      <button
        class="FancyButton"
        on:click={() => {
          // call .destroy() on last neko
          const lastNeko = $nekoStore[$nekoStore.length - 1];
          if (lastNeko) {
            lastNeko.neko.destroy(lastNeko.id);
          }
          // remove last neko from store
          nekoStore.set($nekoStore.slice(0, $nekoStore.length - 1));
        }}
        disabled={$nekoStore.length <= 0}
      >
        -
      </button>
      <span>NEKO</span>
      <button
        class="FancyButton"
        on:click={addNeko}
        disabled={$nekoStore.length >= 5}
      >
        +
      </button>
    </div>
  </div>
</footer>

<style lang="scss" src="./Footer.scss"></style>
