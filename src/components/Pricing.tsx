"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Shield, Crown, Check } from "lucide-react";

function AnimatedPrice({
  target,
  inView,
}: {
  target: number;
  inView: boolean;
}) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1200;
    const startTime = performance.now();

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      start = eased * target;
      setValue(start);
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [inView, target]);

  return <span>{value.toFixed(2)}</span>;
}

const plans = [
  {
    name: "Silver",
    icon: Shield,
    price: 14.99,
    color: "#a1a1aa",
    gradient: "from-zinc-400 to-zinc-600",
    borderGlow: "rgba(161, 161, 170, 0.2)",
    features: [
      "Advanced search filters",
      "Explore projects by sector",
      "Connect with aligned profiles",
      "Early access to new features",
      "Community discussions",
    ],
    popular: false,
  },
  {
    name: "Gold",
    icon: Crown,
    price: 29.99,
    color: "#f59e0b",
    gradient: "from-accent-bright to-accent",
    borderGlow: "rgba(245, 158, 11, 0.2)",
    features: [
      "Precision matchmaking",
      "Exclusive project types",
      "Premium support",
      "Enhanced visibility",
      "Priority matching queue",
      "Advanced analytics",
    ],
    popular: true,
  },
];

export default function Pricing() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="pricing" ref={ref} data-snap-section className="relative min-h-screen py-16 flex flex-col justify-center overflow-hidden bg-bg-pricing">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-bg-secondary/50 to-transparent" />
      </div>

      <div className="relative max-w-5xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-accent text-sm font-semibold tracking-[0.2em] uppercase mb-4 block">
            Pricing
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-text-primary mb-6">
            Freemium Model
          </h2>
          <p className="max-w-xl mx-auto text-text-secondary text-lg text-center">
            Start free, upgrade when you&apos;re ready. Choose the plan that matches your ambition.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`relative group ${plan.popular ? "md:-mt-4 md:mb-[-16px]" : ""}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <span className="px-4 py-1.5 text-xs font-bold tracking-wider uppercase bg-linear-to-r from-accent-bright to-accent text-bg-primary rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <div
                className="relative h-full p-8 lg:p-10 rounded-2xl border bg-bg-secondary/30 overflow-hidden transition-all duration-500"
                style={{
                  borderColor: plan.popular
                    ? "rgba(245, 158, 11, 0.2)"
                    : "var(--border)",
                }}
                data-cursor={plan.name}
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                  style={{
                    background: `radial-gradient(circle at 50% 0%, ${plan.borderGlow}, transparent 60%)`,
                  }}
                />

                <div className="relative">
                  <div className="flex items-center gap-3 mb-6">
                    <div
                      className={`w-12 h-12 rounded-xl bg-linear-to-br ${plan.gradient} flex items-center justify-center`}
                    >
                      <plan.icon size={22} className="text-bg-primary" />
                    </div>
                    <h3 className="font-display text-2xl font-bold text-text-primary">
                      {plan.name}
                    </h3>
                  </div>

                  <div className="mb-8">
                    <span className="text-5xl font-bold text-text-primary font-display">
                      $<AnimatedPrice target={plan.price} inView={inView} />
                    </span>
                    <span className="text-text-muted ml-2">/month</span>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, i) => (
                      <motion.li
                        key={feature}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + i * 0.08 }}
                        className="flex items-center gap-3"
                      >
                        <Check
                          size={16}
                          style={{ color: plan.color }}
                          className="shrink-0"
                        />
                        <span className="text-text-secondary text-sm">
                          {feature}
                        </span>
                      </motion.li>
                    ))}
                  </ul>

                  <a
                    href="https://tally.so/r/nGygZp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block w-full py-3.5 rounded-xl text-center font-semibold transition-all duration-300 ${
                      plan.popular
                        ? "bg-linear-to-r from-accent-bright to-accent text-bg-primary hover:shadow-[0_0_30px_var(--accent-glow-strong)]"
                        : "border border-border text-text-primary hover:border-text-muted hover:bg-bg-elevated"
                    }`}
                    data-cursor="Join now"
                  >
                    Join the Waitlist
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
