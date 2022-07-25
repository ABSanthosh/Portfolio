<script>
  import LiveIcon from "../../assets/Images/live.png";

  let bgStyle = "";
  function handleMousemove(event) {
    console.log(event);
    bgStyle = `background: radial-gradient(circle at ${event.clientX}px ${event.clientY}px, rgb(79, 20, 204) 0%, rgba(79, 20, 204, 0) calc(0% + 150px)) no-repeat border-box border-box rgba(255, 255, 255, 0.1)`;
  }

  export let { title, desc, links } = $$props;
</script>

<!-- TODO: ADD hover gradient with js -->
<!-- style="background: radial-gradient(circle at 223px 86.9609px, rgb(79, 20, 204) 0%, rgba(79, 20, 204, 0) calc(0% + 150px)) no-repeat border-box border-box rgba(255, 255, 255, 0.1);" -->
<!-- on:mousemove={handleMousemove}
style={bgStyle}
on:mouseleave={() => (bgStyle = "")} -->
<div class="ProjectCard">
  <div class="ProjectCard__content">
    <h3 class="ProjectCard__content--title">{title}</h3>
    <p class="ProjectCard__content--desc">{desc}</p>
  </div>
  <div class="ProjectCard__links">
    <a
      href={links[0].href}
      target={links[0].newTab ? "_blank" : ""}
      class="ProjectCard__links--resource"
    >
      Live
      <img src={LiveIcon} alt="Live Icon" />
    </a>
    <a
      href={links[1].href}
      target={links[1].newTab ? "_blank" : ""}
      class="ProjectCard__links--resource">More</a
    >
  </div>
</div>

<style lang="scss" src="./ProjectCard.scss"></style>
