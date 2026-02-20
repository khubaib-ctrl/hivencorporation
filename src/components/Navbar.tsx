"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { href: "#founders", label: "About" },
  { href: "#profiles", label: "Profiles" },
  { href: "#frequency", label: "Frequency" },
  { href: "#pricing", label: "Pricing" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-glass backdrop-blur-md border-b border-glass-border shadow-[0_4px_20px_rgba(0,0,0,0.3)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <a href="#" className="flex items-center gap-2.5 group" data-cursor="Home">
              <Image
                src="/logo.svg"
                alt="Hivins"
                width={32}
                height={32}
                className="rounded-lg"
              />
              <span className="font-body text-xl font-bold text-accent tracking-tight group-hover:text-accent-bright transition-colors duration-300">
                HIVINS
              </span>
            </a>

            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link, i) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="relative px-5 py-2 text-sm font-medium text-text-secondary hover:text-text-primary transition-colors duration-300"
                  onMouseEnter={() => setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  data-cursor={link.label}
                >
                  {hoveredIndex === i && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute inset-0 rounded-lg border border-accent/25 bg-accent/8 shadow-[0_0_16px_var(--accent-glow)]"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                    />
                  )}
                  <span className="relative z-10">
                    {link.label}
                  </span>
                </a>
              ))}
            </div>

            <div className="hidden md:block">
              <a
                href="https://tally.so/r/nGygZp"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-2.5 text-sm font-semibold text-bg-primary bg-accent rounded-lg transition-all duration-300 hover:bg-accent-bright"
                data-cursor="Join us!"
              >
                Join Waitlist
              </a>
            </div>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden text-text-primary p-2"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-bg-primary/95 backdrop-blur-xl pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="text-2xl font-display font-semibold text-text-primary hover:text-accent transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="https://tally.so/r/nGygZp"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
                className="inline-flex items-center justify-center px-8 py-3 text-lg font-semibold text-bg-primary bg-accent rounded-lg mt-4"
              >
                Join Waitlist
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
