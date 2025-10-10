"use client";
import React, { useEffect, useMemo, useState } from "react";
import Nav2 from "@/components/Nav2";
import Marquee from "@/components/Marquee";
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

function Carousel() {
  const [index, setIndex] = useState(0);
  const items = allProjects;
  const clamp = (n: number, min: number, max: number) => Math.max(min, Math.min(max, n));
  const prev = () => setIndex(v => clamp(v - 1, 0, items.length - 1));
  const next = () => setIndex(v => clamp(v + 1, 0, items.length - 1));
  const center = items[index];
  const left = items[index - 1];
  const right = items[index + 1];

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      <button onClick={prev} aria-label="Previous" className="absolute left-0 top-1/2 -translate-y-1/2 z-10 px-4 py-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 backdrop-blur text-white">←</button>
      <button onClick={next} aria-label="Next" className="absolute right-0 top-1/2 -translate-y-1/2 z-10 px-4 py-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 backdrop-blur text-white">→</button>

      <div className="flex items-center justify-center gap-6 py-10">
        {/* Left preview */}
        <div className="hidden md:block w-60 h-40 rounded-2xl bg-gray-800/60 border border-gray-700/50 blur-[2px] scale-95 opacity-70"/>
        {/* Center card */}
        <Link href={`/projects/${center.slug}`} className="w-full md:w-[36rem] h-64 rounded-3xl bg-gray-800/60 border border-gray-700/50 p-8 flex flex-col justify-between hover:border-gray-600 transition-colors">
          <div>
            <h3 className="text-3xl font-semibold">{center.title}</h3>
            <p className="text-gray-300 mt-2">{center.summary}</p>
          </div>
          <span className="text-sm text-gray-400">Read more →</span>
        </Link>
        {/* Right preview */}
        <div className="hidden md:block w-60 h-40 rounded-2xl bg-gray-800/60 border border-gray-700/50 blur-[2px] scale-95 opacity-70"/>
      </div>
    </div>
  );
}

export default function Page() {
  const age = useAge("2005-10-05T01:30:00Z");
  const { scrollYProgress } = useScroll();
  const bgX = useTransform(scrollYProgress, [0, 1], ["0%", "-25%"]);

  const marqueeText = useMemo(() => Array.from({ length: 1 }, () => "AMAR EMINI").join(" "), []);

  return (
    <div className="bg-gray-950 text-white min-h-screen font-sans overflow-x-hidden">
      <Nav2 />
      <main className="ml-0">
        {/* Intro */}
        <section id="home" className="relative flex flex-col items-center justify-center h-screen text-center select-none overflow-hidden">
          <div className="absolute inset-0 -z-10 opacity-10">
            {/* background horizontal motion */}
            <motion.div style={{ x: bgX }} className="whitespace-nowrap text-[10vw] font-extrabold">
              {Array(4).fill("AMAR EMINI ").join("")}
            </motion.div>
          </div>

          {/* Marquee rows */}
          <div className="w-full pointer-events-none">
            <Marquee text={" AMAR EMINI ".repeat(8)} className="text-[8vw] font-extrabold opacity-10" direction={-1} />
            <Marquee text={" AMAR EMINI ".repeat(8)} className="text-[8vw] font-extrabold opacity-10" direction={1} />
            <Marquee text={" AMAR EMINI ".repeat(8)} className="text-[8vw] font-extrabold opacity-10" direction={-1} />
          </div>

          {/* Name */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="text-[15vw] leading-[0.9] font-extrabold z-10">
            AMAR<br/>EMINI
          </motion.div>

          {/* Profile */}
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5, duration: 0.8 }} className="mt-10 relative z-10">
            <div className="w-64 h-64 bg-gray-800 rounded-t-full rounded-b-[2rem] overflow-hidden border border-gray-700/50 shadow-xl">
              <Image src="/white-logo.png" alt="Profile" width={256} height={256} className="object-cover w-full h-full" />
            </div>
          </motion.div>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1, duration: 0.8 }} className="mt-8 text-gray-400 text-lg z-10">
            Age: {age.years} years, {age.months} months, {age.days} days
          </motion.p>
        </section>

        {/* Projects */}
        <section id="projects" className="min-h-screen py-32 relative">
          <motion.h2 whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 50 }} transition={{ duration: 0.6 }} className="text-6xl font-bold mb-10 text-center">
            Projects
          </motion.h2>

          {/* Background horizontal motion single line */}
          <div className="absolute top-24 left-0 right-0 opacity-5 -z-10">
            <Marquee text={" PROJECTS  ".repeat(12)} className="text-[8vw] font-extrabold" direction={-1} />
          </div>

          <Carousel />
        </section>

        {/* Contact */}
        <section id="contact" className="min-h-screen py-32">
          <motion.h2 whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 50 }} transition={{ duration: 0.6 }} className="text-6xl font-bold mb-10 text-center">
            Contact
          </motion.h2>
          <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
            <a href="mailto:hello@amaremini.com" className="group p-6 rounded-3xl bg-gray-800/60 border border-gray-700/50 hover:border-gray-600 transition-colors flex items-center gap-4">
              <span className="p-3 rounded-2xl bg-white/10 text-white"><BsEnvelopeFill /></span>
              <div>
                <div className="font-semibold">Email</div>
                <div className="text-gray-400">hello@amaremini.com</div>
              </div>
            </a>
            <a href="https://linkedin.com/in/amar-emini" target="_blank" rel="noreferrer" className="group p-6 rounded-3xl bg-gray-800/60 border border-gray-700/50 hover:border-gray-600 transition-colors flex items-center gap-4">
              <span className="p-3 rounded-2xl bg-white/10 text-white"><BsLinkedin /></span>
              <div>
                <div className="font-semibold">LinkedIn</div>
                <div className="text-gray-400">linkedin.com/in/amar-emini</div>
              </div>
            </a>
            <a href="https://instagram.com/_aamaar1" target="_blank" rel="noreferrer" className="group p-6 rounded-3xl bg-gray-800/60 border border-gray-700/50 hover:border-gray-600 transition-colors flex items-center gap-4">
              <span className="p-3 rounded-2xl bg-white/10 text-white"><BsInstagram /></span>
              <div>
                <div className="font-semibold">Instagram</div>
                <div className="text-gray-400">@_aamaar1</div>
              </div>
            </a>
            <a href="https://x.com/_aamaar1" target="_blank" rel="noreferrer" className="group p-6 rounded-3xl bg-gray-800/60 border border-gray-700/50 hover:border-gray-600 transition-colors flex items-center gap-4">
              <span className="p-3 rounded-2xl bg-white/10 text-white"><BsTwitterX /></span>
              <div>
                <div className="font-semibold">X</div>
                <div className="text-gray-400">@_aamaar1</div>
              </div>
            </a>
          </div>
          <footer className="py-10 text-center text-gray-600 text-sm">© {new Date().getFullYear()} Amar Emini</footer>
        </section>
      </main>
    </div>
  );
}
