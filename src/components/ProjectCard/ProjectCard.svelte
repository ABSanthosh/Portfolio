<script>
  import LiveIcon from "../../assets/Images/live.png";
  export let { title, desc, links } = $$props;
</script>

<!-- TODO: ADD hover gradient with js -->
<!-- style="background: radial-gradient(circle at 223px 86.9609px, rgb(79, 20, 204) 0%, rgba(79, 20, 204, 0) calc(0% + 150px)) no-repeat border-box border-box rgba(255, 255, 255, 0.1);" -->

<div class="ProjectCard">
  <div class="ProjectCard__content">
    <h3 class="ProjectCard__content--title">{title}</h3>
    <p class="ProjectCard__content--desc">{desc}</p>
  </div>
  <div class="ProjectCard__links">
    <a href="/#" class="ProjectCard__links--resource">
      Live
      <img src={LiveIcon} alt="Live Icon" />
    </a>
    <a href="/#" class="ProjectCard__links--resource">More</a>
  </div>
</div>

<style lang="scss" src="./ProjectCard.scss"></style>
