"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Compass, Lightbulb, Zap } from "lucide-react";


const profiles = [
  {
    title: "Explorer",
    description:
      "You're ready to dive into a project that inspires you. You want to contribute your skills to a meaningful adventure.",
    icon: Compass,
    accent: "from-amber-400 to-orange-500",
    glowColor: "rgba(251, 191, 36, 0.15)",
  },
  {
    title: "Visionary",
    description:
      "You already have an idea. You're looking for the right people to bring it to life with you.",
    icon: Lightbulb,
    accent: "from-yellow-300 to-amber-500",
    glowColor: "rgba(245, 158, 11, 0.15)",
  },
  {
    title: "Brainstormer",
    description:
      "You don't have a precise idea yet. You want to find people to think, imagine and co-create something from scratch.",
    icon: Zap,
    accent: "from-orange-400 to-red-500",
    glowColor: "rgba(180, 83, 9, 0.2)",
  },
];

function TiltCard({
  children,
  glowColor,
}: {
  children: React.ReactNode;
  glowColor: string;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState("");
  const [glowPosition, setGlowPosition] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    const rotateX = (y - 0.5) * -12;
    const rotateY = (x - 0.5) * 12;
    setTransform(
      `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`
    );
    setGlowPosition({ x: x * 100, y: y * 100 });
  };

  const handleMouseLeave = () => {
    setTransform(
      "perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)"
    );
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform,
        transition: "transform 0.3s ease-out",
      }}
      className="relative"
    >
      <div
        className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${glowPosition.x}% ${glowPosition.y}%, ${glowColor}, transparent 60%)`,
        }}
      />
      {children}
    </div>
  );
}

export default function ProfileTypes() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <section id="profiles" data-snap-section className="relative min-h-screen py-16 flex flex-col justify-center overflow-hidden bg-bg-profiles">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-accent text-sm font-semibold tracking-[0.2em] uppercase mb-4 block">
            Your Journey
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-text-primary mb-6">
            Find Your Path
          </h2>
          <p className="max-w-xl mx-auto text-text-secondary text-lg text-center">
            Determine which profile best matches you. Your choice can evolve as you go — this is just the beginning.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-6 lg:gap-8"
        >
          {profiles.map((profile) => (
            <motion.div key={profile.title} variants={cardVariants}>
              <TiltCard glowColor={profile.glowColor}>
                <div
                  className="relative p-8 lg:p-10 rounded-2xl border border-border bg-bg-secondary/50 h-full transition-colors duration-500 hover:border-accent/20 group"
                  data-cursor={profile.title}
                >
                  <div
                    className={`w-14 h-14 rounded-xl bg-linear-to-br ${profile.accent} flex items-center justify-center mb-6 shadow-lg group-hover:shadow-[0_0_30px_var(--accent-glow)] transition-shadow duration-500`}
                  >
                    <profile.icon size={24} className="text-bg-primary" />
                  </div>

                  <h3 className="font-display text-2xl font-bold text-text-primary mb-3">
                    {profile.title}
                  </h3>

                  <p className="text-text-secondary leading-relaxed">
                    {profile.description}
                  </p>

                  <div className="mt-6 pt-6 border-t border-border">
                    <span className="text-accent text-sm font-medium flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
                      Learn more
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      >
                        <path
                          d="M6 12L10 8L6 4"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
