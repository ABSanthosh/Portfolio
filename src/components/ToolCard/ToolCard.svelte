<script>
  import { slide } from "svelte/transition";
  import { expoInOut } from "svelte/easing";
  export let { name, image, href } = $$props;
</script>

<a
  {href}
  class="ToolCard"
  transition:slide={{ duration: 200, easing: expoInOut }}
>
  <img src={image} alt={name} />
  <h3>{name}</h3>
</a>

<style lang="scss" src="./ToolCard.scss"></style>
