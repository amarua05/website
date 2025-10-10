"use client";
import React from "react";

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-full w-16 md:w-20 flex flex-col justify-center items-center bg-white/60 dark:bg-gray-900/70 backdrop-blur-md space-y-20 z-20 border-r border-black/5 dark:border-white/10">
      <a href="#projects" className="-rotate-90 text-[10px] md:text-xs tracking-[0.3em] whitespace-nowrap hover:opacity-70 transition-opacity">PROJECTS</a>
      <a href="#contact" className="-rotate-90 text-[10px] md:text-xs tracking-[0.3em] whitespace-nowrap hover:opacity-70 transition-opacity">CONTACT</a>
    </aside>
  );
}
