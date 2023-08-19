<script>
  export let { title, desc, links } = $$props;

  import { base } from "$app/paths";
</script>

<div class="ProjectCardWrapper">
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
      >
        Live
        <!-- <img src="assets/Images/live.png" alt="Live Icon" /> -->
        <img src={`${base}/assets/Images/live.png`} alt="Live Icon" />
      </a>
      <a
        href={links.github}
        target="_blank"
        rel="noopener noreferrer"
        class="ProjectCard__links--resource"
      >
        Code
      </a>
      <a
        href={`${base}/project/${links.slug}`}
        class="ProjectCard__links--resource"
      >
        More
      </a>
    </div>
  </div>
</div>

<style lang="scss" src="./ProjectCard.scss"></style>
