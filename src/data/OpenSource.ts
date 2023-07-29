import { Logos } from "./Logos";

interface IOpenSource {
  title: string;
  src: string;
  desc: string;
  href: string;
  additions: string;
  deletions: string;
}

export const OpenSource: IOpenSource[] = [
  {
    title: "React-Quizlet-FlashCard",
    src: Logos.tool["npm"].image,
    desc: "A React component that allows you to create flashcards like Quizlet.",
    href: "https://www.npmjs.com/package/react-quizlet-flashcard",
    additions: "28,077 ++",
    deletions: "6,997 --",
  },
  {
    title: "Verse Lyrics",
    src: Logos.misc["verse"].image,
    desc: "A simple kotlin app that fetches lyrics from google. Has 1000+ downloads on Playstore.",
    href: "https://play.google.com/store/apps/details?id=com.absan.verse&hl=en_IN&gl=US",
    additions: "56,074 ++",
    deletions: "44,974 --",
  },
  {
    title: "Litefy",
    src: Logos.misc["litefy"].image,
    desc: "Redesigned and implemented the design on the angular based lightweight spotify client website.",
    href: "https://github.com/mathkruger/litefy",
    additions: "9,840 --",
    deletions: "10,461 ++",
  },
];
