"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Brain, Heart, Flame } from "lucide-react";

function AnimatedWave({
  color,
  amplitude,
  frequency,
  phase,
  delay,
}: {
  color: string;
  amplitude: number;
  frequency: number;
  phase: number;
  delay: number;
}) {
  const points = 100;
  const path = Array.from({ length: points + 1 }, (_, i) => {
    const x = (i / points) * 100;
    const y =
      50 +
      amplitude *
        Math.sin((i / points) * Math.PI * 2 * frequency + phase);
    return `${i === 0 ? "M" : "L"} ${x} ${y}`;
  }).join(" ");

  return (
    <motion.path
      d={path}
      fill="none"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      initial={{ pathLength: 0, opacity: 0 }}
      whileInView={{ pathLength: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 2, delay, ease: "easeOut" }}
    />
  );
}

function ProgressRing({
  progress,
  color,
  delay,
}: {
  progress: number;
  color: string;
  delay: number;
}) {
  const circumference = 2 * Math.PI * 32;

  return (
    <svg width="80" height="80" viewBox="0 0 80 80" className="-rotate-90">
      <circle
        cx="40"
        cy="40"
        r="32"
        fill="none"
        stroke="rgba(255,255,255,0.06)"
        strokeWidth="3"
      />
      <motion.circle
        cx="40"
        cy="40"
        r="32"
        fill="none"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray={circumference}
        initial={{ strokeDashoffset: circumference }}
        whileInView={{ strokeDashoffset: circumference * (1 - progress) }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay, ease: "easeOut" }}
      />
    </svg>
  );
}

const traits = [
  {
    title: "Inner Personality",
    description:
      "This reveals how you naturally perceive, feel, and navigate the world. Are you intuitive or analytical? Expressive or reserved? It's all about your spontaneous tendencies.",
    icon: Brain,
    color: "#fbbf24",
    progress: 0.78,
  },
  {
    title: "Core Value",
    description:
      "What principle guides your life at the deepest level? Whether it's freedom, impact, kindness, or creativity, your core value shapes your decisions and connections.",
    icon: Heart,
    color: "#f59e0b",
    progress: 0.65,
  },
  {
    title: "Vital Energy",
    description:
      "How does your energy feel? Calm and grounded, fiery and driven, turbulent and shifting, or balanced and in flow? Your energy is your current inner rhythm.",
    icon: Flame,
    color: "#b45309",
    progress: 0.85,
  },
];

export default function FrequencyForm() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section
      id="frequency"
      ref={ref}
      data-snap-section
      className="relative min-h-screen py-16 flex flex-col justify-center overflow-hidden bg-bg-frequency"
    >
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-accent/3 blur-[60px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <span className="text-accent text-sm font-semibold tracking-[0.2em] uppercase mb-4 block">
            Unique to You
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-text-primary mb-6">
            Your Frequency Form
          </h2>
          <p className="max-w-2xl mx-auto text-text-secondary text-lg leading-relaxed text-center">
            We don&apos;t match appearances — we match minds. Your frequency form is a one-of-a-kind signature that deeply reflects who you truly are.
          </p>
        </motion.div>

        {/* Animated wave visualization */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative max-w-3xl mx-auto mb-20 h-40"
        >
          {mounted && (
            <svg
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              className="w-full h-full"
            >
              <AnimatedWave
                color="rgba(251, 191, 36, 0.6)"
                amplitude={15}
                frequency={2}
                phase={0}
                delay={0.3}
              />
              <AnimatedWave
                color="rgba(245, 158, 11, 0.4)"
                amplitude={12}
                frequency={3}
                phase={1.5}
                delay={0.6}
              />
              <AnimatedWave
                color="rgba(180, 83, 9, 0.3)"
                amplitude={18}
                frequency={1.5}
                phase={3}
                delay={0.9}
              />
            </svg>
          )}

          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-20 bg-accent/10 blur-[60px] rounded-full" />
        </motion.div>

        {/* Trait cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {traits.map((trait, index) => (
            <motion.div
              key={trait.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative p-8 rounded-2xl border border-border bg-bg-secondary/50 hover:border-accent/20 transition-all duration-500"
              data-cursor={trait.title}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="relative">
                  <ProgressRing
                    progress={inView ? trait.progress : 0}
                    color={trait.color}
                    delay={0.5 + index * 0.2}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <trait.icon
                      size={24}
                      style={{ color: trait.color }}
                    />
                  </div>
                </div>
                <h3 className="font-display text-xl font-bold text-text-primary">
                  {trait.title}
                </h3>
              </div>

              <p className="text-text-secondary leading-relaxed text-[15px]">
                {trait.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center mt-12 text-text-muted italic font-display text-lg"
        >
          And much more to come...
        </motion.p>
      </div>
    </section>
  );
}
