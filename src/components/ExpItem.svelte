<script lang="ts">
  import { type IExperience } from "$data/Experiences";

  export let expItem = $$props as IExperience;
</script>

<details class="ExpItemDetails FancyDetail">
  <summary class="ExpItem">
    <h4>
      {expItem.position}
    </h4>
    <p>
      {expItem.shortDesc}
    </p>
    <hr />
    <span>
      {expItem.end.getFullYear()}
    </span>
  </summary>
  <main class="ExpItemDetails__content">
    <p>
      {expItem.desc}
    </p>
    <div class="ExpItemDetails__content--links">
      <a class="FancyLink" href={`/experience/${expItem.slug}`} data-type="ButtonLink">
        Read more
      </a>
    </div>
  </main>
</details>

<style lang="scss">
  .ExpItemDetails {
    &__content {
      padding: 12px;
      @include box();
      @include make-flex();
      gap: 20px;

      & > p {
        color: var(--subText);
        line-height: 30px;
      }

      &--links {
        @include box($height: auto);
        @include make-flex($dir: row, $just: flex-end);

        a {
          @include box(auto, 28px);
          font-size: 14px;
        }
      }
    }
  }

  .ExpItem {
    & > h4 {
      white-space: nowrap;
      text-align: left;
      overflow: hidden;
      text-overflow: ellipsis;
      user-select: none;
    }

    & > hr {
      border-bottom: 1px solid #dedede;
      border-top: none;
      border-left: none;
      border-right: none;
      flex-grow: 1;
      user-select: none;
    }

    & > span {
      user-select: none;
    }

    & > p {
      color: var(--detailsShortDesc);
      user-select: none;

      @include respondAt(715px) {
        display: none;
      }
    }

    &:hover {
      background-color: var(--detailsHover);
    }
  }
</style>
