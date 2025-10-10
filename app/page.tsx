"use client";
import React, { useEffect, useMemo, useState } from "react";
import Marquee from "@/components/Marquee";
import MarqueeItems from "@/components/MarqueeItems";
import Sidebar from "@/components/Sidebar";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { projects as allProjects } from "@/lib/projects";
import { BsInstagram, BsLinkedin, BsEnvelopeFill, BsTwitterX } from "react-icons/bs";

function useAge(birthIso: string) {
  const [age, setAge] = useState({ years: 0, months: 0, days: 0 });
  useEffect(() => {
    const birthDate = new Date(birthIso);
    const updateAge = () => {
      const now = new Date();
      let years = now.getUTCFullYear() - birthDate.getUTCFullYear();
      let months = now.getUTCMonth() - birthDate.getUTCMonth();
      let days = now.getUTCDate() - birthDate.getUTCDate();
      if (days < 0) {
        months--;
        const prevMonth = new Date(now.getUTCFullYear(), now.getUTCMonth(), 0).getUTCDate();
        days += prevMonth;
      }
      if (months < 0) {
        years--;
        months += 12;
      }
      setAge({ years, months, days });
    };
    updateAge();
    const id = setInterval(updateAge, 60_000);
    return () => clearInterval(id);
  }, [birthIso]);
  return age;
}

export default function Page() {
  const age = useAge("2005-10-05T01:30:00Z");
  const { scrollYProgress } = useScroll();
  const bgX = useTransform(scrollYProgress, [0, 1], ["0%", "-25%"]);

  const marqueeText = useMemo(() => " AMAR EMINI ", []);

  return (
    <div className="min-h-screen font-sans overflow-x-hidden">
      {/* Sidebar */}
      <Sidebar />
      <main className="md:ml-20">
        {/* Intro */}
        <section id="home" className="relative flex flex-col items-center justify-center h-[100svh] text-center select-none overflow-hidden">
          {/* Multi marquee background */}
          <div className="absolute inset-0 -z-10 opacity-20">
            <Marquee text={(marqueeText).repeat(12)} className="text-[12vw] md:text-[10vw] font-extrabold" direction={-1} />
            <Marquee text={(marqueeText).repeat(12)} className="text-[12vw] md:text-[10vw] font-extrabold" direction={1} />
            <Marquee text={(marqueeText).repeat(12)} className="text-[12vw] md:text-[10vw] font-extrabold" direction={-1} />
            <Marquee text={(marqueeText).repeat(12)} className="text-[12vw] md:text-[10vw] font-extrabold" direction={1} />
          </div>

          {/* Slightly rounded photo placeholder over bars */}
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="relative z-10">
            <div className="w-56 h-56 sm:w-64 sm:h-64 bg-gray-200 dark:bg-gray-800 rounded-lg overflow-hidden border border-black/10 dark:border-white/10 shadow-2xl">
              <Image src="/white-logo.png" alt="Profile placeholder" width={256} height={256} className="object-cover w-full h-full" />
            </div>
          </motion.div>

          {/* Name and age */}
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }} className="mt-8">
            <div className="text-5xl sm:text-7xl font-extrabold tracking-tight">AMAR EMINI</div>
            <p className="mt-3 text-base sm:text-lg text-gray-600 dark:text-gray-300">Age: {age.years}y {age.months}m {age.days}d</p>
          </motion.div>
        </section>

        {/* Projects */}
        <section id="projects" className="min-h-screen py-28 md:py-32 relative">
          <motion.h2 whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 50 }} transition={{ duration: 0.6 }} className="text-4xl md:text-6xl font-bold mb-10 text-center">
            Projects
          </motion.h2>
          {/* Single marquee row of project cards */}
          <div className="px-4">
            <MarqueeItems
              direction={-1}
              baseSpeed={55}
              items={allProjects.map((p) => (
                <Link key={p.slug} href={`/projects/${p.slug}`} className="block group">
                  <div className="w-64 sm:w-72 h-40 rounded-2xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm p-5 shadow-md transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-0.5">
                    <div className="text-xl font-semibold">{p.title}</div>
                    <div className="mt-2 text-sm text-gray-700 dark:text-gray-300 line-clamp-3">{p.summary}</div>
                    <div className="mt-3 text-xs text-gray-500 group-hover:text-emerald-500">Open →</div>
                  </div>
                </Link>
              ))}
              className="[mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
            />
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="min-h-screen py-28 md:py-32">
          <motion.h2 whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 50 }} transition={{ duration: 0.6 }} className="text-4xl md:text-6xl font-bold mb-4 text-center">
            Contact
          </motion.h2>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-10 text-base md:text-lg">Let&apos;s build something clean, fast, and a little bit unreal.</p>

          <div className="px-4">
            <MarqueeItems
              direction={1}
              baseSpeed={60}
              items={[
                <a key="email" href="mailto:hello@amaremini.com" className="group block">
                  <div className="flex items-center gap-3 px-5 py-4 rounded-full border border-black/10 dark:border-white/10 bg-white/70 dark:bg-gray-800/70 backdrop-blur-md shadow-sm transition-all duration-300 group-hover:shadow-emerald-500/20 group-hover:-translate-y-0.5">
                    <span className="text-emerald-600 dark:text-emerald-400"><BsEnvelopeFill /></span>
                    <span className="font-medium">Email</span>
                    <span className="text-gray-500">hello@amaremini.com</span>
                  </div>
                </a>,
                <a key="linkedin" href="https://linkedin.com/in/amar-emini" target="_blank" rel="noreferrer" className="group block">
                  <div className="flex items-center gap-3 px-5 py-4 rounded-full border border-black/10 dark:border-white/10 bg-white/70 dark:bg-gray-800/70 backdrop-blur-md shadow-sm transition-all duration-300 group-hover:shadow-indigo-500/20 group-hover:-translate-y-0.5">
                    <span className="text-indigo-600 dark:text-indigo-400"><BsLinkedin /></span>
                    <span className="font-medium">LinkedIn</span>
                    <span className="text-gray-500">/amar-emini</span>
                  </div>
                </a>,
                <a key="instagram" href="https://instagram.com/_aamaar1" target="_blank" rel="noreferrer" className="group block">
                  <div className="flex items-center gap-3 px-5 py-4 rounded-full border border-black/10 dark:border-white/10 bg-white/70 dark:bg-gray-800/70 backdrop-blur-md shadow-sm transition-all duration-300 group-hover:shadow-pink-500/20 group-hover:-translate-y-0.5">
                    <span className="text-pink-600 dark:text-pink-400"><BsInstagram /></span>
                    <span className="font-medium">Instagram</span>
                    <span className="text-gray-500">@_aamaar1</span>
                  </div>
                </a>,
                <a key="x" href="https://x.com/_aamaar1" target="_blank" rel="noreferrer" className="group block">
                  <div className="flex items-center gap-3 px-5 py-4 rounded-full border border-black/10 dark:border-white/10 bg-white/70 dark:bg-gray-800/70 backdrop-blur-md shadow-sm transition-all duration-300 group-hover:shadow-gray-500/20 group-hover:-translate-y-0.5">
                    <span className="text-gray-900 dark:text-white"><BsTwitterX /></span>
                    <span className="font-medium">X</span>
                    <span className="text-gray-500">@_aamaar1</span>
                  </div>
                </a>
              ]}
              className="[mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
            />
          </div>

          <footer className="py-10 text-center text-gray-600 dark:text-gray-400 text-sm">© {new Date().getFullYear()} Amar Emini</footer>
        </section>
      </main>
    </div>
  );
}
