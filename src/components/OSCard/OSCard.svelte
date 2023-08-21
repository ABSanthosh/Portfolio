<script lang="ts">
  import { base } from "$app/paths";
  export let { src, title, desc, additions, deletions, href } = $$props;
</script>

<div class="OSCard">
  <img src={`${base}/${src}`} alt="OSCard__image" class="OSCard__image" />
  <div class="OSCard__details">
    <a
      {href}
      target="_blank"
      class="FancyLink OSCard__details--title"
      data-type="Bracket">{title}</a
    >
    <p class="OSCard__details--desc">{desc}</p>
  </div>
  <div class="OSCard__Stats">
    <p class="OSCard__Stats--additions">{additions}</p>
    <p class="OSCard__Stats--deletions">{deletions}</p>
  </div>
</div>

<style lang="scss" src="./OSCard.scss"></style>
