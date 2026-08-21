"use client";

import { useEffect, useState } from "react";

export default function scroller() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Go to top"
      className={`
        group
        fixed bottom-8 right-8 z-50
        flex items-center
        h-12
        overflow-hidden
        rounded-full
        bg-[#1C1C1C]
        border-1 border-gray-600
        text-white
        shadow-lg
        transition-all duration-300
        hover:w-45
        ${
          visible
            ? "w-12 opacity-60 translate-y-0"
            : "w-12 opacity-0 translate-y-4 pointer-events-none"
        }
      `}
    >
      <span className="w-12 flex justify-center text-xl font-bold shrink-0">
      ↑
      </span>

      <span className="whitespace-nowrap pr-6 text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        Scroll to top
      </span>
    </button>
  );
}