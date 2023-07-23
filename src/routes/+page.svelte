<script lang="ts">
  // import "@/styles/routes/home.scss";
  import Header from "$components/Header/Header.svelte";
  import Footer from "$components/Footer/Footer.svelte";
</script>

<div class="HomeWrapper">
  <Header />
  <main class="Home">
    <section class="Home__section">
      <h1 class="HeroSection--title">Hey! I'm Santhosh</h1>
      <article class="HeroSection--desc">
        <p>
          I'm a software developer and a CS undergrad at Shiv Nadar University,
          Delhi, NCR. I make functional websites and native mobile android
          applications while specializing at converting design to code. In my
          last internship at GameNation, I created and maintained production
          level modules as a php intern.
        </p>
        <p>
          I also contribute to open source projects while also building and
          maintaining my own open source libraries. Currently, I'm working on
          <a
            href="https://www.npmjs.com/package/react-quizlet-flashcard"
            target="_blank"
          >
            react-quizlet-flashcard
          </a>
          component library.
        </p>
        <p>
          When I'm not writing code, I try to catch up with my favourite manga
          and anime series or play sandbox games like Minecraft.
        </p>
        <div class="HeroSection--actions">
          <a
            href="https://github.com/ABSanthosh"
            target="_blank"
            rel="noopener noreferrer"
            class="FancyLink"
            data-type="ButtonLink"
          >
            Github
          </a>
          <a
            href="https://www.linkedin.com/in/a-b-santhosh-97872612b/"
            target="_blank"
            rel="noopener noreferrer"
            class="FancyLink"
            data-type="ButtonLink"
          >
            LinkedIn
          </a>
          <a
            href="mailTo:a.b.santhosh02@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            class="FancyLink"
            data-type="ButtonLink"
          >
            Email
          </a>
          <a
            href="https://raw.githubusercontent.com/ABSanthosh/Portfolio/main/public/assets/Docs/AB%20Santhosh%20Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            class="FancyLink"
            data-type="ButtonLink"
          >
            Resume
          </a>
        </div>
      </article>
    </section>
  </main>
  <Footer />
</div>

<style lang="scss" src="../styles/routes/home.scss" global></style>
