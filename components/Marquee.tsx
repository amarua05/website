"use client";
import React, { useEffect, useMemo, useRef } from "react";
import { useScroll, useSpring, useVelocity, useAnimationFrame, useMotionValue } from "framer-motion";

type MarqueeProps = {
  text: string;
  className?: string;
  repeat?: number;
  direction?: 1 | -1; // 1 = left to right, -1 = right to left
  baseSpeed?: number; // pixels per second base speed
  velocityFactor?: number; // multiplier for scroll velocity
};

export default function Marquee({
  text,
  className,
  repeat = 12,
  direction = -1,
  baseSpeed = 40,
  velocityFactor = 0.06,
}: MarqueeProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);

  const offsetX = useMotionValue(0); // px
  const { scrollY } = useScroll();
  const rawVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(rawVelocity, { stiffness: 180, damping: 40, mass: 0.4 });

  const content = useMemo(() => Array.from({ length: repeat }, () => text).join(" "), [repeat, text]);

  useAnimationFrame((t, delta) => {
    const contentWidth = contentRef.current?.offsetWidth ?? 0;
    if (contentWidth === 0) return;

    const velocityPxPerMs = smoothVelocity.get() * velocityFactor;
    const velocityPxPerS = velocityPxPerMs * 1000;
    const signedBase = baseSpeed * direction;
    const moveBy = (signedBase + velocityPxPerS) * (delta / 1000);

    let next = offsetX.get() + moveBy;

    // Wrap within [-halfWidth, 0] to keep continuous motion
    const halfWidth = contentWidth / 2; // because we render content twice below
    if (next <= -halfWidth) next += halfWidth;
    if (next > 0) next -= halfWidth;

    offsetX.set(next);
  });

  // Re-clamp when window resizes
  useEffect(() => {
    const handle = () => {
      const contentWidth = contentRef.current?.offsetWidth ?? 0;
      const halfWidth = contentWidth / 2;
      const x = offsetX.get();
      if (x <= -halfWidth) offsetX.set(x + halfWidth);
      if (x > 0) offsetX.set(x - halfWidth);
    };
    window.addEventListener("resize", handle);
    return () => window.removeEventListener("resize", handle);
  }, [offsetX]);

  const transform = { transform: `translate3d(${offsetX.get()}px, 0, 0)`, willChange: "transform" } as React.CSSProperties;

  return (
    <div ref={containerRef} className={"overflow-hidden whitespace-nowrap select-none " + (className ?? "")}> 
      <div ref={contentRef} style={transform} className="inline-block">
        {content}
      </div>
      <div aria-hidden style={transform} className="inline-block">
        {content}
      </div>
    </div>
  );
}
