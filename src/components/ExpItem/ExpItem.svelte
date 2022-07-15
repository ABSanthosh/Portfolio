<script>
  let { position, company, desc, tStart, tEnd } = $$props;
</script>

<div class="ExpItemWrapper">
  <h3 class="ExpItemWrapper--position">
    {position}
    <p class="ExpItemWrapper--range">{tStart} - {tEnd}</p>
  </h3>
  <h4 class="ExpItemWrapper--company">{company}</h4>
  <p class="ExpItemWrapper--desc">{desc}</p>
</div>

<style lang="scss" src="./ExpItem.scss"></style>
