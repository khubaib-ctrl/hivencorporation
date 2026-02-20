"use client";

import { motion } from "framer-motion";
import { ArrowRight, Linkedin, Mail } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* CTA Section */}
      <section className="relative py-32">
        {/* Dramatic radial gradient */}
        <div className="absolute inset-0">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] rounded-full bg-accent/[0.06] blur-[120px]" />
          <div className="absolute bottom-[-200px] left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-accent-bright/[0.04] blur-[80px]" />
        </div>

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl md:text-7xl font-bold text-text-primary mb-6 leading-tight">
              Alone, you can change your life.
              <br />
              <span className="text-gradient">Together, we transform the world.</span>
            </h2>

            <p className="text-text-secondary text-lg mb-10 max-w-lg mx-auto">
              We&apos;d love to hear your thoughts. Don&apos;t hesitate to get
              in touch — join the waitlist and be part of something
              extraordinary.
            </p>

            <motion.a
              href="https://tally.so/r/nGygZp"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group inline-flex items-center gap-3 px-10 py-5 text-lg font-semibold text-bg-primary bg-gradient-to-r from-accent-bright to-accent rounded-full shadow-[0_0_40px_var(--accent-glow)] hover:shadow-[0_0_60px_var(--accent-glow-strong)] transition-shadow duration-500"
            >
              Join the Waitlist
              <ArrowRight
                size={20}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Footer bar */}
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo */}
            <div className="flex items-center gap-2.5">
              <Image
                src="/logo.svg"
                alt="Hiven"
                width={30}
                height={30}
                className="rounded-lg"
              />
              <span className="font-[family-name:var(--font-display)] text-lg font-semibold text-text-primary">
                Hiven
              </span>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-4">
              <a
                href="mailto:contact@hivencorporation.com"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-text-muted hover:text-accent hover:border-accent/30 transition-all duration-300"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
              <a
                href="https://linkedin.com/in/aunraz"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-text-muted hover:text-accent hover:border-accent/30 transition-all duration-300"
                aria-label="LinkedIn - Aun Raza"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/mickael-chiron"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-text-muted hover:text-accent hover:border-accent/30 transition-all duration-300"
                aria-label="LinkedIn - Mickaël Chiron"
              >
                <Linkedin size={18} />
              </a>
            </div>

            {/* Legal */}
            <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-text-muted">
              <span>&copy; 2026 Hiven Corporation</span>
              <span className="hidden sm:block">&middot;</span>
              <div className="flex gap-4">
                <a
                  href="https://www.iubenda.com/privacy-policy/13429051"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-text-secondary transition-colors"
                >
                  Privacy Policy
                </a>
                <a
                  href="https://www.iubenda.com/privacy-policy/13429051/cookie-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-text-secondary transition-colors"
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
