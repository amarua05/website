"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { projects } from "@/lib/projects";
import Nav2 from "@/components/Nav2";
import { Bebas_Neue } from "next/font/google";
import { useRouter } from "next/navigation";
import HoverWeightText from "@/components/HoverWeightText";
import { robotoFlex } from "@/lib/fonts";
const bebas = Bebas_Neue({ weight: "400", subsets: ["latin"] });


function useAge(birthIso: string) {
  const [age, setAge] = useState({ years: 0, months: 0, days: 0, hours: 0, minutes: 0, seconds: 0 });
  useEffect(() => {
    const birth = new Date(birthIso);
    const update = () => {
      const now = new Date();
      let years = now.getFullYear() - birth.getFullYear();
      let months = now.getMonth() - birth.getMonth();
      let days = now.getDate() - birth.getDate();
      if (days < 0) { months--; days += new Date(now.getFullYear(), now.getMonth(), 0).getDate(); }
      if (months < 0) { years--; months += 12; }
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const seconds = now.getSeconds();
      setAge({ years, months, days, hours, minutes, seconds });
    };
    update();
    const id = setInterval(update, 250);
    return () => clearInterval(id);
  }, [birthIso]);
  return age;
}

const showcasedProjects = projects.slice(0, 3);

const thumbConfig = [
  { label: "AG", bg: "from-[#1a0a05] to-[#3d1409]", color: "text-[#e8502a]" },
  { label: "PF", bg: "from-[#0a0f1a] to-[#0d2040]", color: "text-[#4a9eff]" },
  { label: "WD", bg: "from-[#0a1205] to-[#142d0a]", color: "text-[#f5c842]" },
];



export default function Page() {
  const router = useRouter();
  const age = useAge("2005-10-05T00:00:00");
  const skillLinks: { [key: string]: string } = {
    "React": "https://react.dev",
    "TypeScript": "https://www.typescriptlang.org/docs",
    "Next.js": "https://nextjs.org/docs",
    "Tailwind CSS": "https://tailwindcss.com/docs",
    "Node.js": "https://nodejs.org/en/docs",
    "Python": "https://docs.python.org/3",
    "FastAPI": "https://fastapi.tiangolo.com",
    "REST APIs": "https://developer.mozilla.org/en-US/docs/Web/HTTP",
    "PostgreSQL": "https://www.postgresql.org/docs",
    "Appwrite": "https://appwrite.io/docs",
    "MongoDB": "https://www.mongodb.com/docs",
    "AWS / GCP": "https://docs.aws.amazon.com",
    "Docker": "https://docs.docker.com",
    "Git / GitHub": "https://docs.github.com",
    "Vite": "https://vitejs.dev/guide",
    "Linux": "https://www.kernel.org/doc/html/latest",
  };


  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen font-sans overflow-x-hidden">

      {/* NAV */}
      <Nav2 />

      {/* HERO */}
      <section id="home" className="min-h-screen flex items-center px-8 md:px-16 pt-20">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          <div>
            <div className="inline-block text-[0.65rem] tracking-[0.2em] uppercase text-[#e8502a] border border-[#e8502a] px-3 py-1 rounded-sm mb-8">
              Full-Stack Developer
            </div>

            <h1 className="text-[18vw] md:text-[8rem] leading-[0.88] tracking-tight mb-8">
  <HoverWeightText text="AMAR" className="block" fontClassName={robotoFlex.className} />
  <br />
  <HoverWeightText text="EMINI" className="block text-[#e8502a]" fontClassName={robotoFlex.className} />
            </h1>
            
            <div className="mb-2">
              <span className="text-[0.65rem] tracking-[0.2em] uppercase text-[#e8502a] mb-2">
                MY AGE
              </span>
            </div>
            <div className="flex items-start mb-8">
              {[
                { val: age.years, label: "years" },
                { val: age.months, label: "months" },
                { val: age.days, label: "days" },
                { val: age.hours, label: "hours" },
                { val: age.minutes, label: "minutes" },
                { val: age.seconds, label: "seconds" },
              ].map((seg, i, arr) => (
                <div key={seg.label} className={`flex flex-col items-center pr-4 mr-4 ${i < arr.length - 1 ? "border-r border-white/10" : ""}`}>
                  <span className="text-3xl font-black text-[#e8502a] leading-none">{seg.val}</span>
                  <span className="text-[0.4rem] tracking-[0.02em] uppercase text-gray-500 mt-1">{seg.label}</span>
                </div>
              ))}
            </div>

            <p className="text-gray-400 font-light leading-relaxed max-w-sm mb-10 text-[0.95rem]">
              Building products from database to deployment — clean code, bold interfaces, real impact.
            </p>

            <div className="flex gap-4 flex-wrap">
              <a href="#projects" className="px-6 py-3 bg-[#e8502a] text-white text-xs font-semibold uppercase tracking-widest rounded-sm hover:bg-transparent hover:text-[#e8502a] border border-[#e8502a] transition-all">
                View Projects
              </a>
              <a href="#contact" className="px-6 py-3 bg-transparent text-white text-xs font-semibold uppercase tracking-widest rounded-sm border border-white/20 hover:border-white transition-all">
                Get in Touch
              </a>
            </div>
          </div>

          {/* Code block */}
          <div className="hidden md:block">
            <div className="bg-[#1c1c1c] border border-white/10 rounded-xl p-6 font-mono text-sm leading-8">
              <div className="text-gray-600 text-xs mb-4 tracking-widest">● ● ●</div>
              <div><span className="text-[#e8502a]">const</span> <span className="text-[#b8c9e8]">developer</span> = {"{"}</div>
              <div>&nbsp;&nbsp;<span className="text-[#f5c842]">name</span>: <span className="text-[#9ec6a3]">'Amar Emini'</span>,</div>
              <div>&nbsp;&nbsp;<span className="text-[#f5c842]">stack</span>: [<span className="text-[#9ec6a3]">'React'</span>, <span className="text-[#9ec6a3]">'Node'</span>, <span className="text-[#9ec6a3]">'SQL'</span>],</div>
              <div>&nbsp;&nbsp;<span className="text-[#f5c842]">focus</span>: <span className="text-[#9ec6a3]">'full-stack'</span>,</div>
              <div>&nbsp;&nbsp;<span className="text-[#f5c842]">available</span>: <span className="text-[#e8502a]">true</span></div>
              <div>{"}"}</div>
              <div className="mt-4 text-gray-500 italic text-xs">// Currently building great things with {"<3"}</div>
              <div>
              <span className="text-[#f5c842]">developer</span>.<span className="text-[#f5c842]">ship</span>()
              <span className="inline-block w-[2px] h-[1em] bg-[#e8502a] ml-[1px] align-middle [animation:blink_1s_steps(1)_infinite]"></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-32 px-8 md:px-16">
        <div className="max-w-7xl mx-auto">
          <p className="text-[0.65rem] tracking-[0.2em] uppercase text-[#e8502a] mb-2">Who I am</p>
          <h2 className="text-5xl md:text-6xl font-black mb-2">About Me</h2>
          <div className="w-12 h-0.5 bg-[#e8502a] mb-14" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="space-y-5 text-gray-400 font-light leading-relaxed text-[0.95rem]">
              <p>I'm a full-stack developer who thrives at the intersection of thoughtful engineering and great user experience. I care about writing code that's readable, systems that scale, and products that people enjoy using.</p>
              <p>Whether it's architecting a backend API, crafting a pixel-perfect UI, or optimizing a slow database query — I'm in my element when solving real problems end-to-end.</p>
              <p>When I'm not coding, I'm probably tinkering with side projects or learning something new.</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { num: "3+", label: "Years of experience" },
                { num: "8+", label: "Technologies mastered" },
                { num: "100%", label: "Passion for code" },
                { num: "∞", label: "Coffee consumed" },
              ].map(s => (
                <div key={s.label} className="bg-[#1c1c1c] border-l-2 border-[#e8502a] border-y border-r border-white/5 rounded-md p-5">
                  <div className="text-4xl font-black text-white leading-none">{s.num}</div>
                  <div className="text-xs text-gray-500 mt-2">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
<section id="projects" className="py-32 px-8 md:px-16 bg-[#111]">
  <div className="max-w-7xl mx-auto">
    <p className="text-[0.65rem] tracking-[0.2em] uppercase text-[#e8502a] mb-2">
      What I've built
    </p>
    <h2 className="text-5xl md:text-6xl font-black mb-2">Projects</h2>
    <div className="w-12 h-0.5 bg-[#e8502a] mb-14" />

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {showcasedProjects.map((project, i) => {
        const hasPage = project.about && project.about !== "#";
        return (
          <div
            key={project.slug}
            onClick={() => {
              if (hasPage) router.push(project.about);
            }}
            role={hasPage ? "link" : undefined}
            tabIndex={hasPage ? 0 : undefined}
            onKeyDown={(e) => {
              if (hasPage && (e.key === "Enter" || e.key === " ")) {
                router.push(project.about);
              }
            }}
            className={`group bg-[#0a0a0a] border border-white/5 rounded-lg overflow-hidden hover:border-[#e8502a] transition-all duration-300 hover:-translate-y-1 ${
              hasPage ? "cursor-pointer" : ""
            }`}
          >
            <div
              className={`h-44 flex items-center justify-center text-5xl font-black bg-gradient-to-br ${thumbConfig[i].bg} ${thumbConfig[i].color}`}
            >
              {thumbConfig[i].label}
            </div>

            <div className="p-6">
              <h3 className="text-xl font-black mb-2">{project.title}</h3>

              <p className="text-gray-400 text-sm font-light leading-relaxed">
                {project.summary}
              </p>

              <div className="mt-6 pt-5 border-t border-white/5 flex gap-3">
                <Link
                  href={project.demo}
                  target="_blank"
                  onClick={(e) => e.stopPropagation()}
                  className="flex-1 text-center py-2.5 bg-[#e8502a] text-white text-xs font-semibold uppercase tracking-widest rounded-sm hover:bg-[#ff6b45] transition-colors"
                >
                  Live Demo
                </Link>

                <Link
                  href={project.github}
                  target="_blank"
                  onClick={(e) => e.stopPropagation()}
                  className="flex-1 text-center py-2.5 border border-white/10 text-gray-400 text-xs font-semibold uppercase tracking-widest rounded-sm hover:border-[#e8502a] hover:text-[#e8502a] transition-colors"
                >
                  Source Code
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>

    <div className="mt-12 text-center">
      <Link
        href="/projects"
        className="inline-block px-6 py-3 border border-white/10 text-xs uppercase tracking-widest text-gray-500 rounded-sm hover:border-white hover:text-white transition-all"
      >
        View all projects
      </Link>
    </div>
  </div>
</section>

      {/* SKILLS */}
      <section id="skills" className="py-32 px-8 md:px-16">
        <div className="max-w-7xl mx-auto">
          <p className="text-[0.65rem] tracking-[0.2em] uppercase text-[#e8502a] mb-2">What I work with</p>
          <h2 className="text-5xl md:text-6xl font-black mb-2">Skills</h2>
          <div className="w-12 h-0.5 bg-[#e8502a] mb-14" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { title: "Frontend", items: ["React", "TypeScript", "Next.js", "Tailwind CSS"] },
              { title: "Backend", items: ["Node.js", "Python", "FastAPI", "REST APIs"] },
              { title: "Data & Cloud", items: ["PostgreSQL", "Appwrite", "MongoDB", "AWS / GCP"] },
              { title: "Tools", items: ["Docker", "Git / GitHub", "Vite", "Linux"] },
            ].map(group => (
              <div key={group.title} className="bg-[#1c1c1c] border border-white/5 rounded-lg p-5">
                <div className="text-[0.6rem] tracking-[0.18em] uppercase text-[#e8502a] mb-4 font-semibold">{group.title}</div>
                {group.items.map(item => (
                  <a
                    key={item}
                    href={skillLinks[item]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 text-sm text-gray-400 font-light py-2.5 border-b border-white/5 last:border-0 hover:text-white transition-colors duration-150 group/item"
                    >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#e8502a] shrink-0 group-hover/item:scale-125 transition-transform duration-150" />
                    {item}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

    {/* CONTACT */}
<section id="contact" className="py-32 px-8 md:px-16 bg-[#111]">
  <div className="max-w-7xl mx-auto">
    <p className="text-[0.65rem] tracking-[0.2em] uppercase text-[#e8502a] mb-2">
      Let's talk
    </p>

    <h2 className={`text-5xl md:text-6xl font-black mb-2 ${bebas.className}`}>
      Get In Touch
    </h2>

    <div className="w-12 h-0.5 bg-[#e8502a] mb-6" />

    <p className="text-gray-400 mb-12 max-w-md text-sm leading-relaxed">
      Open to new opportunities, collaborations, or just a good conversation
      about tech.
    </p>

    <a
      href="mailto:hello@amaremini.com"
      className={`block text-5xl md:text-5xl tracking-wide leading-none hover:text-[#e8502a] transition-colors duration-300 ${bebas.className}`}
    >
      hello@amaremini.com
    </a>

    <div className="mt-10 flex flex-wrap items-center gap-4 text-xs uppercase tracking-[0.25em] text-gray-500">
      <a
        href="https://linkedin.com/in/amar-emini"
        target="_blank"
        rel="noreferrer"
        className="hover:text-[#e8502a] transition-colors"
      >
        LinkedIn
      </a>

      <span className="text-gray-700">/</span>

      <a
        href="https://github.com/amarua05"
        target="_blank"
        rel="noreferrer"
        className="hover:text-[#e8502a] transition-colors"
      >
        GitHub
      </a>

      <span className="text-gray-700">/</span>

      <a
        href="https://instagram.com/_aamaar1"
        target="_blank"
        rel="noreferrer"
        className="hover:text-[#e8502a] transition-colors"
      >
        Instagram
      </a>
    </div>
  </div>
</section>

      {/* FOOTER */}
      <footer className="py-8 px-8 md:px-16 border-t border-white/5 flex justify-between items-center text-xs text-gray-600">
        <span>© {new Date().getFullYear()} Amar Emini</span>
        <span>made with {"<3"}</span>
      </footer>
    </div>
  );
}