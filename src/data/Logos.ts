import logo_svelte from "$images/Languages/svelte.png";
import logo_Kotlin from "$images/Languages/Kotlin.png";
import logo_Java from "$images/Languages/Java.png";
import logo_Python from "$images/Languages/Python.png";
import logo_JavaScript from "$images/Languages/JavaScript.png";
import logo_C from "$images/Languages/C.png";
import logo_HTML from "$images/Languages/HTML.png";
import logo_CSS from "$images/Languages/CSS.png";
import logo_SASS from "$images/Languages/SASS.png";
import logo_TypeScript from "$images/Languages/TypeScript.png";
import logo_ShellScript from "$images/Languages/ShellScript.png";
import logo_PHP from "$images/Languages/PHP.png";

import logo_Django from "$images/Frameworks/Django.png";
import logo_ExpressJs from "$images/Frameworks/ExpressJs.png";
import logo_NextJs from "$images/Frameworks/NextJs.png";
import logo_NodeJs from "$images/Frameworks/NodeJs.png";
import logo_ReactJs from "$images/Frameworks/ReactJs.png";
import logo_RemixJs from "$images/Frameworks/RemixJs.png";
import logo_Prisma from "$images/Frameworks/Prisma.png";
import logo_Redux from "$images/Frameworks/Redux.png";
import logo_EasyPeasy from "$images/Frameworks/EasyPeasy.png";

import logo_ESLint from "$images/Tools/ESLint.png";
import logo_Git from "$images/Tools/Git.png";
import logo_GitHub from "$images/Tools/GitHub.png";
import logo_Netlify from "$images/Tools/Netlify.png";
import logo_NPM from "$images/Tools/NPM.png";
import logo_SVN from "$images/Tools/SVN.png";
import logo_VSCode from "$images/Tools/VSCode.png";
import logo_Yarn from "$images/Tools/Yarn.png";
import logo_Figma from "$images/Tools/Figma.png";
import logo_Postman from "$images/Tools/Postman.png";
import logo_Docker from "$images/Tools/Docker.png";

import logo_Verse from "$images/VerseLogo.png";
import logo_Lightify from "$images/LightifyLogo.png";

export interface ILogo {
  name: string;
  image: string;
  href: string;
}
// type ILogos = ;

export const Logos: {
  [options: string]: {
    [key: string]: ILogo;
  };
} = {
  language: {
    svelte: {
      name: "Svelte",
      image: logo_svelte,
      href: "https://svelte.dev/",
    },
    kotlin: {
      name: "Kotlin",
      image: logo_Kotlin,
      href: "https://kotlinlang.org/",
    },
    java: {
      name: "Java",
      image: logo_Java,
      href: "https://www.java.com/",
    },
    python: {
      name: "Python",
      image: logo_Python,
      href: "https://www.python.org/",
    },
    javascript: {
      name: "JavaScript",
      image: logo_JavaScript,
      href: "https://www.javascript.com/",
    },
    "c-lang": {
      name: "C-lang",
      image: logo_C,
      href: "https://www.cprogramming.com/",
    },
    html: {
      name: "HTML",
      image: logo_HTML,
      href: "https://www.w3schools.com/html/",
    },
    css: {
      name: "CSS",
      image: logo_CSS,
      href: "https://www.w3schools.com/css/",
    },
    sass: {
      name: "SASS",
      image: logo_SASS,
      href: "https://sass-lang.com/",
    },
    typescript: {
      name: "TypeScript",
      image: logo_TypeScript,
      href: "https://www.typescriptlang.org/",
    },
    bash: {
      name: "Bash",
      image: logo_ShellScript,
      href: "https://www.shellscript.com/",
    },
    php: {
      name: "PHP",
      image: logo_PHP,
      href: "https://www.php.net/",
    },
  },
  framework: {
    django: {
      name: "Django",
      image: logo_Django,
      href: "https://www.djangoproject.com/",
    },
    expressjs: {
      name: "Express.js",
      image: logo_ExpressJs,
      href: "https://expressjs.com/",
    },
    nextjs: {
      name: "Next.js",
      image: logo_NextJs,
      href: "https://nextjs.org/",
    },
    nodejs: {
      name: "Node.js",
      image: logo_NodeJs,
      href: "https://nodejs.org/en/",
    },
    reactjs: {
      name: "React.js",
      image: logo_ReactJs,
      href: "https://reactjs.org/",
    },
    remixjs: {
      name: "Remix.js",
      image: logo_RemixJs,
      href: "https://remix.ethereum.org/",
    },
    prisma: {
      name: "Prisma",
      image: logo_Prisma,
      href: "https://www.prisma.io/",
    },
    redux: {
      name: "Redux",
      image: logo_Redux,
      href: "https://redux.js.org/",
    },
    "easy-peasy": {
      name: "Easy Peasy",
      image: logo_EasyPeasy,
      href: "https://easy-peasy.vercel.app/",
    },
  },
  tool: {
    eslint: {
      name: "ESLint",
      image: logo_ESLint,
      href: "https://eslint.org/",
    },
    git: {
      name: "Git",
      image: logo_Git,
      href: "https://git-scm.com/",
    },
    github: {
      name: "GitHub",
      image: logo_GitHub,
      href: "https://github.com",
    },
    netlify: {
      name: "Netlify",
      image: logo_Netlify,
      href: "https://www.netlify.com/",
    },
    npm: {
      name: "NPM",
      image: logo_NPM,
      href: "https://www.npmjs.com/",
    },
    svn: {
      name: "SVN",
      image: logo_SVN,
      href: "https://subversion.apache.org/",
    },
    "vs code": {
      name: "VS Code",
      image: logo_VSCode,
      href: "https://code.visualstudio.com/",
    },
    yarn: {
      name: "Yarn",
      image: logo_Yarn,
      href: "https://yarnpkg.com/",
    },
    figma: {
      name: "Figma",
      image: logo_Figma,
      href: "https://www.figma.com/",
    },
    postman: {
      name: "Postman",
      image: logo_Postman,
      href: "https://www.postman.com/",
    },
    docker: {
      name: "Docker",
      image: logo_Docker,
      href: "https://www.docker.com/",
    },
  },
  misc: {
    verse: {
      href: "",
      image: logo_Verse,
      name: "",
    },
    litefy: {
      href: "",
      image: logo_Lightify,
      name: "",
    },
  },
};
