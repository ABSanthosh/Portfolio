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
        <div class="HeroSection--actions">
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
    <section class="ExperienceSection">
      <h2 class="ExperienceSection--title">Experience</h2>
      <ExpItem
        position="Software Engineer"
        company="Google"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. vitae metus vitae nibh tincidunt pharetra sit at justo."
        tStart="2019"
        tEnd="Present"
      />
      <ExpItem
        position="Software Engineer"
        company="Google"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. vitae metus vitae nibh tincidunt pharetra sit at justo."
        tStart="2019"
        tEnd="Present"
      />
      <ExpItem
        position="Software Engineer"
        company="Google"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. vitae metus vitae nibh tincidunt pharetra sit at justo."
        tStart="2019"
        tEnd="Present"
      />
      <ExpItem
        position="Software Engineer"
        company="Google"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. vitae metus vitae nibh tincidunt pharetra sit at justo."
        tStart="2019"
        tEnd="Present"
      />
      <div class="ExperienceSection--viewMore">
        <a href="/experience">View more</a>
      </div>
    </section>
    <section class="ProjectsSection">
      <h2 class="ProjectsSection--title">Projects</h2>
      <div class="ProjectsSection__cardBox">
        <ProjectCard
          title="Project 1"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. vitae metus vitae nibh tincidunt pharetra sit at justo."
          links={["", ""]}
        />
        <ProjectCard
          title="Project 1"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. vitae metus vitae nibh tincidunt pharetra sit at justo."
          links={["", ""]}
        />
        <ProjectCard
          title="Project 1"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. vitae metus vitae nibh tincidunt pharetra sit at justo."
          links={["", ""]}
        />
        <ProjectCard
          title="Project 1"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. vitae metus vitae nibh tincidunt pharetra sit at justo."
          links={["", ""]}
        />
        <ProjectCard
          title="Project 1"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. vitae metus vitae nibh tincidunt pharetra sit at justo."
          links={["", ""]}
        />
        <ProjectCard
          title="Project 1"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. vitae metus vitae nibh tincidunt pharetra sit at justo."
          links={["", ""]}
        />
      </div>
      <div class="ExperienceSection--viewMore">
        <a href="/experience">View more</a>
      </div>
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
    </section>
  </main>
  <Footer />
</div>

<style lang="scss" src="./Home.scss"></style>
