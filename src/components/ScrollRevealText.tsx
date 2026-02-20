"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ScrollRevealTextProps {
  text: string;
  className?: string;
  as?: "p" | "h2" | "h3" | "span" | "div";
}

function Word({
  word,
  range,
  progress,
}: {
  word: string;
  range: [number, number];
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const opacity = useTransform(progress, range, [0.12, 1]);
  const color = useTransform(
    progress,
    range,
    ["var(--text-muted)", "var(--text-primary)"]
  );

  return (
    <motion.span style={{ opacity, color }} className="inline-block mr-[0.25em]">
      {word}
    </motion.span>
  );
}

export default function ScrollRevealText({
  text,
  className = "",
  as: Tag = "p",
}: ScrollRevealTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 90%", "start 30%"],
  });

  const words = text.split(" ");

  return (
    <Tag ref={containerRef as React.Ref<HTMLParagraphElement & HTMLHeadingElement & HTMLSpanElement & HTMLDivElement>} className={`flex flex-wrap ${className}`}>
      {words.map((word, i) => {
        const wordStart = i / words.length;
        const wordEnd = (i + 1) / words.length;
        return (
          <Word
            key={`${word}-${i}`}
            word={word}
            range={[wordStart, wordEnd]}
            progress={scrollYProgress}
          />
        );
      })}
    </Tag>
  );
}
