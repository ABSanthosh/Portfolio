<script lang="ts">
  import { Publications } from "$data/Publications";

  export let { authors, conference, date, src, title } =
    $$props as (typeof Publications)[0];
</script>

<div class="PublicationCard">
  <a href={src}>
    <h3>{title}</h3>
  </a>
  <p class="PublicationCard__conference">
    {conference}
  </p>
  <span class="PublicationCard__author">
    {#each authors as item, i}
      <a href={item.linkedin} target="_blank" referrerpolicy="no-referrer">
        {item.name}
      </a>
      {#if i !== authors.length - 1}
        • {" "}
      {/if}
    {/each}
  </span>
</div>

<style lang="scss">
  .PublicationCard {
    min-height: 80px;
    @include box(100%, auto);
    gap: 5px;
    @include make-flex($align: flex-start);
    background-color: var(--backgroundColor);
    border-radius: 11px;
    border: 1px solid var(--borderColor);
    padding: 11px;

    @include respondAt(630px) {
      flex-wrap: wrap;
      height: auto;
      row-gap: 10px;
    }
    & > a {
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
      & > h3 {
        font-size: 19px;
      }
    }

    &__conference {
      font-size: 18px;
    }

    &__author {
      & > a {
        color: var(--subText);
        font-style: italic;
        text-decoration: none;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
</style>
