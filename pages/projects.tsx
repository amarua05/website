"use client";
import React, { useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { projects } from "@/lib/projects";
import Nav from "@/components/Nav";
import { Bebas_Neue } from "next/font/google";

const bebas = Bebas_Neue({ weight: "400", subsets: ["latin"] });

// Cycle of thumbnail treatments — same palette family as the homepage cards,
// just extended so any number of projects gets a distinct-feeling color.
const thumbCycle = [
  { bg: "from-[#1a0a05] to-[#3d1409]", color: "text-[#e8502a]" },
  { bg: "from-[#0a0f1a] to-[#0d2040]", color: "text-[#4a9eff]" },
  { bg: "from-[#0a1205] to-[#142d0a]", color: "text-[#f5c842]" },
  { bg: "from-[#150a1a] to-[#2d0a3d]", color: "text-[#c084fc]" },
  { bg: "from-[#1a0a0a] to-[#3d0d14]", color: "text-[#ff6b8a]" },
  { bg: "from-[#0a1a17] to-[#0d3d33]", color: "text-[#4ae8c8]" },
];

function initials(title: string) {
  return title
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase())
    .join("");
}

export default function ProjectsPage() {
  const router = useRouter();

  // Optional: if a project has a `tags` field, we surface a filter bar.
  // If none of the projects define tags, this silently does nothing.
  const allTags = useMemo(() => {
    const set = new Set<string>();
    projects.forEach((p: any) => {
      if (Array.isArray(p.tags)) p.tags.forEach((t: string) => set.add(t));
    });
    return Array.from(set);
  }, []);

  const [activeTag, setActiveTag] = useState<string | null>(null);

  const filtered = useMemo(() => {
    if (!activeTag) return projects;
    return projects.filter((p: any) => Array.isArray(p.tags) && p.tags.includes(activeTag));
  }, [activeTag]);

  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen font-sans overflow-x-hidden">
      <Nav />

      {/* HEADER */}
      <section className="pt-40 pb-16 px-8 md:px-16">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-[0.65rem] tracking-[0.2em] uppercase text-gray-500 hover:text-[#e8502a] transition-colors mb-8"
          >
            ← Back home
          </Link>

          <p className="text-[0.65rem] tracking-[0.2em] uppercase text-[#e8502a] mb-2">
            Everything I&apos;ve built
          </p>
          <h1 className={`text-6xl md:text-7xl font-black mb-2 ${bebas.className}`}>
            All Projects
          </h1>
          <div className="w-12 h-0.5 bg-[#e8502a] mb-8" />

          <p className="text-gray-400 font-light leading-relaxed max-w-lg text-[0.95rem]">
            {projects.length} project{projects.length === 1 ? "" : "s"} spanning full-stack apps,
            tools, and experiments — from database to deployment.
          </p>

          {allTags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-8">
              <button
                onClick={() => setActiveTag(null)}
                className={`px-4 py-2 text-xs font-semibold uppercase tracking-widest rounded-sm border transition-all ${
                  activeTag === null
                    ? "bg-[#e8502a] text-white border-[#e8502a]"
                    : "border-white/10 text-gray-400 hover:border-[#e8502a] hover:text-[#e8502a]"
                }`}
              >
                All
              </button>
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setActiveTag(tag)}
                  className={`px-4 py-2 text-xs font-semibold uppercase tracking-widest rounded-sm border transition-all ${
                    activeTag === tag
                      ? "bg-[#e8502a] text-white border-[#e8502a]"
                      : "border-white/10 text-gray-400 hover:border-[#e8502a] hover:text-[#e8502a]"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* GRID */}
      <section className="pb-32 px-8 md:px-16">
        <div className="max-w-7xl mx-auto">
          {filtered.length === 0 ? (
            <div className="text-gray-500 text-sm border border-white/5 rounded-lg p-12 text-center">
              No projects match that filter yet.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {filtered.map((project: any, i: number) => {
                const hasPage = project.about && project.about !== "#";
                const thumb = thumbCycle[i % thumbCycle.length];

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
                    className={`group bg-[#111] border border-white/5 rounded-lg overflow-hidden hover:border-[#e8502a] transition-all duration-300 hover:-translate-y-1 ${
                      hasPage ? "cursor-pointer" : ""
                    }`}
                  >
                    <div
                      className={`h-44 flex items-center justify-center text-5xl font-black bg-gradient-to-br ${thumb.bg} ${thumb.color}`}
                    >
                      {initials(project.title)}
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-black mb-2">{project.title}</h3>

                      <p className="text-gray-400 text-sm font-light leading-relaxed">
                        {project.summary}
                      </p>

                      {Array.isArray(project.tags) && project.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-4">
                          {project.tags.map((tag: string) => (
                            <span
                              key={tag}
                              className="text-[0.6rem] uppercase tracking-widest text-gray-500 border border-white/10 rounded-sm px-2 py-1"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}

                      <div className="mt-6 pt-5 border-t border-white/5 flex gap-3">
                        {project.demo && (
                          <Link
                            href={project.demo}
                            target="_blank"
                            onClick={(e) => e.stopPropagation()}
                            className="flex-1 text-center py-2.5 bg-[#e8502a] text-white text-xs font-semibold uppercase tracking-widest rounded-sm hover:bg-[#ff6b45] transition-colors"
                          >
                            Live Demo
                          </Link>
                        )}

                        {project.github && (
                          <Link
                            href={project.github}
                            target="_blank"
                            onClick={(e) => e.stopPropagation()}
                            className="flex-1 text-center py-2.5 border border-white/10 text-gray-400 text-xs font-semibold uppercase tracking-widest rounded-sm hover:border-[#e8502a] hover:text-[#e8502a] transition-colors"
                          >
                            Source Code
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
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