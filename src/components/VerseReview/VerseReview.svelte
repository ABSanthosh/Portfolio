<script lang="ts">
  import Rating from "./Rating.svelte";

  export let { date, review, lang, rating } = $$props;

  const displayDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
</script>

<div class="VerseReview">
  <div class="VerseReview__top">
    <span>
      <Rating value={rating} /> ({lang})
    </span>
    <p class="VerseReview__top--date">{displayDate}</p>
  </div>
  {#if review}
    <p>{review}</p>
  {/if}
</div>
