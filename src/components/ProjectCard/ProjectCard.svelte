<script>
  export let { title, desc, links } = $$props;
</script>

<div class="ProjectCardWrapper">
  <div class="ProjectCard">
    <div class="ProjectCard__content">
      <h3 class="ProjectCard__content--title">{title}</h3>
      <p class="ProjectCard__content--desc">{desc}</p>
    </div>

    <div class="ProjectCard__links">
      <a
        href={""}
        target="_blank"
        rel="noopener noreferrer"
        class="ProjectCard__links--resource"
      >
        Live
        <img src="/assets/Images/live.png" alt="Live Icon" />
      </a>
      <a
        href={""}
        target="_blank"
        rel="noopener noreferrer"
        class="ProjectCard__links--resource">Code</a
      >
      <a
        href={""}
        target="_blank"
        rel="noopener noreferrer"
        class="ProjectCard__links--resource">More</a
      >
    </div>
  </div>
</div>

<style lang="scss" src="./ProjectCard.scss"></style>
