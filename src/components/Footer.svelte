<script lang="ts">
  import { Logos } from "$data/Logos";
  import { nekoStore } from "$lib/NekoStore";
  import { NekoSizeVariations } from "$utils/Neko";

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
        <img src={Logos.language.svelte.image} alt="Svelte" />
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

<style lang="scss">
  $extraPadding: 20px;

  .FooterWrapper {
    background-color: var(--footerBackground);
    padding: 20px 0;
    text-align: center;
    @include make-flex();
    @include box(100vw, 69px);
    margin-top: 70px;

    @include respondAt(500px) {
      height: auto;
    }

    &__container {
      @include make-flex($dir: row, $just: space-between);
      @include box();
      max-width: calc(835px + 2 *#{$extraPadding});
      padding: 0 $extraPadding;

      @include respondAt(500px) {
        gap: 20px;
        flex-direction: column;
      }

      &--left {
        display: inline-flex;
        gap: 4px;
        align-items: center;
        img {
          height: 15px;
        }
      }

      &--right {
        @include make-flex($dir: row);
        gap: 10px;
        button {
          @include box(25px, 25px);
        }
      }
    }

    &__NekoBox {
      @include make-flex($dir: row);
      gap: 10px;
      & > a {
        @include box(20px, 20px);
        padding: 10px;
        @include make-flex();
        background-color: var(--backgroundColor);
        border-radius: 50%;
        font-size: 10px;
        border: 1px solid var(--borderColor);
        text-decoration: none;
      }
    }

    &__Neko {
      cursor: pointer;
      user-select: none;
      &--strike {
        user-select: none;
        cursor: pointer;
        text-decoration: line-through;
      }
    }
  }
</style>
