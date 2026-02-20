"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";

export const lenisRef: { current: Lenis | null } = { current: null };
export const scrollProgress = { value: 0 };

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  const lenisInstanceRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

    const lenis = new Lenis({
      duration: isSafari ? 1.0 : 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    lenisInstanceRef.current = lenis;
    lenisRef.current = lenis;

    lenis.on("scroll", ({ progress }: { progress: number }) => {
      scrollProgress.value = progress;
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  return <>{children}</>;
}
