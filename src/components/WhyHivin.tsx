"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import {
  Users,
  AlertTriangle,
  HeartCrack,
  Fingerprint,
  ShieldCheck,
  TrendingUp,
  Zap,
  Globe,
  Briefcase,
  Search,
} from "lucide-react";
import { useRef } from "react";

const stats = [
  {
    value: "400M+",
    label: "builders worldwide, still searching for the right co-pilot",
    icon: Users,
  },
  {
    value: "65%",
    label: "of startups die from team misalignment, not bad ideas",
    icon: AlertTriangle,
  },
  {
    value: "7/10",
    label: "founders admit they feel isolated, despite being \"connected\"",
    icon: HeartCrack,
  },
];

const problems = [
  {
    text: "Platforms judge you by your CV, your title, your LinkedIn headline. Not who you actually are.",
    icon: Search,
  },
  {
    text: "Built for Silicon Valley insiders. Not for the kid in Casablanca with a world-changing idea.",
    icon: Zap,
  },
  {
    text: "Optimized for engagement metrics. Not for the kind of connection that actually leads somewhere.",
    icon: HeartCrack,
  },
];

const whyNow = [
  {
    title: "People Want More Than a Paycheck",
    description:
      "The 9-to-5 deal is broken. A whole generation is choosing purpose over comfort, and they need the right people beside them.",
    icon: TrendingUp,
  },
  {
    title: "We Have Every Tool. Except This One.",
    description:
      "You can build an app in a weekend. Launch a brand from your phone. But finding someone who actually gets your vision? Still impossible.",
    icon: Briefcase,
  },
  {
    title: "Builders Are Everywhere. Trust Isn\u2019t.",
    description:
      "More freelancers, more solo founders, more side projects than ever. But real trust takes more than a Slack channel and a LinkedIn request.",
    icon: Globe,
  },
];

const differentiators = [
  {
    title: "Your Mind Is Your Profile",
    description:
      "Forget the resume. Hivin reads what actually matters: your values, your drive, how you think. That\u2019s what creates a real match.",
    icon: Fingerprint,
  },
  {
    title: "Connections That Grow With You",
    description:
      "One-time matches are a dead end. Hivin learns and adapts as you evolve, so your connections stay relevant. Not stale.",
    icon: TrendingUp,
  },
  {
    title: "A Community, Not a Feed",
    description:
      "No vanity metrics. No cold outreach. Just a curated space where people show up to build, grow, and actually help each other.",
    icon: ShieldCheck,
  },
];

export default function WhyHivin() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const headingY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const statsY = useTransform(scrollYProgress, [0, 1], [40, -30]);
  const cardsY = useTransform(scrollYProgress, [0, 1], [30, -20]);
  const bgGlowY = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section
      ref={sectionRef}
      id="why"
      data-snap-section
      className="relative min-h-screen py-24 flex flex-col justify-center overflow-hidden bg-bg-whyhivin"
    >
      <motion.div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-accent/3 blur-[100px] pointer-events-none"
        style={{ y: bgGlowY }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <motion.div style={{ y: headingY }}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <span className="text-accent text-sm font-semibold tracking-[0.2em] uppercase mb-4 block">
              The Real Question
            </span>
            <h2 className="font-(family-name:--font-display) text-4xl sm:text-5xl md:text-6xl font-bold text-text-primary mb-6">
              Why Hivin?
            </h2>
            <p className="max-w-2xl mx-auto text-text-secondary text-lg leading-relaxed">
              You&apos;ve got the idea. You&apos;ve got the drive. But the people
              around you don&apos;t get it. And the platforms built to help?
              They don&apos;t get you either.
            </p>
          </motion.div>
        </motion.div>

        {/* Stats */}
        <motion.div
          style={{ y: statsY }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.value}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative p-8 rounded-2xl border border-border bg-bg-secondary/50 text-center hover:border-accent/25 transition-all duration-500"
            >
              <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <stat.icon
                  size={28}
                  className="mx-auto mb-4 text-accent/60"
                />
                <div className="text-4xl sm:text-5xl font-black text-accent mb-3">
                  {stat.value}
                </div>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Current problems */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mx-auto mb-24"
        >
          <h3 className="text-center text-text-muted text-xs font-semibold tracking-[0.25em] uppercase mb-8">
            Sound familiar?
          </h3>
          <div className="flex flex-col gap-4">
            {problems.map((problem, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-center gap-4 px-6 py-4 rounded-xl border border-border/50 bg-bg-card/30"
              >
                <problem.icon
                  size={18}
                  className="shrink-0 text-accent-rose"
                />
                <span className="text-text-secondary text-[15px]">
                  {problem.text}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Why Now */}
        <motion.div style={{ y: cardsY }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="text-center mb-14"
          >
            <span className="text-accent text-sm font-semibold tracking-[0.2em] uppercase mb-4 block">
              Why Now
            </span>
            <h3 className="font-(family-name:--font-display) text-3xl sm:text-4xl font-bold text-text-primary">
              The world changed. Networking didn&apos;t.
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            {whyNow.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative p-8 rounded-2xl border border-border bg-bg-secondary/40 hover:border-accent/20 hover:bg-bg-card/60 transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/15 transition-colors duration-300">
                  <item.icon size={22} className="text-accent" />
                </div>
                <h4 className="font-(family-name:--font-display) text-xl font-bold text-text-primary mb-3">
                  {item.title}
                </h4>
                <p className="text-text-secondary text-[15px] leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* The Hivin Approach */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="text-accent text-sm font-semibold tracking-[0.2em] uppercase mb-4 block">
            So We Built Something Different
          </span>
          <h3 className="font-(family-name:--font-display) text-3xl sm:text-4xl font-bold text-text-primary mb-4">
            Hivin doesn&apos;t match profiles. It matches people.
          </h3>
          <p className="max-w-xl mx-auto text-text-secondary text-base">
            The messy, ambitious, complicated parts that actually matter.
            Not your job title. Not your follower count. You.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {differentiators.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative p-8 rounded-2xl border border-accent/10 bg-linear-to-br from-accent/5 to-transparent hover:border-accent/25 transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors duration-300">
                <item.icon size={22} className="text-accent" />
              </div>
              <h4 className="font-(family-name:--font-display) text-xl font-bold text-text-primary mb-3">
                {item.title}
              </h4>
              <p className="text-text-secondary text-[15px] leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
