"use client";
import React, { useRef, useState, useCallback, useLayoutEffect } from "react";

/**
 * HoverWeightText
 * Splits text into per-letter spans and adjusts each letter's variable
 * font weight (via font-variation-settings) based on distance from the
 * cursor to that letter's center. Closer = thinner, in 5 discrete stages.
 *
 * Requires a variable font that supports a wide `wght` axis, e.g. Inter:
 *   <link rel="stylesheet"
 *     href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" />
 * or via next/font/google:
 *   import { Inter } from "next/font/google";
 *   const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
 */

// Stage 1 (normal, far away) -> Stage 5 (thinnest, cursor at letter center)
const WEIGHT_STAGES = [1000, 800, 600, 400, 200];
// Radius (px) within which the falloff is applied, tune per font size
const INFLUENCE_RADIUS = 90;

type HoverWeightTextProps = {
  text: string;
  className?: string;
  fontClassName?: string;
};

export default function HoverWeightText({
  text,
  className = "",
  fontClassName = "",
}: HoverWeightTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const letterRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const [weights, setWeights] = useState<number[]>(
    () => new Array(text.length).fill(WEIGHT_STAGES[0])
  );
  const [widths, setWidths] = useState<number[]>(
    () => new Array(text.length).fill(0)
  );

  useLayoutEffect(() => {
    const measured = letterRefs.current.map((el) => {
      if (!el) return 0;
      return el.getBoundingClientRect().width;
    });
    setWidths(measured);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, fontClassName]);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const next = letterRefs.current.map((el) => {
        if (!el) return WEIGHT_STAGES[0];
        const rect = el.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dist = Math.hypot(e.clientX - cx, e.clientY - cy);

        if (dist >= INFLUENCE_RADIUS) return WEIGHT_STAGES[0];

        const t = 1 - dist / INFLUENCE_RADIUS;
        const stageIndex = Math.min(
          WEIGHT_STAGES.length - 1,
          Math.floor(t * WEIGHT_STAGES.length)
        );
        return WEIGHT_STAGES[stageIndex];
      });
      setWeights(next);
    },
    []
  );

  const handleMouseLeave = useCallback(() => {
    setWeights(new Array(text.length).fill(WEIGHT_STAGES[0]));
  }, [text.length]);

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`inline-flex ${className}`}
      aria-label={text}
    >
      {text.split("").map((char, i) => (
        <span
          key={i}
          ref={(el) => {
            letterRefs.current[i] = el;
          }}
          aria-hidden="true"
          className={fontClassName}
          style={{
            display: "inline-block",
            textAlign: "center",
            width: widths[i] ? `${widths[i]}px` : undefined,
            fontVariationSettings: `"wght" ${weights[i]}`,
            transition: "font-variation-settings",
            whiteSpace: char === " " ? "pre" : "normal",
          }}
        >
          {char}
        </span>
      ))}
    </div>
  );
}