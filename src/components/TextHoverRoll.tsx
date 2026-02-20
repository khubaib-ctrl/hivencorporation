"use client";

import { useRef, useCallback } from "react";
import { motion, useAnimate, stagger } from "framer-motion";

interface TextHoverRollProps {
  text: string;
  className?: string;
  as?: "a" | "span" | "div" | "button";
  href?: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
}

export default function TextHoverRoll({
  text,
  className = "",
  as: Tag = "span",
  ...props
}: TextHoverRollProps) {
  const [scope, animate] = useAnimate();
  const isAnimating = useRef(false);

  const handleMouseEnter = useCallback(async () => {
    if (isAnimating.current) return;
    isAnimating.current = true;
    try {
      await animate(
        ".roll-char",
        { y: "-100%" },
        { duration: 0.4, ease: [0.76, 0, 0.24, 1], delay: stagger(0.015) }
      );
    } catch { /* animation interrupted */ }
  }, [animate]);

  const handleMouseLeave = useCallback(async () => {
    try {
      await animate(
        ".roll-char",
        { y: "0%" },
        { duration: 0.3, ease: [0.76, 0, 0.24, 1], delay: stagger(0.01, { from: "last" }) }
      );
    } catch { /* animation interrupted */ }
    isAnimating.current = false;
  }, [animate]);

  const chars = text.split("");

  return (
    <Tag
      ref={scope as React.Ref<HTMLAnchorElement & HTMLSpanElement & HTMLDivElement & HTMLButtonElement>}
      className={`inline-block overflow-hidden ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      <span className="inline-flex relative">
        {chars.map((char, i) => (
          <motion.span
            key={i}
            className="roll-char inline-block"
            style={{
              textShadow: "0 1em 0 currentColor",
              whiteSpace: char === " " ? "pre" : undefined,
            }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </span>
    </Tag>
  );
}
