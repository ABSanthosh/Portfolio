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
    max-width: 260px;
    // height: 70px;
    @include make-flex($dir: row, $just: flex-start);
    background-color: var(--backgroundColor);
    transition: flex 2s;
    border-radius: 12px;
    border: 1px solid var(--borderColor);
    gap: 15px;
    padding: 7px 7px 6px 7px;
    flex-grow: 1;

    h3 {
      font-weight: 400;
      font-size: 17px;
      margin-left: auto;
      margin-right: auto;
    }
    img {
      // height: 100%;
      // @include box(40px, 40px);
      // margin-right: auto;
      aspect-ratio: 1 / 1;
      filter: drop-shadow(0px 2px 3px rgba(255, 255, 255, 0.25));
      @include box(55px, 55px);
    }

    @include respondAt(404px) {
      min-width: 160px;
    }
  }
  // .ToolCard {

  //   img {
  //   }
  // }
</style>
