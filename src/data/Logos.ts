export interface ILogo {
  name: string;
  image: string;
  href: string;
}
interface ILogos {
  language: {
    [key: string]: ILogo;
  };
  framework: {
    [key: string]: ILogo;
  };
  tool: {
    [key: string]: ILogo;
  };
}

export const Logos: ILogos = {
  language: {
    svelte: {
      name: "Svelte",
      image: "/assets/Images/Languages/svelte.png",
      href: "https://svelte.dev/",
    },
    kotlin: {
      name: "Kotlin",
      image: "/assets/Images/Languages/Kotlin.png",
      href: "https://kotlinlang.org/",
    },
    java: {
      name: "Java",
      image: "/assets/Images/Languages/Java.png",
      href: "https://www.java.com/",
    },
    python: {
      name: "Python",
      image: "/assets/Images/Languages/Python.png",
      href: "https://www.python.org/",
    },
    javascript: {
      name: "JavaScript",
      image: "/assets/Images/Languages/JavaScript.png",
      href: "https://www.javascript.com/",
    },
    "c-lang": {
      name: "C-lang",
      image: "/assets/Images/Languages/C.svg",
      href: "https://www.cprogramming.com/",
    },
    html: {
      name: "HTML",
      image: "/assets/Images/Languages/HTML.png",
      href: "https://www.w3schools.com/html/",
    },
    css: {
      name: "CSS",
      image: "/assets/Images/Languages/CSS.png",
      href: "https://www.w3schools.com/css/",
    },
    sass: {
      name: "SASS",
      image: "/assets/Images/Languages/SASS.png",
      href: "https://sass-lang.com/",
    },
    typescript: {
      name: "TypeScript",
      image: "/assets/Images/Languages/TypeScript.svg",
      href: "https://www.typescriptlang.org/",
    },
    bash: {
      name: "Bash",
      image: "/assets/Images/Languages/ShellScript.png",
      href: "https://www.shellscript.com/",
    },
    php: {
      name: "PHP",
      image: "/assets/Images/Languages/PHP.svg",
      href: "https://www.php.net/",
    },
  },
  framework: {
    django: {
      name: "Django",
      image: "/assets/Images/Frameworks/Django.svg",
      href: "https://www.djangoproject.com/",
    },
    expressjs: {
      name: "Express.js",
      image: "/assets/Images/Frameworks/ExpressJs.png",
      href: "https://expressjs.com/",
    },
    fastify: {
      name: "Fastify",
      image: "/assets/Images/Frameworks/FastifyDark.png",
      href: "https://fastify.io/",
    },
    nextjs: {
      name: "Next.js",
      image: "/assets/Images/Frameworks/NextJs.png",
      href: "https://nextjs.org/",
    },
    nodejs: {
      name: "Node.js",
      image: "/assets/Images/Frameworks/NodeJs.png",
      href: "https://nodejs.org/en/",
    },
    reactjs: {
      name: "React.js",
      image: "/assets/Images/Frameworks/ReactJs.svg",
      href: "https://reactjs.org/",
    },
    remixjs: {
      name: "Remix.js",
      image: "/assets/Images/Frameworks/RemixJs.png",
      href: "https://remix.ethereum.org/",
    },
    prisma: {
      name: "Prisma",
      image: "/assets/Images/Frameworks/Prisma.svg",
      href: "https://www.prisma.io/",
    },
    redux: {
      name: "Redux",
      image: "/assets/Images/Frameworks/Redux.svg",
      href: "https://redux.js.org/",
    },
    "easy-peasy": {
      name: "Easy Peasy",
      image: "/assets/Images/Frameworks/EasyPeasy.png",
      href: "https://easy-peasy.vercel.app/",
    },
  },
  tool: {
    eslint: {
      name: "ESLint",
      image: "/assets/Images/Tools/ESLint.svg",
      href: "https://eslint.org/",
    },
    git: {
      name: "Git",
      image: "/assets/Images/Tools/Git.png",
      href: "https://git-scm.com/",
    },
    github: {
      name: "GitHub",
      image: "/assets/Images/Tools/GitHub.png",
      href: "https://github.com",
    },
    netlify: {
      name: "Netlify",
      image: "/assets/Images/Tools/NetlifyDark.svg",
      href: "https://www.netlify.com/",
    },
    npm: {
      name: "NPM",
      image: "/assets/Images/Tools/NPM.svg",
      href: "https://www.npmjs.com/",
    },
    svn: {
      name: "SVN",
      image: "/assets/Images/Tools/SVN.svg",
      href: "https://subversion.apache.org/",
    },
    "vs code": {
      name: "VS Code",
      image: "/assets/Images/Tools/vscode.png",
      href: "https://code.visualstudio.com/",
    },
    yarn: {
      name: "Yarn",
      image: "/assets/Images/Tools/Yarn.png",
      href: "https://yarnpkg.com/",
    },
  },
};
