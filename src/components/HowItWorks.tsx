"use client";

import { motion } from "framer-motion";
import { UserPlus, FlaskConical, Sparkles } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    title: "Create Your Profile",
    description:
      "Sign up and tell us about your ambitions, skills, and what drives you forward.",
    number: "01",
  },
  {
    icon: FlaskConical,
    title: "Take the Tests",
    description:
      "A series of assessments generates your unique frequency form — your one-of-a-kind signature.",
    number: "02",
  },
  {
    icon: Sparkles,
    title: "Get Matched",
    description:
      "Our smart algorithm connects you with profiles that resonate with your energy and goals.",
    number: "03",
  },
];

export default function HowItWorks() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-accent text-sm font-semibold tracking-[0.2em] uppercase mb-4 block">
            How It Works
          </span>
          <h2 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl md:text-6xl font-bold text-text-primary mb-6">
            Ready to Match?
          </h2>
          <p className="max-w-xl mx-auto text-text-secondary text-lg">
            A smart matching algorithm connects you with the profiles that best
            align with your goals.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-[60px] left-[16.67%] right-[16.67%] h-px">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="h-full bg-gradient-to-r from-transparent via-accent/30 to-transparent origin-left"
            />
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
              className="absolute inset-0 h-full origin-left"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(90deg, var(--accent) 0, var(--accent) 6px, transparent 6px, transparent 12px)",
                opacity: 0.3,
              }}
            />
          </div>

          <div className="grid md:grid-cols-3 gap-12 md:gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-50px" }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative text-center"
              >
                {/* Step number + icon */}
                <div className="relative inline-flex mb-8">
                  <div className="w-[120px] h-[120px] rounded-full border border-border bg-bg-secondary/50 flex items-center justify-center relative group">
                    <step.icon
                      size={32}
                      className="text-accent transition-transform duration-300 group-hover:scale-110"
                    />

                    {/* Orbiting dot */}
                    <motion.div
                      className="absolute w-3 h-3 rounded-full bg-accent shadow-[0_0_12px_var(--accent-glow-strong)]"
                      style={{ top: -6 }}
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 8 + index * 2,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    >
                      <div className="w-3 h-3 rounded-full bg-accent" />
                    </motion.div>
                  </div>

                  <span className="absolute -top-2 -right-2 text-accent/20 font-[family-name:var(--font-display)] text-5xl font-bold">
                    {step.number}
                  </span>
                </div>

                <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-text-primary mb-3">
                  {step.title}
                </h3>
                <p className="text-text-secondary leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
