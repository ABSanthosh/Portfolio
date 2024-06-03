<script>
  import { expoInOut } from "svelte/easing";
  import { slide } from "svelte/transition";

  export let { name, image, href } = $$props;
</script>

<a
  {href}
  target="_blank"
  class="ToolCard"
  transition:slide={{ duration: 200, easing: expoInOut }}
>
  <img src={image} alt={name} loading="lazy" />
  <h3>{name}</h3>
</a>

<style lang="scss">
  .ToolCard {
    min-width: 160px;
    height: 70px;
    @include make-flex($dir: row);
    background-color: var(--backgroundColor);
    transition: flex 2s;
    border-radius: 4px;
    border: 1px solid var(--borderColor);
    gap: 15px;
    padding: 15px 18px 15px 15px;
    flex-grow: 1;

    h3 {
      font-weight: 400;
      font-size: 17px;
    }
    img {
      height: 100%;
    }

    @include respondAt(404px) {
      min-width: 160px;
    }
  }
</style>
