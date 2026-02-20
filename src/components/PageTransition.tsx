"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const GRID_COLS = 8;
const GRID_ROWS = 6;
const TOTAL_BLOCKS = GRID_COLS * GRID_ROWS;

function shuffleArray(arr: number[]) {
  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export default function PageTransition() {
  const [showTransition, setShowTransition] = useState(true);
  const [showLogo, setShowLogo] = useState(false);
  const [fadeOutBlocks, setFadeOutBlocks] = useState(false);
  const randomOrder = useRef(shuffleArray(Array.from({ length: TOTAL_BLOCKS }, (_, i) => i)));

  useEffect(() => {
    const isFirstLoad = !sessionStorage.getItem("hivin_visited");

    if (!isFirstLoad) {
      setShowTransition(false);
      return;
    }

    sessionStorage.setItem("hivin_visited", "true");
    document.body.style.overflow = "hidden";

    const logoTimer = setTimeout(() => setShowLogo(true), 300);
    const fadeTimer = setTimeout(() => {
      setShowLogo(false);
      setFadeOutBlocks(true);
    }, 1800);
    const hideTimer = setTimeout(() => {
      setShowTransition(false);
      document.body.style.overflow = "";
    }, 2800);

    return () => {
      clearTimeout(logoTimer);
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {showTransition && (
        <motion.div
          className="fixed inset-0 z-9999 pointer-events-auto"
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${GRID_COLS}, 1fr)`,
            gridTemplateRows: `repeat(${GRID_ROWS}, 1fr)`,
          }}
        >
          {Array.from({ length: TOTAL_BLOCKS }, (_, i) => {
            const order = randomOrder.current.indexOf(i);
            const staggerDelay = (order / TOTAL_BLOCKS) * 0.6;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 1 }}
                animate={
                  fadeOutBlocks
                    ? { opacity: 0, transition: { delay: staggerDelay, duration: 0.08 } }
                    : { opacity: 1 }
                }
                className="w-full h-full"
                style={{
                  backgroundColor: i % 3 === 0
                    ? "#1a1917"
                    : i % 3 === 1
                    ? "#1f1e1b"
                    : "#151412",
                }}
              />
            );
          })}

          <AnimatePresence>
            {showLogo && (
              <motion.div
                className="fixed inset-0 z-10000 flex items-center justify-center pointer-events-none"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.1 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="flex items-center gap-4">
                  <Image
                    src="/logo.svg"
                    alt="Hivin"
                    width={60}
                    height={60}
                    className="rounded-xl"
                  />
                  <span className="font-body text-5xl sm:text-6xl font-bold tracking-tight text-gradient">
                    HIVIN
                  </span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
