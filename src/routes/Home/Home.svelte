<script>
  // @ts-nocheck
  import Header from "../../components/Header/Header.svelte";
  import FancyButton from "../../components/FancyButton/FancyButton.svelte";
  import ExpItem from "../../components/ExpItem/ExpItem.svelte";
  import ProjectCard from "../../components/ProjectCard/ProjectCard.svelte";
  import ToolCard from "../../components/ToolCard/ToolCard.svelte";
  import Footer from "../../components/Footer/Footer.svelte";

  import { Logos, OpenSource } from "../../Utils/Logos";
  import { slide } from "svelte/transition";
  import { onMount } from "svelte";
  import OSCard from "../../components/OSCard/OSCard.svelte";
  import GithubMap from "../../components/GithubMap/GithubMap.svelte";

  const mode = "prod";
  let baseRoute;
  let isNewTab = true;

  if (mode === "prod") {
    baseRoute = "https://github.com/ABSanthosh";
  } else {
    baseRoute = "/project";
  }

  let toolsOption = "Languages",
    value = "Languages";

  onMount(() => {
    const container = document.querySelector(".ToolsSection__container");
    window.addEventListener("load", () => {
      setTimeout(() => {
        container.style.height = `${container.scrollHeight}px`;
      }, 200);
    });

    window.addEventListener("resize", () => {
      container.style.height = "unset";
      setTimeout(() => {
        container.style.height = `${container.scrollHeight}px`;
      }, 200);
    });
  });
</script>

<svelte:head>
  <title>ABSanthosh</title>
</svelte:head>

<div class="HomeWrapper">
  <Header />
  <main class="HomeWrapper__main">
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
          <FancyButton type="link" href="https://github.com/ABSanthosh" newTab>
            Github
          </FancyButton>
          <FancyButton
            type="link"
            href="https://www.linkedin.com/in/a-b-santhosh-97872612b/"
            newTab
          >
            LinkedIn
          </FancyButton>
          <FancyButton
            type="link"
            href="mailTo:a.b.santhosh02@gmail.com"
            newTab
          >
            Email
          </FancyButton>
          <FancyButton type="link" href="../assets/Docs/My Resume.pdf" newTab>
            Resume
          </FancyButton>
        </div>
      </article>
    </section>
    <section class="ExperienceSection">
      <h2 class="ExperienceSection--title">Featured Experiences</h2>
      <ExpItem
        position="Development Lead"
        company="Google Developer Student Club"
        desc="Manage all the development activities of the club and teach a cohort of 30+ students about Web development and Mobile development."
        tStart="June 2022"
        tEnd="Aug 2022"
      />
      <ExpItem
        position="Freelance Web Developer"
        company="Fresh From Farm"
        desc="Built an admin panel for a startup company to manage their products and orders and a website for their customers to place orders."
        tStart="Dec 2022"
        tEnd="Feb 2023"
      />
      <ExpItem
        position="PHP Intern"
        company="GameNation"
        desc="Designed and built production level modules for a platform with 20k+ page visits per day along with scrapers for machine learning."
        tStart="June 2022"
        tEnd="Aug 2022"
      />
      <ExpItem
        position="JavaScript Intern"
        company="Synergy Hi-Tech Designers"
        desc="Built and hosted a website for a startup company and helped them get recognized by Govt. of India."
        tStart="Aug 2021"
        tEnd="Oct 2021"
      />
      <ExpItem
        position="Web Dev team Lead"
        company="ECell SNU"
        desc="Lead a team of 6 web developers to build a website for a inter University Entrepreneurship event."
        tStart="April 2022"
        tEnd="Present"
      />
      <ExpItem
        position="Web Dev team Lead"
        company="Surge"
        desc="Leading a team of web developers and designers to build a website that manages everything from registration to payment for the annual sports event."
        tStart="July 2022"
        tEnd="Present"
      />
      <!-- <div class="ExperienceSection--viewMore">
        <a href="/experience">View more</a>
      </div> -->
    </section>
    <section class="ProjectsSection">
      <h2 class="ProjectsSection--title">Featured Projects</h2>
      <div class="ProjectsSection__cardBox">
        <ProjectCard
          title="Verse Lyrics"
          desc="Kotlin Android application that helps users to fetch and save lyrics of songs played in Spotify automatically. Available on Playstore."
          links={[
            {
              href: "https://play.google.com/store/apps/details?id=com.absan.verse&hl=en_IN&gl=US",
              newTab: isNewTab,
            },
            { href: `${baseRoute}/Verse-Lyrics`, newTab: isNewTab },
          ]}
          languages={[Logos["Languages"][1], Logos["Languages"][2]]}
        />
        <ProjectCard
          title="react-quizlet-flashcard"
          desc="A simple and responsive quizlet-like flashcard component with no additional dependency. Written in Javascript and React."
          links={[
            {
              href: "https://www.npmjs.com/package/react-quizlet-flashcard",
              newTab: isNewTab,
            },
            { href: `${baseRoute}/react-quizlet-flashcard`, newTab: isNewTab },
          ]}
          languages={[
            Logos["Languages"][9],
            Logos["Languages"][8],
            Logos["Frameworks"][5],
          ]}
        />
        <ProjectCard
          title="Dàimǎ"
          desc="A web based minimal IDE built with Monaco Editor and React. Supports multiple languages and themes. Runs faster than VSCode Web with less memory usage."
          links={[
            { href: "https://daima.netlify.app/", newTab: true },
            { href: `https://github.com/Daima-Editor/Daima`, newTab: isNewTab },
          ]}
          languages={[
            Logos["Languages"][4],
            Logos["Languages"][9],
            Logos["Languages"][8],
            Logos["Frameworks"][5],
          ]}
        />
        <ProjectCard
          title="Surge 2022"
          desc="(Database asleep 😴)Event management website built with NextJs and Prisma. Handled 1000+ registrations and 30k+ unique page visits before the event."
          links={[
            { href: "https://surgesnu.in/", newTab: true },
            {
              href: `https://github.com/surge-snu/Surge2022`,
              newTab: isNewTab,
            },
          ]}
          languages={[
            Logos["Languages"][4],
            Logos["Languages"][8],
            Logos["Frameworks"][3],
            Logos["Frameworks"][7],
          ]}
        />
        <ProjectCard
          title="Gastly"
          desc="A simple pokedex web app that fetches from custom pokemon api and displays them in a beautiful UI. Built with NextJs."
          links={[
            { href: "https://gastly-v4.netlify.app/", newTab: true },
            { href: `${baseRoute}/Gastly`, newTab: isNewTab },
          ]}
          languages={[
            Logos["Languages"][4],
            Logos["Languages"][8],
            Logos["Frameworks"][3],
          ]}
        />
        <ProjectCard
          title="Nihongo"
          desc="A blog built with NextJs to keep track of my Japanese learning process. Uses markdown to store and display posts."
          links={[
            { href: "https://nihongo-blogs.netlify.app/", newTab: true },
            { href: `${baseRoute}/Nihongo`, newTab: isNewTab },
          ]}
          languages={[
            Logos["Languages"][4],
            Logos["Languages"][8],
            Logos["Frameworks"][3],
          ]}
        />
        <ProjectCard
          title="Quartz(Under dev)"
          desc="A multifunctional web app task managment tool with cross platform authentication and storage using Supabase, In the aim to replace Notion and Obsidian."
          links={[
            { href: "https://smoky-quartz.netlify.app/", newTab: true },
            { href: `${baseRoute}/Quartz`, newTab: isNewTab },
          ]}
          languages={[
            Logos["Languages"][4],
            Logos["Languages"][8],
            Logos["Frameworks"][5],
          ]}
        />
        <ProjectCard
          title="Miru"
          desc="A minimal web interface to explore Ethereum blockchain logs and analyze the interconnections of transactions. Built for the HackManthon 2022."
          links={[
            { href: "https://miru-chain.netlify.app/eth", newTab: true },
            { href: `${baseRoute}/Miru`, newTab: isNewTab },
          ]}
          languages={[
            Logos["Languages"][4],
            Logos["Languages"][8],
            Logos["Frameworks"][5],
          ]}
        />
      </div>
      <!-- <div class="ExperienceSection--viewMore">
        <a href="/experience">View more</a>
      </div> -->
    </section>
    <section class="ToolsSection">
      <div class="ToolsSection__top">
        <h2 class="ToolsSection--title">Tools and Technologies</h2>
        <select
          {value}
          on:change={(e) => {
            value = e.target.value;
            toolsOption = "Empty";

            setTimeout(() => {
              toolsOption = value;
            }, 500);
          }}
        >
          <option value="Languages">Languages</option>
          <option value="Frameworks">Frameworks</option>
          <option value="Tools">Tools</option>
        </select>
      </div>
      <div class="ToolsSection__container" transition:slide>
        {#each Logos[toolsOption] as item}
          <ToolCard name={item.name} href={item.href} image={item.image} />
        {/each}
      </div>
    </section>
    <section class="OpenSourceSection">
      <h2 class="OpenSourceSection--title">Open Source</h2>
      {#each OpenSource as item}
        <OSCard
          title={item.title}
          desc={item.desc}
          src={item.src}
          href={item.href}
          additions={item.additions}
          deletions={item.deletions}
        />
      {/each}
    </section>

    <section class="GithubSection">
      <h2 class="GithubSection--title">Github Contributions</h2>
      <GithubMap />
    </section>
  </main>
  <Footer />
</div>

<style lang="scss" src="./Home.scss"></style>
