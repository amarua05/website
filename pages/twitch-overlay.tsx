import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  Eye,
  Layers3,
  MessageSquareText,
  Settings2,
  SlidersHorizontal,
  Sparkles,
  X,
  Crown,
  Flame,
  Pin,
} from "lucide-react";

const sections = ["overview", "features", "gallery", "technology", "demo"];

const features = [
  {
    icon: MessageSquareText,
    title: "Chat that belongs on stream",
    text: "Turn live chat into a clean, readable part of the broadcast without hiding the action.",
  },
  {
    icon: SlidersHorizontal,
    title: "Control every detail",
    text: "Tune opacity, size, effects, filters, moderation rules, and more from one focused panel.",
  },
  {
    icon: Layers3,
    title: "Built for your layout",
    text: "Place overlay wherever it makes sense: full chat, corner chat, alerts, or a minimal feed.",
  },
  {
    icon: Eye,
    title: "Made to be seen",
    text: "High-contrast type, smooth motion, and flexible styling keep your community visible.",
  },
];

const technologies = [
  "React",
  "TypeScript",
  "Next.js",
  "Tailwind CSS",
  "Twitch Chat",
  "Real-time Events",
];

export default function TwitchOverlayPage() {
  const [position, setPosition] = useState<"left" | "right">("left");
  const [active, setActive] = useState("overview");
  const [settingsOpen, setSettingsOpen] = useState(true);
  const [backgroundOpacity, setBackgroundOpacity] = useState(72);
  const [letterOpacity, setLetterOpacity] = useState(100);
  const [fontSize, setFontSize] = useState(18);
  const [fontColor, setFontColor] = useState<"white" | "black">("white");
  const [textShadow, setTextShadow] = useState(true);
  const [hideAll, setHideAll] = useState(false);
  const [hideUsernameIcons, setHideUsernameIcons] = useState(false);
  const [hideTopGifters, setHideTopGifters] = useState(false);
  const [hidePinnedMessage, setHidePinnedMessage] = useState(false);
  const [hideHypeTrain, setHideHypeTrain] = useState(false);
  const handleHideAll = (hidden: boolean) => {
    setHideUsernameIcons(hidden);
    setHideTopGifters(hidden);
    setHidePinnedMessage(hidden);
    setHideHypeTrain(hidden);
  };
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
  const chatMessages = [
    { user: "VladOS_MP", color: "#46e35e", text: "NO WAYYY 😭", badge: "VIP" },
    {
      user: "emmah_88",
      color: "#d95cff",
      text: "she knows exactly what she did",
      badge: "SUB",
    },
    {
      user: "mi273",
      color: "#f4c542",
      text: "Kai is actually finished 💀",
      badge: "MOD",
    },
    {
      user: "Coastal_nomad",
      color: "#ff6b58",
      text: "this stream is too funny",
      badge: "SUB",
    },
    {
      user: "titanium_gelatin",
      color: "#ff4d4d",
      text: "W CLAPBACK",
      badge: "VIP",
    },
    {
      user: "Str33tlevel",
      color: "#a970ff",
      text: "chat is going crazy right now",
      badge: "SUB",
    },
    {
      user: "zackplym0n",
      color: "#4cc9f0",
      text: "nah this is cinema",
      badge: "MOD",
    },
  ];

  return (
    <>
      <Head>
        <title>Stream overlay — Make chat part of the show</title>
        <meta
          name="description"
          content="Custom Twitch chat overlay built to make every stream feel like yours."
        />
      </Head>

      <div className="min-h-screen overflow-x-hidden bg-[#0b0a0d] text-white selection:bg-[#9147ff] selection:text-white">
        <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0b0a0d]/90 backdrop-blur-md">
  <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
    <div className="flex items-center gap-3">
      <span className="text-lg font-black uppercase tracking-[-0.08em]">
        STREAM<span className="text-[#9147ff]">.</span>OVERLAY
      </span>

      <span className="group/bubble relative">
        <span className="flex h-8 w-8 items-center overflow-hidden border border-[#9147ff] bg-transparent px-2 text-xs font-black uppercase tracking-[-0.06em] transition-[width] duration-[450ms] ease-in-out group-hover/bubble:w-24">
          <span className="shrink-0 text-[#9147ff]">A</span>

          <span className="inline-block max-w-0 overflow-hidden whitespace-nowrap text-white transition-all duration-[450ms] ease-in-out group-hover/bubble:max-w-[32px]">
            MAR&nbsp;
          </span>

          <span className="shrink-0 text-[#9147ff]">E</span>

          <span className="inline-block max-w-0 overflow-hidden whitespace-nowrap text-white transition-all duration-[450ms] ease-in-out group-hover/bubble:max-w-[34px]">
            MINI
          </span>
        </span>

        {/* Hollow chat-bubble tail */}
        <span className="absolute -bottom-[5px] left-2 h-2.5 w-2.5 rotate-45 border-b border-r border-[#9147ff] bg-[#0b0a0d]" />
      </span>
    </div>

    <div className="flex items-center gap-5">
      <a
        href="/"
        className="hidden text-xs font-semibold uppercase tracking-[0.15em] text-gray-400 transition-colors hover:text-white sm:block"
      >
        Back home
      </a>

      <a
        href="https://github.com/amarua05/twitch-chat-overlay"
        target="_blank"
        rel="noreferrer"
        className="hidden text-xs font-semibold uppercase tracking-[0.15em] text-gray-400 transition-colors hover:text-white sm:block"
      >
        View source <ArrowUpRight className="ml-1 inline h-3.5 w-3.5" />
      </a>
    </div>
  </div>
</header>

        <nav className="fixed inset-x-0 top-20 z-40 border-b border-white/5 bg-[#0b0a0d]/90 backdrop-blur-md">
          <div className="mx-auto flex max-w-7xl items-center gap-8 overflow-x-auto px-6 py-4 lg:px-10">
            {sections.map((id) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className={`whitespace-nowrap text-xs uppercase tracking-[0.15em] transition-colors ${
                  active === id
                    ? "font-semibold text-[#9147ff]"
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
            <p className="mb-6 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[#9147ff]">
              Built for live moments
            </p>

            <h1 className="max-w-5xl text-6xl font-black leading-[0.88] tracking-[-0.07em] sm:text-8xl">
              Make chat part
              <br />
              of the <span className="text-[#9147ff]">show.</span>
            </h1>

            <p className="mt-8 max-w-xl text-lg font-light leading-8 text-gray-400">
              Custom Twitch overlay that turn your community into a living layer
              of every broadcast. Clean, expressive, and fully yours.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#gallery"
                className="border border-[#9147ff] bg-[#9147ff] px-6 py-3.5 text-xs font-semibold uppercase tracking-widest text-white transition-all hover:bg-transparent hover:text-[#a970ff]"
              >
                See the overlay <ArrowUpRight className="ml-1 inline h-4 w-4" />
              </a>

              <button
                onClick={() => scrollTo("features")}
                className="border border-white/20 px-6 py-3.5 text-xs font-semibold uppercase tracking-widest transition-all hover:border-white"
              >
                How it works
              </button>
            </div>

            <div className="relative mt-20 overflow-hidden rounded-lg border border-white/10 bg-[#17131e]">
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#0b0a0d]/60 via-transparent to-transparent" />

              <Image
                src="/thumbnails/twitch1.png"
                alt="Twitch stream with chat interface"
                width={1920}
                height={870}
                priority
                className="min-h-[280px] w-full object-cover object-center"
              />

              <div className="absolute bottom-0 left-0 z-20 p-6 sm:p-10">
                <p className="text-sm text-[#c5a7ff]">Live, but never noisy</p>
                <p className="mt-2 max-w-md text-2xl font-medium leading-tight sm:text-3xl">
                  Keep the stream in focus while letting the community speak.
                </p>
              </div>
            </div>
          </section>

          <section
            id="features"
            className="border-y border-white/5 bg-[#111015]"
          >
            <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
              <p className="mb-2 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[#9147ff]">
                More than a chat box
              </p>

              <h2 className="mb-14 text-5xl font-black tracking-[-0.05em] md:text-6xl">
                Designed around your community.
              </h2>

              <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
                {features.map(({ icon: Icon, title, text }) => (
                  <article key={title} className="group">
                    <div className="mb-6 grid h-11 w-11 place-items-center rounded-md border border-white/5 bg-[#1d1924] transition-colors group-hover:border-[#9147ff]">
                      <Icon className="h-5 w-5 text-[#a970ff]" />
                    </div>

                    <h3 className="font-semibold">{title}</h3>
                    <p className="mt-3 text-sm font-light leading-6 text-gray-400">
                      {text}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section
            id="gallery"
            className="mx-auto max-w-7xl px-6 py-24 lg:px-10"
          >
            <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="mb-2 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[#9147ff]">
                  Designed in real time
                </p>
                <h2 className="text-5xl font-black tracking-[-0.05em] md:text-6xl">
                  One stream.
                  <br />
                  Your rules.
                </h2>
              </div>

              <p className="max-w-sm font-light leading-7 text-gray-400">
                From a fully featured stream chat to a minimal overlay that
                lives over gameplay, every layout starts with the same goal:
                make your broadcast unmistakably yours.
              </p>
            </div>

            <div className="grid gap-4 lg:grid-cols-12">
              <div className="group relative min-h-[420px] overflow-hidden rounded-lg border border-white/10 bg-[#1a1720] lg:col-span-8">
                <Image
                  src="/thumbnails/twitch2.png"
                  alt="Minimal Twitch chat overlay on a live stream"
                  width={1200}
                  height={600}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.02]"
                />

                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-7">
                  <p className="text-sm text-[#c5a7ff]">Minimal overlay</p>
                  <p className="mt-1 text-2xl font-medium">
                    The chat stays close. The game stays visible.
                  </p>
                </div>
              </div>

              <div className="group relative min-h-[420px] overflow-hidden rounded-lg border border-white/10 bg-[#1a1720] lg:col-span-4">
                <Image
                  src="/thumbnails/twitch3.png"
                  alt="Overlay customization controls"
                  width={500}
                  height={600}
                  className="h-full w-full object-cover object-left-top transition duration-700 group-hover:scale-[1.03]"
                />

                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent p-7">
                  <p className="text-sm text-[#c5a7ff]">Full control</p>
                  <p className="mt-1 text-xl font-medium">
                    Personalize every layer.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section
            id="technology"
            className="border-y border-white/5 bg-[#111015]"
          >
            <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-2 lg:px-10">
              <div>
                <p className="mb-2 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[#9147ff]">
                  The foundation
                </p>

                <h2 className="text-5xl font-black tracking-[-0.05em] md:text-6xl">
                  Fast setup.
                  <br />
                  Zero distractions.
                </h2>
              </div>

              <div>
                <p className="font-light leading-8 text-gray-400">
                  The overlay experience is made for live performance:
                  lightweight, responsive, and ready to adapt to the rhythm of
                  your stream. Style it once, connect it to your broadcast, then
                  let the conversation do the rest.
                </p>

                <div className="mt-8 flex flex-wrap gap-2">
                  {technologies.map((item) => (
                    <span
                      key={item}
                      className="border border-white/10 bg-[#1d1924] px-4 py-2 text-sm text-gray-300 transition-colors hover:border-[#9147ff] hover:text-white"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section id="demo" className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
            <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="mb-2 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[#9147ff]">
                  Live preview
                </p>
                <h2 className="text-5xl font-black tracking-[-0.05em] md:text-6xl">
                  Try it out.
                </h2>
              </div>

              <p className="max-w-sm font-light leading-7 text-gray-400">
                A fully styled chat overlay preview. Open the controls and see
                each setting update instantly.
              </p>
            </div>

            <div className="relative aspect-video overflow-hidden rounded-lg border border-white/10 bg-[#17131e] shadow-2xl shadow-black/40">
              <Image
                src="/thumbnails/kai-cenat-stream.png"
                alt="Kai Cenat stream preview"
                fill
                priority
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/10" />

              <button
                type="button"
                onClick={() => setSettingsOpen((open) => !open)}
                className="absolute right-4 top-4 z-30 grid h-10 w-10 place-items-center rounded-md border border-white/10 bg-black/60 text-white backdrop-blur-md transition hover:border-[#9147ff] hover:bg-[#9147ff]"
                aria-label="Toggle chat settings"
              >
                {settingsOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Settings2 className="h-5 w-5" />
                )}
              </button>

              <div
                className={`absolute bottom-0 top-0 z-20 flex w-[min(44%,400px)] flex-col p-4 sm:p-6 ${
                  position === "left" ? "left-0" : "right-0"
                }`}
                style={{
                  background: `linear-gradient(to top, rgba(8, 7, 10, ${
                    backgroundOpacity / 100
                  }), rgba(8, 7, 10, ${Math.max(
                    backgroundOpacity / 100 - 0.48,
                    0
                  )}))`,
                }}
              >
                {!hideAll && (
                  <>
                    <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.16em] text-white/60 sm:text-xs">
                      Chat with the stream
                    </p>

                    {!hidePinnedMessage && (
                      <div className="mb-3 flex gap-2 rounded-md border border-[#9147ff]/40 bg-[#9147ff]/15 p-2 text-xs text-white backdrop-blur-sm">
                        <Pin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#c5a7ff]" />
                        <p>
                          <span className="font-bold text-[#c5a7ff]">
                            Pinned:
                          </span>{" "}
                          Be kind, keep it fun, and enjoy the stream.
                        </p>
                      </div>
                    )}

                    {!hideTopGifters && (
                      <div className="mb-3 flex items-center gap-2 text-xs text-white/90">
                        <Crown className="h-4 w-4 text-[#f4c542]" />
                        <span>
                          Top gifter:{" "}
                          <span className="font-bold text-[#f4c542]">
                            kaiFan_01
                          </span>
                        </span>
                      </div>
                    )}

                    {!hideHypeTrain && (
                      <div className="mb-4 rounded-md border border-pink-400/30 bg-pink-500/15 p-2 text-xs text-white backdrop-blur-sm">
                        <div className="flex items-center justify-between">
                          <span className="flex items-center gap-1.5 font-bold text-pink-300">
                            <Flame className="h-3.5 w-3.5" />
                            Hype Train
                          </span>
                          <span className="text-white/70">Level 4</span>
                        </div>
                        <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-black/40">
                          <div className="h-full w-[72%] rounded-full bg-gradient-to-r from-pink-500 to-[#9147ff]" />
                        </div>
                      </div>
                    )}

                    <div className="mt-auto max-h-full overflow-hidden">
                      {chatMessages.map((message) => (
                        <p
                          key={message.user}
                          className="mt-2 font-semibold leading-[1.22]"
                          style={{
                            fontSize: `${fontSize}px`,
                            opacity: letterOpacity / 100,
                            color: fontColor,
                            textShadow: textShadow
                              ? "0 2px 6px rgba(0, 0, 0, 0.9)"
                              : "none",
                          }}
                        >
                          {!hideUsernameIcons && (
                            <span className="mr-1 inline-flex rounded bg-[#9147ff] px-1 py-px align-[2px] text-[8px] font-black tracking-wide text-white">
                              {message.badge}
                            </span>
                          )}

                          <span style={{ color: message.color }}>
                            {message.user}
                          </span>
                          <span>: {message.text}</span>
                        </p>
                      ))}
                    </div>
                  </>
                )}
              </div>

              {settingsOpen && (
                <aside className="absolute right-4 top-16 z-40 max-h-[calc(100%-5rem)] w-[min(300px,calc(100%-2rem))] overflow-y-auto rounded-lg border border-white/10 bg-[#16131b]/95 p-5 text-white shadow-2xl backdrop-blur-xl">
                  <div className="mb-5">
                    <p className="text-sm font-bold">Chat settings</p>
                    <p className="mt-1 text-xs text-gray-400">
                      Customize the live overlay preview.
                    </p>
                  </div>

                  <label className="mb-5 block">
                    <span className="mb-2 flex justify-between text-xs font-medium text-gray-300">
                      Background opacity
                      <span className="text-[#a970ff]">
                        {backgroundOpacity}%
                      </span>
                    </span>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={backgroundOpacity}
                      onChange={(event) =>
                        setBackgroundOpacity(Number(event.target.value))
                      }
                      className="h-1.5 w-full cursor-pointer accent-[#9147ff]"
                    />
                  </label>

                  <label className="mb-5 block">
                    <span className="mb-2 flex justify-between text-xs font-medium text-gray-300">
                      Letters opacity
                      <span className="text-[#a970ff]">{letterOpacity}%</span>
                    </span>
                    <input
                      type="range"
                      min="20"
                      max="100"
                      value={letterOpacity}
                      onChange={(event) =>
                        setLetterOpacity(Number(event.target.value))
                      }
                      className="h-1.5 w-full cursor-pointer accent-[#9147ff]"
                    />
                  </label>

                  <label className="mb-5 block">
                    <span className="mb-2 flex justify-between text-xs font-medium text-gray-300">
                      Font size{" "}
                      <span className="text-[#a970ff]">{fontSize}px</span>
                    </span>
                    <input
                      type="range"
                      min="12"
                      max="28"
                      value={fontSize}
                      onChange={(event) =>
                        setFontSize(Number(event.target.value))
                      }
                      className="h-1.5 w-full cursor-pointer accent-[#9147ff]"
                    />
                  </label>

                  <div className="mb-5">
                    <p className="mb-2 text-xs font-medium text-gray-300">
                      Message color
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      {(["white", "black"] as const).map((color) => (
                        <button
                          key={color}
                          type="button"
                          onClick={() => setFontColor(color)}
                          className={`rounded border px-3 py-2 text-xs font-semibold capitalize transition ${
                            fontColor === color
                              ? "border-[#9147ff] bg-[#9147ff] text-white"
                              : "border-white/10 bg-white/5 text-gray-400 hover:text-white"
                          }`}
                        >
                          {color}
                        </button>
                      ))}
                    </div>
                    <p className="mt-2 text-[10px] text-gray-500">
                      Username colors stay unchanged.
                    </p>
                  </div>

                  <div className="mb-5">
                    <p className="mb-2 text-xs font-medium text-gray-300">
                      Chat position
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      {(["left", "right"] as const).map((side) => (
                        <button
                          key={side}
                          type="button"
                          onClick={() => setPosition(side)}
                          className={`rounded border px-3 py-2 text-xs font-semibold capitalize transition ${
                            position === side
                              ? "border-[#9147ff] bg-[#9147ff] text-white"
                              : "border-white/10 bg-white/5 text-gray-400 hover:text-white"
                          }`}
                        >
                          {side}
                        </button>
                      ))}
                    </div>
                  </div>
                  <label className="flex cursor-pointer items-center justify-between text-xs font-medium text-gray-300">
                    Hide all chat
                    <input
                      type="checkbox"
                      checked={hideAll}
                      onChange={(event) => handleHideAll(event.target.checked)}
                      className="h-4 w-4 accent-[#9147ff]"
                    />
                  </label>
                  <div className="space-y-3 border-t border-white/10 pt-4">
                    {[
                      ["Text shadow", textShadow, setTextShadow],
                      [
                        "Hide Username icons",
                        hideUsernameIcons,
                        setHideUsernameIcons,
                      ],
                      ["Hide Top gifters", hideTopGifters, setHideTopGifters],
                      [
                        "Hide Pinned message",
                        hidePinnedMessage,
                        setHidePinnedMessage,
                      ],
                      ["Hide Hype train", hideHypeTrain, setHideHypeTrain],
                    ].map(([label, checked, setChecked]) => (
                      <label
                        key={label as string}
                        className="flex cursor-pointer items-center justify-between text-xs font-medium text-gray-300"
                      >
                        {label as string}
                        <input
                          type="checkbox"
                          checked={checked as boolean}
                          onChange={(event) =>
                            (
                              setChecked as React.Dispatch<
                                React.SetStateAction<boolean>
                              >
                            )(event.target.checked)
                          }
                          className="h-4 w-4 accent-[#9147ff]"
                        />
                      </label>
                    ))}
                  </div>
                </aside>
              )}
            </div>
          </section>
        </main>

        <footer className="mx-auto flex max-w-7xl flex-col justify-between gap-2 border-t border-white/5 px-6 py-8 text-xs text-gray-600 sm:flex-row lg:px-10">
          <span>
            ©{new Date().getFullYear()} — Stream Overlay by Amar Emini.
          </span>
          <span>Built with {"<3"} for chat.</span>
        </footer>
      </div>
    </>
  );
}