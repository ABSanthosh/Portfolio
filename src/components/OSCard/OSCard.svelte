<script>
  export let { src, title, desc, additions, deletions, href } = $$props;
</script>

<div class="OSCard">
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

<style lang="scss" src="./OSCard.scss"></style>
