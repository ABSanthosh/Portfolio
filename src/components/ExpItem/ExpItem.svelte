<script>
  import { base } from "$app/paths";
  let { position, slug, shortDesc, desc, tStart, tEnd } = $$props;

  const start = new Date(tEnd === "Present" ? tStart : tEnd).getFullYear();
</script>

<details class="ExpItemDetails FancyDetail">
  <summary class="ExpItem">
    <h4>
      {position}
    </h4>
    <p>
      {shortDesc}
    </p>
    <hr />
    <span>
      {start}
    </span>
  </summary>
  <main class="ExpItemDetails__content">
    <p>
      {desc}
    </p>
    <div class="ExpItemDetails__content--links">
      <a
        class="FancyLink"
        href={`${base}/experience/${slug}`}
        data-type="ButtonLink"
      >
        Read more
      </a>
    </div>
  </main>
</details>

<style lang="scss" src="./ExpItem.scss"></style>
