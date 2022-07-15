<script>
  export let { href, text, newTab, type = "link", action = () => {} } = $$props;
</script>

{#if type === "button"}
  <button class="FancyButton FancyButton--button">
    <slot />
  </button>
{:else if type === "link"}
  <a
    class="FancyButton FancyButton--link"
    {href}
    target={newTab ? "_blank" : ""}
  >
    <slot />
  </a>
{/if}

<style lang="scss" src="./FancyButton.scss"></style>
