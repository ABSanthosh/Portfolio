<script>
  let isToolTipVisible = false;

  const tooltipTimeout = setTimeout(() => {
    isToolTipVisible = false;
  }, 800);

  export let { text } = $$props;
</script>

<p
  class="ToolTipWrapper"
  on:mouseleave={() => tooltipTimeout}
  on:mouseover={() => (isToolTipVisible = true)}
  on:focus={() => (isToolTipVisible = true)}
  on:blur={() => tooltipTimeout}
>
  {text}

  {#if isToolTipVisible}
    <span
      class="ToolTipWrapper__tooltip"
      on:mouseleave={() => clearTimeout(tooltipTimeout)}
      on:blur={() => clearTimeout(tooltipTimeout)}
      on:mouseover={() => (isToolTipVisible = false)}
      on:focus={() => (isToolTipVisible = false)}
    >
      <h2 class="ToolTipWrapper__tooltip--title">GameNation {isToolTipVisible}</h2>
    </span>
  {/if}
</p>

<style lang="scss" src="./ToolTip.scss"></style>
