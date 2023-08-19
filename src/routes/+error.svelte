<script lang="ts">
  import { redirect } from "@sveltejs/kit";
  import { base } from "$app/paths";

  throw redirect(302, `${base}/`);
</script>
