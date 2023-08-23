<script lang="ts">
  import { VerseReviews } from "$data/VerseReviews";
  import VerseReview from "./VerseReview.svelte";
</script>

{#each Object.entries(VerseReviews) as [year, yearData]}
  <details class="FancyDetail Testimonial">
    <summary data-just="space-between" data-bg>{year}</summary>
    <main class="Testimonial__content">
      {#each Object.entries(yearData) as [month, monthReviews]}
        {#if monthReviews.filter((content) => content.review).length !== 0}
          <details class="FancyDetail">
            <summary data-just="space-between" data-bg>{month}</summary>
            <main class="Testimonial__content">
              {#each yearData[month] as content}
                {#if content.review}
                  <VerseReview
                    date={content.date}
                    review={content.review}
                    lang={content.lang}
                    rating={content.rating}
                  />
                {/if}
              {/each}
            </main>
          </details>
        {/if}
      {/each}
    </main>
  </details>
{/each}
