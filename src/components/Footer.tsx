"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

export default function Footer() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.4], [80, 0]);

  return (
    <footer
      ref={ref}
      data-snap-section
      className="relative min-h-screen flex flex-col justify-between bg-bg-footer-cta overflow-hidden"
    >
      {/* Giant HIVINS watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="text-[20vw] font-display font-bold text-white/1.5 tracking-[0.15em] leading-none">
          HIVINS
        </span>
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-accent/5 blur-[80px]" />
      </div>

      {/* Main CTA content */}
      <motion.div
        className="relative flex-1 flex flex-col items-center justify-center px-6 text-center py-32"
        style={{ opacity, y }}
      >
        <h2 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold text-text-primary mb-6 leading-tight max-w-4xl">
          Alone, you can change your life.
          <br />
          <span className="text-gradient-multi">
            Together, we transform the world.
          </span>
        </h2>

        <p className="text-text-secondary text-lg max-w-lg mb-12">
          We&apos;d love to hear your thoughts. Join the waitlist and be part of
          something extraordinary.
        </p>

        <a
          href="https://tally.so/r/nGygZp"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-flex items-center gap-3 px-10 py-5 text-lg font-semibold text-bg-primary bg-accent rounded-full overflow-hidden shadow-[0_0_40px_var(--accent-glow)] hover:shadow-[0_0_80px_var(--accent-glow-strong)] transition-all duration-500"
          data-cursor="Let's go!"
        >
          <span className="relative z-10 flex items-center gap-3">
            Join the Waitlist
            <ArrowRight
              size={20}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </span>
          <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out bg-linear-to-r from-transparent via-white/20 to-transparent" />
        </a>
      </motion.div>

      {/* Footer bar */}
      <div className="relative border-t border-white/5 bg-bg-footer-bar">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo */}
            <div className="flex items-center gap-2.5" data-cursor="Home">
              <Image
                src="/logo.svg"
                alt="Hivins"
                width={30}
                height={30}
                className="rounded-lg"
              />
              <span className="font-display text-lg font-semibold text-gradient">
                Hivins
              </span>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-4">
              <a
                href="mailto:contact@hivinscorporation.com"
                className="group w-10 h-10 rounded-full border border-white/8 flex items-center justify-center text-text-muted hover:text-accent-bright hover:border-accent/40 transition-all duration-500"
                aria-label="Email"
                data-cursor="Email us"
              >
                <Mail size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/aunraz"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-10 h-10 rounded-full border border-white/8 flex items-center justify-center text-text-muted hover:text-accent-rose hover:border-accent-rose/30 transition-all duration-500"
                aria-label="LinkedIn - Aun Raza"
                data-cursor="Aun's LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/mickael-chiron"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-10 h-10 rounded-full border border-white/8 flex items-center justify-center text-text-muted hover:text-accent-violet hover:border-accent-violet/30 transition-all duration-500"
                aria-label="LinkedIn - Mickaël Chiron"
                data-cursor="Mickaël's LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>

            {/* Legal */}
            <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-text-muted">
              <span>&copy; 2026 Hivins Corporation</span>
              <span className="hidden sm:block">&middot;</span>
              <div className="flex gap-4">
                <a
                  href="https://www.iubenda.com/privacy-policy/13429051"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent-bright transition-colors duration-300"
                >
                  Privacy Policy
                </a>
                <a
                  href="https://www.iubenda.com/privacy-policy/13429051/cookie-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent-bright transition-colors duration-300"
                >
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
