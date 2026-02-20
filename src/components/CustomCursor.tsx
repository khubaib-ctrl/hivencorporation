"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const [hoverText, setHoverText] = useState("");
  const [visible, setVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(true);
  const tagRef = useRef<HTMLDivElement>(null);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const springConfig = { damping: 30, stiffness: 180, mass: 0.4 };
  const x = useSpring(cursorX, springConfig);
  const y = useSpring(cursorY, springConfig);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024 || "ontouchstart" in window);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile, { passive: true });
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const onMouseEnter = useCallback((e: Event) => {
    const target = e.currentTarget as HTMLElement;
    const text = target.getAttribute("data-cursor") || "";
    setHoverText(text);
    setVisible(true);
  }, []);

  const onMouseLeave = useCallback(() => {
    setVisible(false);
    setHoverText("");
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const onMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });

    function attachListeners() {
      const targets = document.querySelectorAll<HTMLElement>("[data-cursor]");
      targets.forEach((target) => {
        target.removeEventListener("mouseenter", onMouseEnter);
        target.removeEventListener("mouseleave", onMouseLeave);
        target.addEventListener("mouseenter", onMouseEnter);
        target.addEventListener("mouseleave", onMouseLeave);
      });
    }

    attachListeners();

    const observer = new MutationObserver(() => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
      debounceRef.current = setTimeout(attachListeners, 200);
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      observer.disconnect();
      if (debounceRef.current) clearTimeout(debounceRef.current);
      const targets = document.querySelectorAll<HTMLElement>("[data-cursor]");
      targets.forEach((target) => {
        target.removeEventListener("mouseenter", onMouseEnter);
        target.removeEventListener("mouseleave", onMouseLeave);
      });
    };
  }, [isMobile, cursorX, cursorY, onMouseEnter, onMouseLeave]);

  if (isMobile) return null;

  return (
    <motion.div
      ref={tagRef}
      className="fixed top-0 left-0 z-9990 pointer-events-none gpu-layer"
      style={{ x, y }}
    >
      <motion.div
        className="absolute -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-accent shadow-[0_0_8px_var(--accent-glow)]"
        animate={{
          scale: visible ? 0 : 1,
          opacity: visible ? 0 : 0.9,
        }}
        transition={{ duration: 0.15 }}
      />

      <motion.div
        className="absolute left-2 top-4 whitespace-nowrap px-3.5 py-1.5 rounded-md bg-accent text-bg-primary text-xs font-semibold font-body tracking-wide shadow-[0_0_16px_var(--accent-glow)]"
        initial={{ opacity: 0, scale: 0.8, y: 10 }}
        animate={{
          opacity: visible ? 1 : 0,
          scale: visible ? 1 : 0.8,
          y: visible ? 0 : 10,
        }}
        transition={{ duration: 0.15 }}
      >
        {hoverText}
      </motion.div>
    </motion.div>
  );
}
