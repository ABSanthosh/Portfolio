<script>
  import Header from "../../components/Header/Header.svelte";
  import FancyButton from "../../components/FancyButton/FancyButton.svelte";
  import ExpItem from "../../components/ExpItem/ExpItem.svelte";
  import ProjectCard from "../../components/ProjectCard/ProjectCard.svelte";
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
  </main>
</div>

<style lang="scss" src="./Home.scss"></style>
