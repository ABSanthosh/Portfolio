<script lang="ts">
  import Projects from "$data/Projects";
  import ProjectCard from "$components/ProjectCard.svelte";
</script>

<section class="ProjectSection Page">
  <h2>Projects</h2>
  <ul class="ProjectSection__cards">
    {#each Projects as project (project)}
      <ProjectCard
        desc={project.desc}
        links={project.links}
        title={project.title}
      />
    {/each}
  </ul>
</section>

<style lang="scss">
  .ProjectSection {
    gap: 20px;
    @include box(100%, auto);

    & > h2 {
      color: var(--headingColor);
      @include box($height: auto);
      @include make-flex($align: flex-start);
      background-color: var(--backgroundColor);
    }

    &__cards {
      gap: 18px;
      display: grid;
      grid-auto-rows: 220px;
      @include box($height: unset);
      grid-template-columns: 1fr 1fr;

      @include respondAt(545px) {
        grid-template-columns: 1fr;
      }
    }
  }
</style>
