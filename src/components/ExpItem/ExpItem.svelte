<script>
  let { position, slug, shortDesc, desc, tStart, tEnd } = $$props;
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
      {tEnd === "Present" ? tStart.split(" ")[1] : tEnd.split(" ")[1]}
    </span>
  </summary>
  <main class="ExpItemDetails__content">
    <p>
      {desc}
    </p>
    <div class="ExpItemDetails__content--links">
      <a
        class="FancyLink"
        href={`/experience/${slug}`}
        data-type="ButtonLink"
      >
        Read more
      </a>
    </div>
  </main>
</details>

<style lang="scss" src="./ExpItem.scss"></style>
