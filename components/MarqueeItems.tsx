"use client";
import React, { useEffect, useMemo, useRef } from "react";
import { motion, useScroll, useSpring, useVelocity, useAnimationFrame, useMotionValue } from "framer-motion";

type MarqueeItemsProps = {
  items: React.ReactNode[];
  className?: string;
  gap?: number; // px between items
  direction?: 1 | -1;
  baseSpeed?: number; // px per second
  velocityFactor?: number; // multiplier for scroll velocity
};

export default function MarqueeItems({
  items,
  className,
  gap = 24,
  direction = -1,
  baseSpeed = 50,
  velocityFactor = 0.06,
}: MarqueeItemsProps) {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const offsetX = useMotionValue(0);
  const { scrollY } = useScroll();
  const rawVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(rawVelocity, { stiffness: 180, damping: 40, mass: 0.4 });

  const track = useMemo(() => items, [items]);

  useAnimationFrame((t, delta) => {
    const width = trackRef.current?.offsetWidth ?? 0;
    if (!width) return;

    const velocityPxPerMs = smoothVelocity.get() * velocityFactor;
    const velocityPxPerS = velocityPxPerMs * 1000;
    const signedBase = baseSpeed * direction;
    const moveBy = (signedBase + velocityPxPerS) * (delta / 1000);

    let next = offsetX.get() + moveBy;
    const halfWidth = width / 2; // because we render two tracks
    if (next <= -halfWidth) next += halfWidth;
    if (next > 0) next -= halfWidth;

    offsetX.set(next);
  });

  useEffect(() => {
    const onResize = () => {
      const width = trackRef.current?.offsetWidth ?? 0;
      const half = width / 2;
      let x = offsetX.get();
      if (x <= -half) x += half;
      if (x > 0) x -= half;
      offsetX.set(x);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [offsetX]);

  const gapStyle = { gap: `${gap}px` } as React.CSSProperties;

  const renderTrack = (ariaHidden?: boolean) => (
    <motion.div
      aria-hidden={ariaHidden}
      ref={ariaHidden ? undefined : trackRef}
      style={{ x: offsetX, willChange: "transform" }}
      className="inline-flex items-center"
    >
      <div className="inline-flex items-center" style={gapStyle}>
        {track.map((node, i) => (
          <div key={`item-${ariaHidden ? 'b' : 'a'}-${i}`} className="shrink-0">
            {node}
          </div>
        ))}
      </div>
      {/* spacer to ensure continuous gap at wrap */}
      <div style={{ width: gap }} />
    </motion.div>
  );

  return (
    <div className={"overflow-hidden select-none " + (className ?? "")}> 
      {renderTrack(false)}
      {renderTrack(true)}
    </div>
  );
}
