<script lang="ts">
  import { Logos } from "$data/Logos";
  import Projects from "$data/Projects";
  import { OpenSource } from "$data/OpenSource";
  import OsCard from "$components/OSCard.svelte";
  import ExpItem from "$components/ExpItem.svelte";
  import ToolCard from "$components/ToolCard.svelte";
  import GithubMap from "../components/GithubMap.svelte";
  import ProjectCard from "$components/ProjectCard.svelte";
  import Experiences, { RESUME_PATH } from "$data/Experiences";

  let toolsOption = "languages",
    value: "language" | "tool" | "framework" = "language";

  let quickLinks = [
    {
      title: "Github",
      href: "https://github.com/ABSanthosh",
    },
    {
      title: "LinkedIn",
      href: "https://www.linkedin.com/in/a-b-santhosh-97872612b/",
    },
    {
      title: "Email",
      href: "mailto:a.b.santhosh02@gmail.com",
    },
    {
      title: "Resume",
      href: RESUME_PATH,
    },
  ];
</script>

<main class="Home Page">
  <section class="Home__section HeroSection">
    <h1 class="HeroSection--title">Hey! I'm Santhosh</h1>
    <article class="HeroSection--desc">
      <p>
        I know you don't have time to read long paragraphs, so here's what you
        need to know:
      </p>
      <ul>
        <li>
          I have a Bachelor's degree in Computer Science, specializing in Cyber
          Security.
        </li>
        <li>
          I'm currently pursuing a Master's degree in Software Engineering at
          Penn State University.
        </li>
        <li>
          I build websites(a lot of 'em) and native mobile Android applications.
        </li>
        <br />
        <li>
          I work on open source projects and maintain my own libraries.
          <ul>
            <li>
              <a
                class="FancyLink"
                data-type="Bracket"
                href="https://www.npmjs.com/package/react-quizlet-flashcard"
                target="_blank"
                referrerpolicy="no-referrer"
              >
                react-quizlet-flashcard
              </a>
            </li>
            <li>
              <a
                class="FancyLink"
                data-type="Bracket"
                href="https://github.com/ABSanthosh/neko-ts"
                target="_blank"
                referrerpolicy="no-referrer"
              >
                neko-ts
              </a>
            </li>
          </ul>
        </li>
        <br />
        <li>I enjoy reading manga and watching anime in my free time.</li>
        <li>I also (used to)play sandbox games like Minecraft.</li>
      </ul>
      <div class="HeroSection--actions">
        {#each quickLinks as link}
          <a
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            class="FancyLink"
            data-type="ButtonLink"
          >
            {link.title}
          </a>
        {/each}
      </div>
    </article>
  </section>
  <section class="Home__section">
    <h2>Experiences</h2>
    {#each Experiences.sort((a, b) => {
      if (a.end.getFullYear() === b.end.getFullYear()) {
        return a.end.getMonth() - b.end.getMonth();
      } else {
        return b.end.getFullYear() - a.end.getFullYear();
      }
    }) as expItem (expItem)}
      <ExpItem {expItem} />
    {/each}
  </section>
  <section class="Home__section ProjectSection">
    <div class="w-100 Row--between">
      <h2 class="Home__section--title">Projects</h2>
      <a class="Home__section--action FancyButton" href="/project">
        View all projects
      </a>
    </div>
    <div class="ProjectSection__cards" role="list">
      {#each Projects as project (project)}
        {#if project.featured}
          <ProjectCard
            desc={project.desc}
            links={project.links}
            title={project.title}
          />
        {/if}
      {/each}
    </div>
  </section>
  <section class="Home__section ToolsSection">
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
  <section class="Home__section">
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
  <section class="Home__section">
    <h2>Github Stats</h2>
    <GithubMap />
  </section>
</main>

<style lang="scss">
  .Home {
    gap: 65px;
    margin-top: 110px;
    @include respondAt(635px) {
      margin-top: 85px;
    }

    @include respondAt(475px) {
      margin-top: 50px;
    }
    &__section {
      gap: 16px;
      @include box($height: unset);
      @include make-flex($align: flex-start);

      &--title {
        color: var(--headingColor);
        @include box(auto, auto);
        @include make-flex($align: flex-start);
        background-color: var(--backgroundColor);
      }

      &--action {
        flex-shrink: 0;
        text-decoration: none;
      }
    }

    .HeroSection {
      &--title {
        font-size: 1.875rem;
        line-height: 2.25rem;
        // font-weight: 500;
        color: var(--headingColor);
      }

      &--desc {
        gap: 17px;
        @include make-flex($align: flex-start);

        p {
          color: var(--subText);
          line-height: 27px;
          text-align: justify;
          word-spacing: -0.05em;
          word-break: break-word;
        }

        ul {
          list-style-type: disc;
          padding-left: 20px;
          line-height: 27px;
          // text-align: justify;
          word-spacing: -0.05em;
          word-break: break-word;

          li {
            color: var(--subText);
          }
        }
      }

      &--actions {
        gap: 16px;
        margin-top: 15px;
        @include box(50%, 40px);
        @include make-flex($dir: row, $just: flex-start);

        @include respondAt(775px) {
          width: 60%;
        }
        @include respondAt(620px) {
          width: 80%;
        }
        @include respondAt(420px) {
          width: 100%;
          flex-wrap: wrap;
        }
      }
    }

    .ProjectSection {
      &__cards {
        gap: 18px;
        display: grid;
        grid-auto-rows: 220px;
        @include box($height: unset);
        grid-template-columns: 1fr 1fr;

        @include respondAt(545px) {
          grid-template-columns: 1fr;
        }
      }
    }

    .ToolsSection {
      gap: 16px;
      @include box();
      @include make-flex($just: flex-start, $align: flex-start);

      @include respondAt(505px) {
        gap: 20px;
      }
      &__top {
        width: 100%;
        @include make-flex($just: space-between, $dir: row);

        select {
          width: 25%;
          @include respondAt(595px) {
            width: 35%;
          }
          @include respondAt(505px) {
            width: 100%;
          }
        }
        @include respondAt(505px) {
          gap: 10px;
          flex-direction: column;
        }
      }
      &--title {
        color: var(--headingColor);
        @include box(auto, $height: 50px);
        @include make-flex($align: flex-start);
        background-color: var(--backgroundColor);
        @include respondAt(505px) {
          width: 100%;
        }
      }

      &__container {
        gap: 16px;
        flex-wrap: wrap;
        align-content: flex-start;
        @include box($height: unset);
        @include make-flex($dir: row);
      }
    }
  }
</style>
