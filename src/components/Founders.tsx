"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const founders = [
  {
    name: "Mickaël Chiron",
    role: "Founder & CEO",
    photo: "/Mickaël.jpg",
    bio: "Hivins is the solution Mickaël was looking for, so he decided to build it. Driven by a desire to spark change, he sees Hivins as a global lever to accelerate creation in a world undergoing major transformations. His background combines sales expertise, recruitment, and technical team management, with one constant: building projects from the ground up.",
    gradient: "from-accent to-accent-dim",
    delay: 0,
  },
  {
    name: "Aun Raza",
    role: "Co-founder & Head of Technology",
    photo: "/aun.jpg",
    bio: "Aun joins Hivins as Co-founder and Head of Technology, bringing a strong background in software development, AI and leadership. Both a hands-on builder and experienced manager, he is driven by the mission of connecting the right people with the right minds, making Hivins a catalyst for innovation.",
    gradient: "from-accent-bright to-accent",
    delay: 0.2,
  },
];

export default function Founders() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bgScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.15, 1, 1.05]);
  const headingY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const photoY = useTransform(scrollYProgress, [0, 1], [35, -55]);
  const card0Y = useTransform(scrollYProgress, [0, 1], [25, -25]);
  const card1Y = useTransform(scrollYProgress, [0, 1], [45, -35]);
  const bgGlowY = useTransform(scrollYProgress, [0, 1], [80, -80]);

  const cardYValues = [card0Y, card1Y];

  return (
    <section ref={sectionRef} id="founders" data-snap-section className="relative min-h-screen py-16 flex flex-col justify-center overflow-hidden bg-bg-founders">
      <motion.div className="absolute inset-0" style={{ scale: bgScale }}>
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-accent/2 to-transparent" />
      </motion.div>

      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-accent/4 blur-[80px] pointer-events-none"
        style={{ y: bgGlowY }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div style={{ y: headingY }}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <span className="text-accent text-sm font-semibold tracking-[0.2em] uppercase mb-4 block">
              The Team
            </span>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-text-primary">
              Founding Members
            </h2>
          </motion.div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {founders.map((founder, index) => (
            <motion.div
              key={founder.name}
              initial={{ opacity: 0, x: index === 0 ? -60 : 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.8,
                delay: founder.delay,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{ y: cardYValues[index] }}
              className="group relative"
            >
              <div
                className="relative p-8 lg:p-10 rounded-2xl border border-border bg-bg-secondary/50 transition-all duration-500 hover:border-accent/20 hover:bg-bg-card/80"
                data-cursor={founder.name.split(" ")[0]}
              >
                <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative flex flex-col sm:flex-row gap-6">
                  <div className="shrink-0">
                    <motion.div
                      className="relative w-20 h-20 rounded-2xl overflow-hidden ring-2 ring-accent/20 group-hover:ring-accent/40 transition-all duration-500 shadow-lg parallax-img"
                      style={{ y: photoY }}
                    >
                      <Image
                        src={founder.photo}
                        alt={founder.name}
                        fill
                        className="object-cover"
                        sizes="80px"
                      />
                    </motion.div>
                  </div>

                  <div className="flex-1">
                    <h3 className="font-display text-2xl font-bold text-text-primary mb-1">
                      {founder.name}
                    </h3>
                    <p className="text-accent font-medium text-sm mb-4">
                      {founder.role}
                    </p>
                    <p className="text-text-secondary leading-relaxed text-[15px]">
                      {founder.bio}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
