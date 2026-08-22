export type Project = {
  slug: string;
  title: string;
  summary: string;
  about: string;
  demo: string;
  github: string;
};

export const projects: Project[] = [
  {
    slug: "amargram",
    title: "AmarGram",
    summary: "A social platform experiment with live feeds and reactions.",
    about: "/amargram",
    demo: "https://social.amaremini.com",
    github: "https://github.com/amarua05/amargram",
  },
  {
    slug: "portfolio",
    title: "Portfolio",
    summary: "This site, built with Next.js, Tailwind, and motion.",
    about: "/",
    demo: "https://amaremini.com",
    github: "https://github.com/amarua05/website",
  },
  {
    slug: "wordle-clone",
    title: "Wordle Clone",
    summary: "A Wordle clone built with Next.js and TypeScript.",
    about: "/wordle",
    demo: "https://wordle.amaremini.com",
    github: "https://github.com/amarua05/wordle-clone",
  }
];