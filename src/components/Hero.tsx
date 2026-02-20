"use client";

import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useRef } from "react";


const LETTERS = ["H", "I", "V", "I", "N", "S"];

const EASE_OUT_EXPO = [0.22, 1, 0.36, 1] as const;

const letterReveal = {
  hidden: { y: "110%" },
  visible: (i: number) => ({
    y: "0%",
    transition: {
      duration: 0.75,
      delay: 0.5 + i * 0.07,
      ease: EASE_OUT_EXPO,
    },
  }),
};

const particles = [
  { left: "7%", size: 3, dur: 14, delay: 0, drift: 25 },
  { left: "27%", size: 4, dur: 12, delay: 1, drift: 32 },
  { left: "50%", size: 3, dur: 13, delay: 2, drift: 16 },
  { left: "73%", size: 3, dur: 14, delay: 0.8, drift: 20 },
  { left: "92%", size: 3, dur: 13, delay: 1.5, drift: 26 },
  { left: "44%", size: 3, dur: 14, delay: 8, drift: -15 },
];

function GradientOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(85vw,720px)] aspect-square rounded-full gpu-layer"
        style={{
          background:
            "radial-gradient(circle, rgba(245,158,11,0.14) 0%, rgba(245,158,11,0.03) 50%, transparent 70%)",
          filter: "blur(30px)",
        }}
      />
      <div
        className="absolute top-[22%] left-[58%] w-[min(50vw,440px)] aspect-square rounded-full animate-[mesh-drift_12s_ease-in-out_infinite] gpu-layer"
        style={{
          background:
            "radial-gradient(circle, rgba(251,113,133,0.06) 0%, transparent 60%)",
          filter: "blur(40px)",
        }}
      />
      <div
        className="absolute top-[62%] left-[18%] w-[min(42vw,360px)] aspect-square rounded-full animate-[mesh-drift-reverse_10s_ease-in-out_infinite] gpu-layer"
        style={{
          background:
            "radial-gradient(circle, rgba(167,139,250,0.04) 0%, transparent 60%)",
          filter: "blur(40px)",
        }}
      />
    </div>
  );
}

function DotGrid() {
  return (
    <div
      className="absolute inset-0 pointer-events-none opacity-[0.035]"
      style={{
        backgroundImage:
          "radial-gradient(rgba(245,158,11,0.5) 1px, transparent 1px)",
        backgroundSize: "36px 36px",
      }}
    />
  );
}

function OrbitalRings() {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
      <svg
        width="800"
        height="800"
        viewBox="0 0 800 800"
        fill="none"
        className="w-[min(95vw,820px)] h-auto opacity-[0.05] animate-[spin_120s_linear_infinite] gpu-layer"
      >
        <circle
          cx="400"
          cy="400"
          r="345"
          stroke="#f59e0b"
          strokeWidth="0.5"
          strokeDasharray="4 16"
        />
        <circle
          cx="400"
          cy="400"
          r="275"
          stroke="#fbbf24"
          strokeWidth="0.3"
          strokeDasharray="2 22"
        />
      </svg>
      <svg
        width="800"
        height="800"
        viewBox="0 0 800 800"
        fill="none"
        className="absolute top-0 left-0 w-full h-full opacity-[0.04] animate-[counter-spin_90s_linear_infinite] gpu-layer"
      >
        <circle
          cx="400"
          cy="400"
          r="315"
          stroke="#f59e0b"
          strokeWidth="0.4"
          strokeDasharray="6 24"
        />
      </svg>
    </div>
  );
}

function Embers() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p, i) => (
        <div
          key={i}
          className="absolute bottom-0 rounded-full gpu-layer"
          style={
            {
              left: p.left,
              width: p.size,
              height: p.size,
              background: "rgba(245,158,11,0.7)",
              boxShadow: `0 0 ${p.size * 3}px rgba(245,158,11,0.3)`,
              animation: `ember-float ${p.dur}s linear infinite`,
              animationDelay: `${p.delay}s`,
              "--drift-x": `${p.drift}px`,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <section
      ref={sectionRef}
      data-snap-section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-bg-hero"
    >
      <motion.div className="absolute inset-0 gpu-layer" style={{ scale: bgScale }}>
        <GradientOrbs />
        <DotGrid />
        <OrbitalRings />
        <Embers />
      </motion.div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* HIVINS — letter-by-letter clip reveal */}
        <div className="mb-4">
          <div className="flex items-baseline justify-center">
            {LETTERS.map((letter, i) => (
              <span key={i} className="inline-block overflow-hidden">
                <motion.span
                  custom={i}
                  variants={letterReveal}
                  initial="hidden"
                  animate="visible"
                  className="inline-block font-display text-[clamp(5rem,16vw,13rem)] font-bold leading-[0.85] text-gradient"
                  style={{ letterSpacing: "0.015em" }}
                >
                  {letter}
                </motion.span>
              </span>
            ))}
          </div>
        </div>

        {/* Decorative divider */}
        <div className="flex justify-center mb-8">
          <motion.div
            className="h-px bg-linear-to-r from-transparent via-amber-500/40 to-transparent"
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 180, opacity: 1 }}
            transition={{
              delay: 1.1,
              duration: 0.8,
              ease: EASE_OUT_EXPO,
            }}
          />
        </div>

        {/* Tagline */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 mb-14">
          {["MAKE", "IT", "HAPPEN"].map((word, i) => (
            <motion.span
              key={i}
              className="font-body text-lg sm:text-xl md:text-2xl font-light tracking-[0.35em] text-text-primary/70"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 1.3 + i * 0.12,
                duration: 0.6,
                ease: EASE_OUT_EXPO,
              }}
            >
              {word}
            </motion.span>
          ))}
        </div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.7 }}
          className="max-w-xl mx-auto mb-12"
        >
          <p className="text-text-secondary text-base sm:text-lg leading-relaxed font-body text-center">
            Connect with people who share your energy and ambition. Join a real family — supportive, driven, ready to dream big. Together, we transform the world.
          </p>
        </motion.div>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.1, duration: 0.6 }}
        >
          <a
            href="https://tally.so/r/nGygZp"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-2.5 px-9 py-4 text-base font-semibold text-bg-primary bg-accent rounded-xl overflow-hidden transition-all duration-500 hover:shadow-[0_0_50px_var(--accent-glow-strong)]"
            data-cursor="Let's go!"
          >
            <span className="relative z-10 font-body">
              Join the Waitlist
            </span>
            <ArrowRight
              size={18}
              className="relative z-10 transition-transform duration-300 group-hover:translate-x-1"
            />
            <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out bg-linear-to-r from-transparent via-white/25 to-transparent" />
          </a>
          <a
            href="#profiles"
            className="group inline-flex items-center gap-2.5 px-9 py-4 text-base font-medium font-body text-text-secondary border border-white/8 rounded-xl hover:border-accent/30 hover:text-accent hover:bg-accent/3 transition-all duration-500"
            data-cursor="Explore"
          >
            Discover Your Profile
            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#founders"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-text-muted/60 hover:text-accent transition-colors duration-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.6 }}
      >
        <span className="text-[10px] font-medium tracking-[0.3em] uppercase font-body">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={14} />
        </motion.div>
      </motion.a>
    </section>
  );
}
