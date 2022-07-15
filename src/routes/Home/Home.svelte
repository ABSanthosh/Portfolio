<script>
  import Header from "../../components/Header/Header.svelte";
  import FancyButton from "../../components/FancyButton/FancyButton.svelte";
</script>

<svelte:head>
  <title>ABSanthosh</title>
</svelte:head>

<div class="HomeWrapper">
  <Header />
  <main class="HomeWrapper__main">
    <section class="HomeWrapper__hero">
      <h1 class="HomeWrapper__hero--title">Hey! I'm Santhosh</h1>
      <article class="HomeWrapper__hero--desc">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae
          enim in massa honcus eu et ipsum. Maecenas eget dui auctor sapien
          feugiat convallis finibus quis ipsum. Nam vitae metus vitae nibh
          tincidunt pharetra sit amet at justo.
        </p>
        <p>
          Aliquam metus risus, tempor at ante a, molestie consequat eros. Fusce
          vitae sem porttitor, vestibulum nunc non, faucibus felis. Integer
          commodo ultricies enim quis vulputate.
        </p>
        <p>
          commodo ut vestibulum a, iaculis in lacus. Donec feugiat porttitor
        </p>
        <div class="HomeWrapper__hero--actions">
          <FancyButton type="link" href="https://github.com/ABSanthosh" newTab
            >Github</FancyButton
          >
          <FancyButton
            type="link"
            href="https://www.linkedin.com/in/a-b-santhosh-97872612b/"
            newTab>LinkedIn</FancyButton
          >
          <FancyButton type="link" href="mailTo:a.b.santhosh02@gmail.com" newTab
            >Email</FancyButton
          >
        </div>
      </article>
    </section>
  </main>
</div>

<style lang="scss" src="./Home.scss"></style>
