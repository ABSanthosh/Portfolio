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

<style lang="scss" src="./ToolCard.scss"></style>
