import { Logos, type ILogo } from "./Logos";

interface IProject {
  title: string;
  desc: string;
  links: {
    github: string;
    live: string;
  };
  tech: ILogo[];
}

export const Projects: IProject[] = [
  {
    title: "Verse Lyrics",
    desc: "Kotlin Android application that helps users to fetch and save lyrics of songs played in Spotify automatically. Available on Playstore.",
    links: {
      github: "https://github.com/ABSanthosh/Verse-Lyrics",
      live: "https://play.google.com/store/apps/details?id=com.absan.verse&hl=en_IN&gl=US",
    },
    tech: [Logos.language.kotlin, Logos.language.java],
  },
  {
    title: "react-quizlet-flashcard",
    desc: "A simple and responsive quizlet-like flashcard component with no additional dependency. Written in Javascript and React.",
    links: {
      github: "https://github.com/ABSanthosh/react-quizlet-flashcard",
      live: "https://www.npmjs.com/package/react-quizlet-flashcard",
    },
    tech: [
      Logos.language.typescript,
      Logos.language.sass,
      Logos.framework.reactjs,
    ],
  },
  {
    title: "Dàimǎ",
    desc: "A web based minimal IDE built with Monaco Editor and React. Supports multiple languages and themes. Runs faster than VSCode Web with less memory usage.",
    links: {
      github: "https://github.com/ABSanthosh/Daima-Hosting",
      live: "https://daima.netlify.app/",
    },
    tech: [
      Logos.language.typescript,
      Logos.language.javascript,
      Logos.language.sass,
      Logos.framework.reactjs,
    ],
  },
  {
    title: "Surge 2022",
    desc: "(Database asleep 😴)Event management website built with NextJs and Prisma. Handled 1000+ registrations and 30k+ unique page visits before the event.",
    links: {
      github: "https://github.com/surge-snu/Surge2022",
      live: "https://surgesnu.in/",
    },
    tech: [
      Logos.language.javascript,
      Logos.language.sass,
      Logos.framework.nextjs,
      Logos.framework.prisma,
    ],
  },
  {
    title: "Gastly",
    desc: "A simple pokedex web app that fetches from custom pokemon api and displays them in a beautiful UI. Built with NextJs.",
    links: {
      github: "https://github.com/ABSanthosh/Gastly",
      live: "https://gastly-v4.netlify.app/",
    },
    tech: [
      Logos.language.javascript,
      Logos.language.sass,
      Logos.framework.nextjs,
    ],
  },
  {
    title: "Nihongo",
    desc: "A blog built with NextJs to keep track of my Japanese learning process. Uses markdown to store and display posts.",
    links: {
      github: "https://github.com/ABSanthosh/Nihongo",
      live: "https://nihongo-blogs.netlify.app/",
    },
    tech: [
      Logos.language.javascript,
      Logos.language.sass,
      Logos.framework.nextjs,
    ],
  },
  {
    title: "Quartz(Under dev)",
    desc: "A multifunctional web app task managment tool with cross platform authentication and storage using Supabase, In the aim to replace Notion and Obsidian.",
    links: {
      github: "https://github.com/ABSanthosh/Quartz",
      live: "https://smoky-quartz.netlify.app/app",
    },
    tech: [
      Logos.language.typescript,
      Logos.language.sass,
      Logos.framework.reactjs,
    ],
  },
  {
    title: "Miru",
    desc: "A minimal web interface to explore Ethereum blockchain logs and analyze the interconnections of transactions. Built for the HackManthon 2022.",
    links: {
      github: "https://github.com/ABSanthosh/Miru",
      live: "https://miru-chain.netlify.app/eth",
    },
    tech: [
      Logos.language.javascript,
      Logos.language.sass,
      Logos.framework.reactjs,
    ],
  },
];
