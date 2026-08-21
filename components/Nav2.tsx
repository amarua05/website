"use client";

import Link from "next/link";
import { useState } from "react";

export default function TopBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-16 h-20 border-b border-white/5 backdrop-blur-md bg-[#0a0a0a]/80">
       <Link
  href="/#"
  onClick={scrollToTop}
  className="group inline-flex items-baseline font-black text-xl tracking-tight"
>
  <span className="text-[#e8502a]">A</span>
  <span className="inline-block max-w-0 overflow-hidden whitespace-nowrap text-white transition-all duration-600 ease-in-out group-hover:max-w-[60px]">
    MAR
  </span>
  <span className="inline-block max-w-0 overflow-hidden whitespace-nowrap transition-all ease-in-out group-hover:max-w-[12px]">
    &nbsp;
  </span>
  <span className="text-[#e8502a]">E</span>
  <span className="inline-block max-w-0 overflow-hidden whitespace-nowrap text-white transition-all duration-300 ease-in-out group-hover:max-w-[90px]">
    MINI
  </span>
</Link>
        <ul className="hidden md:flex items-center gap-10">
          {[["#about", "About"], ["#projects", "Projects"], ["#skills", "Skills"], ["#contact", "Contact"]].map(([href, label]) => (
            <li key={href}>
              <a href={href} className="text-xs uppercase tracking-[0.15em] text-gray-400 hover:text-white transition-colors">{label}</a>
            </li>
          ))}
        </ul>
        <button className="md:hidden text-white text-2xl" onClick={() => setMenuOpen(v => !v)} aria-label="Toggle menu">
          {menuOpen ? "✕" : "☰"}
        </button>
        {menuOpen && (
          <div className="absolute top-20 left-0 right-0 bg-[#111] border-b border-white/5 flex flex-col items-center gap-6 py-8 md:hidden">
            {[["#about", "About"], ["#projects", "Projects"], ["#skills", "Skills"], ["#contact", "Contact"]].map(([href, label]) => (
              <a key={href} href={href} onClick={() => setMenuOpen(false)} className="text-sm uppercase tracking-widest text-gray-300 hover:text-white transition-colors">{label}</a>
            ))}
          </div>
        )}
      </nav>
  );
}