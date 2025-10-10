export type Project = {
  slug: string;
  title: string;
  summary: string;
};

export const projects: Project[] = [
  { slug: "amargram", title: "AmarGram", summary: "A social platform experiment with live feeds and reactions." },
  { slug: "portfolio", title: "Portfolio", summary: "This site, built with Next.js, Tailwind, and motion." },
  { slug: "taskflow", title: "TaskFlow", summary: "Productivity app with offline-first sync and Kanban views." },
  { slug: "aistudio", title: "AI Studio", summary: "Playground for LLM prompts and fine-tuned workflows." },
  { slug: "shoplite", title: "ShopLite", summary: "Minimal e-commerce prototype with Stripe test checkout." },
  { slug: "devdash", title: "DevDash", summary: "Developer dashboard aggregating GitHub, Vercel, and CI status." },
  { slug: "imglab", title: "ImgLab", summary: "Image processing toys: filters, crop, stickers, share." },
  { slug: "notesync", title: "NoteSync", summary: "Real-time markdown notes with presence and comments." },
  { slug: "moviemap", title: "MovieMap", summary: "Explore films via genres, connections, and people graphs." },
  { slug: "cookbook", title: "CookBook", summary: "Recipe manager with meal plans and grocery lists." },
];
