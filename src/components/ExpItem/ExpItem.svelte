<script>
  import { base } from "$app/paths";
  let { position, slug, desc, tStart, tEnd } = $$props;

  const start = new Date(tEnd === "Present" ? tStart : tEnd).getFullYear();
</script>

<a href={`${base}/experience/${slug}`} class="ExpItem">
  <h4>
    {position}
  </h4>
  <p>
    {desc}
  </p>
  <hr />
  <span>
    {start}
  </span>
</a>

<!-- <div class="ExpItemWrapper">
  <h3 class="ExpItemWrapper--position">
    {position}
  </h3>
  <h4 class="ExpItemWrapper--company">
    {company}
    <p class="ExpItemWrapper--range">{tStart} - {tEnd}</p>
  </h4>
  <p class="ExpItemWrapper--desc">{desc}</p>
</div> -->

<style lang="scss" src="./ExpItem.scss"></style>
