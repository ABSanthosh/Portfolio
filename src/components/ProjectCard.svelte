<script>
  import logo_live from "$images/live.png";
  export let { title, desc, links } = $$props;
</script>

<div class="ProjectCard">
  <div class="ProjectCard__content">
    <h3 class="ProjectCard__content--title">{title}</h3>
    <p class="ProjectCard__content--desc">{desc}</p>
  </div>

  <div class="ProjectCard__links">
    <a
      href={links.live}
      target="_blank"
      rel="noopener noreferrer"
      class="ProjectCard__links--resource"
      media="all"
    >
      Live
      <img src={logo_live} alt="Live Icon" />
    </a>
    <a
      href={links.github}
      target="_blank"
      rel="noopener noreferrer"
      class="ProjectCard__links--resource"
      media="all"
    >
      Code
    </a>
    <a
      href={`/project/${links.slug}`}
      class="ProjectCard__links--resource"
      media="all"
    >
      More
    </a>
  </div>
</div>

<style lang="scss">
  .ProjectCard {
    --border-radius: 11px;
    background-color: var(--backgroundColor);
    border-radius: var(--border-radius);
    max-width: 455px;

    display: grid;
    grid-template-rows: 1fr 38px;
    gap: 20px;

    border: 1px solid var(--borderColor);
    font-size: 16px;
    letter-spacing: 0.004em;
    line-height: 1.5;

    @include respondAt(545px) {
      max-width: unset;
    }

    inset: 1px;
    // position: absolute;
    z-index: 2;
    @include box(calc(100% - 2px), calc(100% - 2px));

    &__content {
      @include make-flex($align: flex-start, $just: flex-start);
      @include box();
      padding: 25px 30px 0;
      gap: 7px;

      &--title {
        color: var(--headingColor);

        @include respondAt(644px) {
          font-size: 2.5vw;
        }
        @include respondAt(545px) {
          font-size: unset;
        }
      }
      &--desc {
        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
    }

    &__links {
      display: grid;
      @include box($height: 38px);
      grid-template-columns: 1fr 1fr 1fr;

      &--resource {
        @include box();
        @include make-flex($dir: row);
        gap: 4px;
        text-decoration: none;
        cursor: pointer;
        img {
          height: 20px;
        }

        &:hover {
          color: var(--backgroundColor);
          background-color: var(--lightPurple);
        }
        &:first-child {
          border-top: 1px solid var(--borderColor);
          border-right: 1px solid var(--borderColor);
          border-bottom-left-radius: calc(var(--border-radius) - 2px);
        }

        &:not(:first-child):not(:last-child) {
          border-top: 1px solid var(--borderColor);
          border-right: 1px solid var(--borderColor);
        }

        &:last-child {
          border-bottom-right-radius: calc(var(--border-radius) - 2px);
          border-top: 1px solid var(--borderColor);
        }
      }
    }
  }
</style>
