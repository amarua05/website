import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ArrowUpRight, Heart, Search, ShieldCheck, Sparkles, Users } from "lucide-react";
import Nav from "@/components/Nav";
import { bebas } from "@/lib/fonts";

const features = [
	{ icon: ShieldCheck, title: "User authentication", text: "Secure sign-up, login, and logout for a comfortable community." },
	{ icon: Sparkles, title: "Create and share", text: "Create, edit, and delete posts through a simple, intuitive interface." },
	{ icon: Heart, title: "Interact in real time", text: "Like, save, and comment on posts while conversations stay dynamic." },
	{ icon: Search, title: "Find your people", text: "Search users and filter posts to discover content that matters." },
];
const technologies = ["React", "TypeScript", "Vite", "Tailwind CSS", "Appwrite DB", "React Query", "React Router"];
const sections = ["overview", "features", "technology", "contribute"];

export default function AmarGram() {
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
				<title>AmarGram — Connect, share, belong</title>
				<meta name="description" content="An about page for AmarGram, a modern social media web application." />
			</Head>
			<div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-[#e8502a] selection:text-white">
				<Nav />

				{/* Sub-nav for this page's sections */}
				<div className="fixed top-20 left-0 right-0 z-40 border-b border-white/5 bg-[#0a0a0a]/90 backdrop-blur-md">
					<div className="mx-auto flex max-w-7xl items-center gap-8 overflow-x-auto px-6 py-4 lg:px-10">
						{sections.map((id) => (
							<button
								key={id}
								onClick={() => scrollTo(id)}
								className={`whitespace-nowrap text-xs uppercase tracking-[0.15em] transition-colors ${
									active === id 
									? "text-[#e8502a] font-semibold" 
									: "text-gray-500 hover:text-white"
								}`}
							>
								{id[0].toUpperCase() + id.slice(1)}
							</button>
						))}
					</div>
				</div>

				<main>
					{/* OVERVIEW */}
					<section id="overview" className="mx-auto max-w-7xl px-6 pb-24 pt-52 lg:px-10 lg:pt-56">
						<p className="mb-6 text-[0.65rem] tracking-[0.2em] uppercase text-[#e8502a] font-semibold">Social, made human</p>
						<h1 className={`max-w-5xl text-6xl leading-[.95] tracking-tight sm:text-8xl ${bebas.className}`}>
							A place to <span className="text-[#e8502a]">share</span>
							<br />
							what matters.
						</h1>
						<p className="mt-8 max-w-xl text-lg leading-8 text-gray-400 font-light">
							AmarGram is a modern social space for real connections, creative expression, and the small moments worth sharing.
						</p>
						<div className="mt-10 flex flex-wrap gap-4">
							
							<a
								href="https://social.amaremini.com/"
								target="_blank"
								rel="noreferrer"
								className="rounded-sm bg-[#e8502a] px-6 py-3.5 text-xs font-semibold uppercase tracking-widest text-white transition-all hover:bg-transparent hover:text-[#e8502a] border border-[#e8502a]"
                            >
								Explore amargram <ArrowUpRight className="ml-1 inline h-4 w-4" />
							</a>
							<button
								onClick={() => scrollTo("features")}
								className="rounded-sm border border-white/20 px-6 py-3.5 text-xs font-semibold uppercase tracking-widest transition-all hover:border-white"
							>
								See how it works
							</button>
						</div>
						<div className="mt-20 grid grid-cols-12 gap-4">
							<div className="col-span-12 flex min-h-[280px] items-end overflow-hidden rounded-lg bg-gradient-to-br from-[#1a0a05] to-[#3d1409] p-8 sm:col-span-7">
								<div>
									<p className="text-sm text-[#e8502a]/80">Designed for belonging</p>
									<p className="mt-2 max-w-sm text-3xl font-medium leading-tight text-white">The internet feels better when people come first.</p>
								</div>
							</div>
								<div className="col-span-12 min-h-[280px] overflow-hidden rounded-lg border border-white/10 bg-[#1c1c1c] sm:col-span-5">
								<Image
									src="/thumbnails/amargram-thumb2.png"
									alt="AmarGram product preview"
									width={800}
									height={280}
									className="h-full min-h-[280px] w-full object-cover"
								/>
								</div>
						</div>
					</section>

					{/* FEATURES */}
					<section id="features" className="border-y border-white/5 bg-[#111]">
						<div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
							<p className="text-[0.65rem] tracking-[0.2em] uppercase text-[#e8502a] font-semibold mb-2">Everything in one place</p>
							<h2 className="text-5xl md:text-6xl font-black mb-14">Built for the way you connect.</h2>
							<div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
								{features.map(({ icon: Icon, title, text }) => (
									<article key={title} className="group">
										<div className="mb-6 grid h-11 w-11 place-items-center rounded-md bg-[#1c1c1c] border border-white/5 transition-colors group-hover:border-[#e8502a]">
											<Icon className="h-5 w-5 text-[#e8502a]" />
										</div>
										<h3 className="font-semibold">{title}</h3>
										<p className="mt-3 text-sm leading-6 text-gray-400 font-light">{text}</p>
									</article>
								))}
							</div>
							<div className="mt-20 min-h-[280px] overflow-hidden rounded-lg border border-white/10 bg-[#1c1c1c]">
								<div className="col-span-12 min-h-[280px] overflow-hidden rounded-lg border border-white/10 bg-[#1c1c1c] sm:col-span-5">
									<Image
										src="/thumbnails/amargram-thumb.png"
										alt="AmarGram product preview"
										width={800}
										height={280}
										className="h-full min-h-[280px] w-full object-cover"
									/>
								</div>
							</div>
						</div>
					</section>

					{/* TECHNOLOGY */}
					<section id="technology" className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
						<div className="grid gap-12 lg:grid-cols-2">
							<div>
								<p className="text-[0.65rem] tracking-[0.2em] uppercase text-[#e8502a] font-semibold mb-2">The foundation</p>
								<h2 className="text-5xl md:text-6xl font-black">
									Simple technology.
									<br />
									Solid experience.
								</h2>
							</div>
							<div>
								<p className="leading-8 text-gray-400 font-light">
									A fast React and TypeScript frontend meets Appwrite services for authentication, data, storage, and real-time interactions.
								</p>
								<div className="mt-8 flex flex-wrap gap-2">
									{technologies.map((item) => (
										<span
											key={item}
											className="rounded-sm border border-white/10 bg-[#1c1c1c] px-4 py-2 text-sm text-gray-300 transition-colors hover:border-[#e8502a] hover:text-white"
										>
											{item}
										</span>
									))}
								</div>
							</div>
						</div>
					</section>

					{/* CONTRIBUTE */}
					<section id="contribute" className="mx-6 mb-10 rounded-lg bg-[#1c1c1c] border border-white/5 px-6 py-20 lg:mx-auto lg:max-w-7xl lg:px-16">
						<p className="text-[0.65rem] tracking-[0.2em] uppercase text-[#e8502a] font-semibold mb-2">Open to everyone</p>
						<h2 className="max-w-2xl text-4xl font-black sm:text-6xl mb-6">Help shape what comes next.</h2>
						<p className="max-w-xl leading-7 text-gray-400 font-light">
							Fork the project, build something useful, and join the conversation. Contributions to AmarGram are welcome.
						</p>
						<div className="mt-8 flex flex-wrap gap-4">
							
							<a
								href="https://github.com/amarua05/amargram"
								target="_blank"
								rel="noreferrer"
								className="rounded-sm bg-[#e8502a] px-6 py-3.5 text-xs font-semibold uppercase tracking-widest text-white transition-all hover:bg-transparent hover:text-[#e8502a] border border-[#e8502a]"
                            >
								View on GitHub <ArrowUpRight className="ml-1 inline h-4 w-4" />
							</a>
							
							<a
								href="mailto:hello@amaremini.com"
								className="rounded-sm border border-white/20 px-6 py-3.5 text-xs font-semibold uppercase tracking-widest transition-all hover:border-white">
								Get in touch
							</a>
						</div>
					</section>
				</main>
				<footer className="mx-auto flex max-w-7xl justify-between px-6 py-8 text-xs text-gray-600 lg:px-10 border-t border-white/5">
					<span>©{new Date().getFullYear()} - AmarGram by Amar Emini.</span>
					<span>Made with {"<3"} for meaningful connections.</span>
				</footer>
			</div>
		</>
	);
}