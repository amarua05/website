import Head from "next/head";
import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  Check,
  CircleHelp,
  Keyboard,
  RefreshCw,
  Trophy,
} from "lucide-react";
import HoverWeightText from "@/components/HoverWeightText";
import { robotoFlex } from "@/lib/fonts";

const sections = ["overview", "experience", "technology", "contribute"];

const features = [
  {
    icon: Keyboard,
    title: "Play your way",
    text: "Use your physical keyboard or the on-screen keys to make every guess.",
  },
  {
    icon: Check,
    title: "Instant feedback",
    text: "Each tile reveals how close you are with clear, familiar color cues.",
  },
  {
    icon: RefreshCw,
    title: "A new challenge",
    text: "Start another round whenever you are ready for the next word.",
  },
  {
    icon: Trophy,
    title: "Six chances",
    text: "Find the hidden five-letter word before your six attempts run out.",
  },
];

const board = [
  [
    { letter: "S", state: "absent" },
    { letter: "T", state: "present" },
    { letter: "A", state: "absent" },
    { letter: "R", state: "present" },
    { letter: "E", state: "absent" },
  ],
  [
    { letter: "T", state: "present" },
    { letter: "H", state: "absent" },
    { letter: "R", state: "present" },
    { letter: "U", state: "absent" },
    { letter: "M", state: "absent" },
  ],
  [
    { letter: "F", state: "absent" },
    { letter: "R", state: "present" },
    { letter: "O", state: "present" },
    { letter: "N", state: "absent" },
    { letter: "T", state: "correct" },
  ],
  [
    { letter: "R", state: "correct" },
    { letter: "O", state: "correct" },
    { letter: "B", state: "correct" },
    { letter: "O", state: "correct" },
    { letter: "T", state: "correct" },
  ],
  Array.from({ length: 5 }, () => ({ letter: "", state: "empty" })),
  Array.from({ length: 5 }, () => ({ letter: "", state: "empty" })),
];

const tileStyles: Record<string, string> = {
  correct: "border-[#538d4e] bg-[#538d4e]",
  present: "border-[#b59f3b] bg-[#b59f3b]",
  absent: "border-[#3a3a3c] bg-[#3a3a3c]",
  empty: "border-white/15 bg-transparent",
};

export default function WordleClonePage() {
  const [active, setActive] = useState("overview");

  useEffect(() => {
    const onScroll = () => {
      const current = sections
        .slice()
        .reverse()
        .find(
          (id) =>
            (document.getElementById(id)?.getBoundingClientRect().top ?? 999) <=
            190
        );

      if (current) setActive(current);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Head>
        <title>Wordle Clone — Find the word</title>
        <meta
          name="description"
          content="A modern Wordle Clone built for quick, satisfying word puzzles."
        />
      </Head>

      <div className="min-h-screen overflow-x-hidden bg-[#0a0a0a] text-white selection:bg-[#b59f3b] selection:text-black">
        <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0a0a0a]/90 backdrop-blur-md">
  <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
    <a
      href="#overview"
      className="group flex items-center text-lg font-black uppercase tracking-[-0.08em]"
    >
     <span>WORDLE</span>
            <span className="inline-block max-w-[8px] overflow-hidden text-[#b59f3b] transition-all duration-300 group-hover:max-w-0">
                .
            </span>
            <span className="inline-block max-w-0 overflow-hidden whitespace-nowrap transition-all duration-[400ms] ease-in-out group-hover:max-w-[78px]">
                <span className="text-white"> — </span>
                <span className="text-white">BY </span>
            </span>
            <span className="text-[#b59f3b]">A</span>
            <span className="inline-block max-w-0 overflow-hidden whitespace-nowrap text-white transition-all duration-[400ms] ease-in-out group-hover:max-w-[42px]">
                MAR 
            </span>
            <span className="text-[#b59f3b]">E</span>
            <span className="inline-block max-w-0 overflow-hidden whitespace-nowrap text-white transition-all duration-[400ms] ease-in-out group-hover:max-w-[45px]">
                MINI
            </span>
    </a>

    <div className="flex items-center gap-5">
      <a
        href="/"
        className="hidden text-xs font-semibold uppercase tracking-[0.15em] text-gray-400 transition-colors hover:text-white sm:block"
      >
        Back home
      </a>

      <a
        href="https://github.com/amarua05/wordle"
        target="_blank"
        rel="noreferrer"
        className="hidden text-xs font-semibold uppercase tracking-[0.15em] text-gray-400 transition-colors hover:text-white sm:block"
      >
        View source <ArrowUpRight className="ml-1 inline h-3.5 w-3.5" />
      </a>
    </div>
  </div>
</header>

        <nav className="fixed left-0 right-0 top-20 z-40 border-b border-white/5 bg-[#0a0a0a]/90 backdrop-blur-md">
          <div className="mx-auto flex max-w-7xl items-center gap-8 overflow-x-auto px-6 py-4 lg:px-10">
            {sections.map((id) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className={`whitespace-nowrap text-xs uppercase tracking-[0.15em] transition-colors ${
                  active === id
                    ? "font-semibold text-[#b59f3b]"
                    : "text-gray-500 hover:text-white"
                }`}
              >
                {id}
              </button>
            ))}
          </div>
        </nav>

        <main>
          <section
            id="overview"
            className="mx-auto max-w-7xl px-6 pb-24 pt-52 lg:px-10 lg:pt-56"
          >
            <p className="mb-6 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[#b59f3b]">
              A daily word challenge
            </p>

            <div className="grid items-end gap-14 lg:grid-cols-[1.1fr_.9fr]">
              <div>
                <h1 className="max-w-4xl text-6xl font-black leading-[0.88] tracking-[-0.07em] sm:text-8xl">
                  Find the <HoverWeightText text="word." className="text-[#b59f3b]" fontClassName={robotoFlex.className}></HoverWeightText>
                  <br />
                  Own the day.
                </h1>

                <p className="mt-8 max-w-xl text-lg font-light leading-8 text-gray-400">
                  A focused, satisfying word game where every guess brings you
                  closer. Decode the clues and solve the five-letter puzzle in
                  six tries.
                </p>

                <div className="mt-10 flex flex-wrap gap-4">
                  <a
                    href="https://wordle.amaremini.com"
                    target="_blank"
                    className="border border-[#b59f3b] bg-[#b59f3b] px-6 py-3.5 text-xs font-semibold uppercase tracking-widest text-black transition-all hover:bg-transparent hover:text-[#b59f3b]"
                  >
                    Play Wordle <ArrowUpRight className="ml-1 inline h-4 w-4" />
                  </a>

                  <button
                    onClick={() => scrollTo("experience")}
                    className="border border-white/20 px-6 py-3.5 text-xs font-semibold uppercase tracking-widest transition-all hover:border-white"
                  >
                    How it works
                  </button>
                </div>
              </div>

              <div
                id="play"
                className="relative mx-auto w-full max-w-md overflow-hidden rounded-lg border border-white/10 bg-[#151515] p-6 shadow-2xl shadow-black/40"
              >
                <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-4">
                  <p className="text-sm font-bold tracking-tight">WORDLE CLONE</p>
                  <CircleHelp className="h-4 w-4 text-gray-500" />
                </div>

                <div className="mx-auto grid max-w-[300px] gap-1.5">
                  {board.map((row, rowIndex) => (
                    <div key={rowIndex} className="grid grid-cols-5 gap-1.5">
                      {row.map((tile, index) => (
                        <div
                          key={`${rowIndex}-${index}`}
                          className={`grid aspect-square place-items-center border-2 text-xl font-bold uppercase sm:text-2xl ${tileStyles[tile.state]}`}
                        >
                          {tile.letter}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>

                <p className="mt-6 text-center text-xs text-gray-500">
                  Guess the hidden five-letter word.
                </p>
              </div>
            </div>
          </section>

          <section id="experience" className="border-y border-white/5 bg-[#111]">
            <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
              <p className="mb-2 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[#b59f3b]">
                Simple by design
              </p>
              <h2 className="mb-14 text-5xl font-black tracking-[-0.05em] md:text-6xl">
                Five letters. Endless possibility.
              </h2>

              <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
                {features.map(({ icon: Icon, title, text }) => (
                  <article key={title} className="group">
                    <div className="mb-6 grid h-11 w-11 place-items-center rounded-md border border-white/5 bg-[#1c1c1c] transition-colors group-hover:border-[#b59f3b]">
                      <Icon className="h-5 w-5 text-[#b59f3b]" />
                    </div>
                    <h3 className="font-semibold">{title}</h3>
                    <p className="mt-3 text-sm font-light leading-6 text-gray-400">
                      {text}
                    </p>
                  </article>
                ))}
              </div>

              <div className="mt-20 grid overflow-hidden rounded-lg border border-white/10 bg-[#1c1c1c] md:grid-cols-[.8fr_1.2fr]">
                <div className="flex min-h-[280px] flex-col justify-end bg-gradient-to-br from-[#25200c] to-[#121213] p-8">
                  <p className="text-sm text-[#b59f3b]/80">One clue at a time</p>
                  <p className="mt-2 max-w-sm text-3xl font-medium leading-tight">
                    Every letter tells part of the story.
                  </p>
                </div>

                <div className="flex min-h-[280px] items-center justify-center p-8">
                  <div className="grid max-w-sm grid-cols-3 gap-3 text-center text-sm">
                    <div className="rounded-md bg-[#538d4e] p-5 font-semibold">
                      Correct
                    </div>
                    <div className="rounded-md bg-[#b59f3b] p-5 font-semibold text-black">
                      Present
                    </div>
                    <div className="rounded-md bg-[#3a3a3c] p-5 font-semibold">
                      Missed
                    </div>
                    <p className="col-span-3 mt-2 font-light leading-6 text-gray-400">
                      Green means the letter is exactly right. Gold means it
                      belongs somewhere else. Gray means try another letter.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section
            id="technology"
            className="mx-auto max-w-7xl px-6 py-24 lg:px-10"
          >
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <p className="mb-2 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[#b59f3b]">
                  The foundation
                </p>
                <h2 className="text-5xl font-black tracking-[-0.05em] md:text-6xl">
                  Lightweight game.
                  <br />
                  Lasting challenge.
                </h2>
              </div>

              <div>
                <p className="font-light leading-8 text-gray-400">
                  The Wordle Clone is built to stay out of the way: quick to
                  load, easy to understand, and ready whenever you want a fresh
                  puzzle. A local word bank powers each new round, while
                  responsive controls make it comfortable on any screen.
                </p>

                <div className="mt-8 flex flex-wrap gap-2">
                  {["HTML", "CSS", "JavaScript", "Word Bank", "Dictionary API"].map(
                    (item) => (
                      <span
                        key={item}
                        className="border border-white/10 bg-[#1c1c1c] px-4 py-2 text-sm text-gray-300 transition-colors hover:border-[#b59f3b] hover:text-white"
                      >
                        {item}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
          </section>

          <section
            id="contribute"
            className="mx-6 mb-10 rounded-lg border border-white/5 bg-[#1c1c1c] px-6 py-20 lg:mx-auto lg:max-w-7xl lg:px-16"
          >
            <p className="mb-2 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[#b59f3b]">
              Open to everyone
            </p>
            <h2 className="mb-6 max-w-2xl text-4xl font-black tracking-[-0.05em] sm:text-6xl">
              Make the next guess count.
            </h2>
            <p className="max-w-xl font-light leading-7 text-gray-400">
              Fork the project, add an idea, or build a new game mode. The
              Wordle Clone is a small project made for curious players and
              contributors alike.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="https://github.com/amarua05/wordle"
                target="_blank"
                rel="noreferrer"
                className="border border-[#b59f3b] bg-[#b59f3b] px-6 py-3.5 text-xs font-semibold uppercase tracking-widest text-black transition-all hover:bg-transparent hover:text-[#b59f3b]"
              >
                View on GitHub <ArrowUpRight className="ml-1 inline h-4 w-4" />
              </a>
              <a
                href="https://wordle.amaremini.com"
                target="_blank"
                className="border border-white/20 px-6 py-3.5 text-xs font-semibold uppercase tracking-widest transition-all hover:border-white"
              >
                Play a round
              </a>
            </div>
          </section>
        </main>

        <footer className="mx-auto flex max-w-7xl flex-col justify-between gap-2 border-t border-white/5 px-6 py-8 text-xs text-gray-600 sm:flex-row lg:px-10">
          <span>©{new Date().getFullYear()} — Wordle Clone by Amar Emini.</span>
          <span>Made for word lovers.</span>
        </footer>
      </div>
    </>
  );
}