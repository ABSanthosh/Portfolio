<script>
  export let { src, title, desc, additions, deletions, href } = $$props;
</script>

<div class="OSCard">
  <div class="OSCard--left">
    <img {src} />
    <div class="OSCard__details">
      <a {href} class="OSCard__details--title">{title}</a>
      <p class="OSCard__details--desc">{desc}</p>
    </div>
    <div class="OSCard__Stats">
      <p class="OSCard__Stats--additions">{additions}</p>
      <p class="OSCard__Stats--deletions">{deletions}</p>
    </div>
  </div>
  <button>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      ><path
        d="M6 17c2.269-9.881 11-11.667 11-11.667v-3.333l7 6.637-7 6.696v-3.333s-6.17-.171-11 5zm12 .145v2.855h-16v-12h6.598c.768-.787 1.561-1.449 2.339-2h-10.937v16h20v-6.769l-2 1.914z"
      />
    </svg>
  </button>
</div>

<style lang="scss" src="./OSCard.scss"></style>
