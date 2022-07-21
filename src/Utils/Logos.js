import Svelte from "../assets/Images/Languages/svelte.png";
import Kotlin from "../assets/Images/Languages/Kotlin.png";
import Java from "../assets/Images/Languages/Java.png";
import C from "../assets/Images/Languages/C.svg";
import Python from "../assets/Images/Languages/Python.png";
import JavaScript from "../assets/Images/Languages/JavaScript.png";
import TypeScript from "../assets/Images/Languages/TypeScript.svg";
import CSS from "../assets/Images/Languages/CSS.png";
import HTML from "../assets/Images/Languages/HTML.png";
import SASS from "../assets/Images/Languages/SASS.png";
import ShellScript from "../assets/Images/Languages/ShellScript.png";
import PHP from "../assets/Images/Languages/PHP.svg";

import Django from "../assets/Images/Frameworks/Django.svg";
import ExpressJs from "../assets/Images/Frameworks/ExpressJs.png";
import FastifyDark from "../assets/Images/Frameworks/FastifyDark.png";
import FastifyLight from "../assets/Images/Frameworks/FastifyLight.png";
import NextJs from "../assets/Images/Frameworks/NextJs.png";
import NodeJs from "../assets/Images/Frameworks/NodeJs.png";
import ReactJs from "../assets/Images/Frameworks/ReactJs.svg";
import RemixJs from "../assets/Images/Frameworks/RemixJs.png";

import ESLint from "../assets/Images/Tools/ESLint.svg";
import Git from "../assets/Images/Tools/Git.png";
import GitHub from "../assets/Images/Tools/GitHub.png";
import NetlifyDark from "../assets/Images/Tools/NetlifyDark.svg";
import NetlifyLight from "../assets/Images/Tools/NetlifyLight.svg";
import NPM from "../assets/Images/Tools/NPM.svg";
import SVN from "../assets/Images/Tools/SVN.svg";
import VSCode from "../assets/Images/Tools/vscode.png";
import Yarn from "../assets/Images/Tools/Yarn.png";

import Lightify from "../assets/Images/LightifyLogo.png";

export const Logos = {
  Empty: [],
  Languages: [
    {
      name: "Svelte",
      image: Svelte,
      href: "https://svelte.dev/",
    },
    {
      name: "Kotlin",
      image: Kotlin,
      href: "https://kotlinlang.org/",
    },
    {
      name: "Java",
      image: Java,
      href: "https://www.java.com/",
    },
    {
      name: "Python",
      image: Python,
      href: "https://www.python.org/",
    },
    {
      name: "JavaScript",
      image: JavaScript,
      href: "https://www.javascript.com/",
    },
    {
      name: "C-lang",
      image: C,
      href: "https://www.cprogramming.com/",
    },

    {
      name: "HTML",
      image: HTML,
      href: "https://www.w3schools.com/html/",
    },
    {
      name: "CSS",
      image: CSS,
      href: "https://www.w3schools.com/css/",
    },
    {
      name: "SASS",
      image: SASS,
      href: "https://sass-lang.com/",
    },
    {
      name: "TypeScript",
      image: TypeScript,
      href: "https://www.typescriptlang.org/",
    },
    {
      name: "Bash",
      image: ShellScript,
      href: "https://www.shellscript.com/",
    },
    {
      name: "PHP",
      image: PHP,
      href: "https://www.php.net/",
    },
  ],
  Frameworks: [
    {
      name: "Django",
      image: Django,
      href: "https://www.djangoproject.com/",
    },
    {
      name: "Express.js",
      image: ExpressJs,
      href: "https://expressjs.com/",
    },
    {
      name: "Fastify",
      image: FastifyDark,
      href: "https://fastify.io/",
    },
    {
      name: "Next.js",
      image: NextJs,
      href: "https://nextjs.org/",
    },
    {
      name: "Node.js",
      image: NodeJs,
      href: "https://nodejs.org/en/",
    },
    {
      name: "React.js",
      image: ReactJs,
      href: "https://reactjs.org/",
    },
    {
      name: "Remix.js",
      image: RemixJs,
      href: "https://remix.ethereum.org/",
    },
  ],
  Tools: [
    {
      name: "ESLint",
      image: ESLint,
      href: "https://eslint.org/",
    },
    {
      name: "Git",
      image: Git,
      href: "https://git-scm.com/",
    },
    {
      name: "GitHub",
      image: GitHub,
      href: "https://github.com",
    },
    {
      name: "Netlify",
      image: NetlifyLight,
      href: "https://www.netlify.com/",
    },
    {
      name: "NPM",
      image: NPM,
      href: "https://www.npmjs.com/",
    },
    {
      name: "SVN",

      image: SVN,
      href: "https://subversion.apache.org/",
    },
    {
      name: "VS Code",
      image: VSCode,
      href: "https://code.visualstudio.com/",
    },
    {
      name: "Yarn",
      image: Yarn,
      href: "https://yarnpkg.com/",
    },
  ],
};

export const OpenSource = [
  {
    title: "Litefy",
    src: Lightify,
    desc: "Redesigned and implemented the design on the angular based lightweight spotify client website.",
    href: "https://github.com/mathkruger/litefy",
    additions: "9,840 --",
    deletions: "10,461 ++",
  },
  {
    title: "React-Quizlet-FlashCard",
    src: NPM,
    desc: "A React component that allows you to create flashcards like Quizlet.",
    href: "https://www.npmjs.com/package/react-quizlet-flashcard",
    additions: "28,077 ++",
    deletions: "6,997 --",
  }
];
