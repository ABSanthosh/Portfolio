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
import Prisma from "../assets/Images/Frameworks/Prisma.svg";
import Redux from "../assets/Images/Frameworks/Redux.svg";
import EasyPeasy from "../assets/Images/Frameworks/EasyPeasy.png";

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
      // 0
      name: "Svelte",
      image: Svelte,
      href: "https://svelte.dev/",
    },
    {
      // 1
      name: "Kotlin",
      image: Kotlin,
      href: "https://kotlinlang.org/",
    },
    {
      // 2
      name: "Java",
      image: Java,
      href: "https://www.java.com/",
    },
    {
      // 3
      name: "Python",
      image: Python,
      href: "https://www.python.org/",
    },
    {
      // 4
      name: "JavaScript",
      image: JavaScript,
      href: "https://www.javascript.com/",
    },
    {
      // 5
      name: "C-lang",
      image: C,
      href: "https://www.cprogramming.com/",
    },

    {
      // 6
      name: "HTML",
      image: HTML,
      href: "https://www.w3schools.com/html/",
    },
    {
      // 7
      name: "CSS",
      image: CSS,
      href: "https://www.w3schools.com/css/",
    },
    {
      // 8
      name: "SASS",
      image: SASS,
      href: "https://sass-lang.com/",
    },
    {
      // 9
      name: "TypeScript",
      image: TypeScript,
      href: "https://www.typescriptlang.org/",
    },
    {
      // 10
      name: "Bash",
      image: ShellScript,
      href: "https://www.shellscript.com/",
    },
    {
      // 11
      name: "PHP",
      image: PHP,
      href: "https://www.php.net/",
    },
  ],
  Frameworks: [
    {
      // 0
      name: "Django",
      image: Django,
      href: "https://www.djangoproject.com/",
    },
    {
      // 1
      name: "Express.js",
      image: ExpressJs,
      href: "https://expressjs.com/",
    },
    {
      // 2
      name: "Fastify",
      image: FastifyDark,
      href: "https://fastify.io/",
    },
    {
      // 3
      name: "Next.js",
      image: NextJs,
      href: "https://nextjs.org/",
    },
    {
      // 4
      name: "Node.js",
      image: NodeJs,
      href: "https://nodejs.org/en/",
    },
    {
      // 5
      name: "React.js",
      image: ReactJs,
      href: "https://reactjs.org/",
    },
    {
      // 6
      name: "Remix.js",
      image: RemixJs,
      href: "https://remix.ethereum.org/",
    },
    {
      // 7
      name: "Prisma",
      image: Prisma,
      href: "https://www.prisma.io/",
    },
    {
      // 8
      name: "Redux",
      image: Redux,
      href: "https://redux.js.org/",
    },
    {
      // 9
      name: "Easy Peasy",
      image: EasyPeasy,
      href: "https://easy-peasy.vercel.app/",
    }
  ],
  Tools: [
    {
      // 0
      name: "ESLint",
      image: ESLint,
      href: "https://eslint.org/",
    },
    {
      // 1
      name: "Git",
      image: Git,
      href: "https://git-scm.com/",
    },
    {
      // 2
      name: "GitHub",
      image: GitHub,
      href: "https://github.com",
    },
    {
      // 3
      name: "Netlify",
      image: NetlifyLight,
      href: "https://www.netlify.com/",
    },
    {
      // 4
      name: "NPM",
      image: NPM,
      href: "https://www.npmjs.com/",
    },
    {
      // 5
      name: "SVN",
      image: SVN,
      href: "https://subversion.apache.org/",
    },
    {
      // 6
      name: "VS Code",
      image: VSCode,
      href: "https://code.visualstudio.com/",
    },
    {
      // 7
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
  },
];
