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
  <!-- <h3>{name}</h3> -->
</a>

<style lang="scss">
  .ToolCard {
    @include box(85px, 85px);

    img {
      filter: drop-shadow(0px 2px 3px rgba(255, 255, 255, 0.25));
      @include box();
    }
  }
</style>
