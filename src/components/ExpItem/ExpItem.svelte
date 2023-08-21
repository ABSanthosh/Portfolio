<script>
  import { base } from "$app/paths";
  let { position, slug, shortDesc, desc, tStart, tEnd } = $$props;
  
  const start = new Date(tEnd === "Present" ? tStart : tEnd).getFullYear();
</script>

<details
  class="ExpItemDetails"
  
>
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
    {desc}
  </main>
</details>

<style lang="scss" src="./ExpItem.scss"></style>
