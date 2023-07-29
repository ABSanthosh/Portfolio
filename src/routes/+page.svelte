<script lang="ts">
  // import "@/styles/routes/home.scss";
  import Header from "$components/Header/Header.svelte";
  import Footer from "$components/Footer/Footer.svelte";

  import Experiences from "$data/Experiences";
  import Projects from "$data/Projects";
  import ExpItem from "$components/ExpItem/ExpItem.svelte";
  import ProjectCard from "$components/ProjectCard/ProjectCard.svelte";
  import { OpenSource } from "$data/OpenSource";
  import OsCard from "$components/OSCard/OSCard.svelte";
  import { Logos } from "$data/Logos";
  import ToolCard from "$components/ToolCard/ToolCard.svelte";
  import GithubMap from "$components/GithubMap/GithubMap.svelte";

  let toolsOption = "languages",
    value: "language" | "tool" | "framework" = "language";
</script>

<div class="HomeWrapper">
  <Header />
  <main class="Home">
    <section class="HeroSection">
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
    <section>
      <h2>Experiences</h2>
      {#each Experiences.splice(0, 3) as exp}
        <ExpItem
          position={exp.position}
          company={exp.company}
          desc={exp.desc}
          tStart={exp.start}
          tEnd={exp.end}
        />
      {/each}
    </section>
    <section class="ProjectSection">
      <h2>Projects</h2>
      <div
        class="ProjectSection__cards"
        on:mousemove={(e) => {
          document.querySelectorAll(".ProjectCardWrapper").forEach((card) => {
            const rect = card.getBoundingClientRect(),
              x = e.clientX - rect.left,
              y = e.clientY - rect.top;

            // @ts-ignore
            card.style.setProperty("--mouse-x", `${x}px`);
            // @ts-ignore
            card.style.setProperty("--mouse-y", `${y}px`);
          });
        }}
        role="list"
      >
        {#each Projects.splice(0, 6) as project (project.title)}
          <ProjectCard
            desc={project.desc}
            links={project.links}
            title={project.title}
          />
        {/each}
      </div>
    </section>
    <section class="ToolsSection">
      <div class="ToolsSection__top">
        <h2 class="ToolsSection--title">Tools and Technologies</h2>
        <select
          {value}
          class="FancySelect"
          on:change={(e) => {
            // @ts-ignore
            value = e.target.value;
            toolsOption = "Empty";

            setTimeout(() => {
              toolsOption = value;
            }, 500);
          }}
        >
          <option value="language">Languages</option>
          <option value="framework">Frameworks</option>
          <option value="tool">Tools</option>
        </select>
      </div>
      <div class="ToolsSection__container">
        {#each Object.values(Logos[value]) as item}
          <ToolCard name={item.name} href={item.href} image={item.image} />
        {/each}
      </div>
    </section>
    <section>
      <h2>Open Source</h2>
      {#each OpenSource as item}
        <OsCard
          title={item.title}
          desc={item.desc}
          src={item.src}
          href={item.href}
          additions={item.additions}
          deletions={item.deletions}
        />
      {/each}
    </section>
    <section>
      <h2>Github Stats</h2>
      <GithubMap />
    </section>
  </main>
  <Footer />
</div>

<style lang="scss" src="../styles/routes/home.scss" global></style>
