"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const founders = [
  {
    name: "Mickaël Chiron",
    role: "Founder & CEO",
    photo: "/Mickaël.jpg",
    bio: "Hiven is the solution Mickaël was looking for, so he decided to build it. Driven by a desire to spark change, he sees Hiven as a global lever to accelerate creation in a world undergoing major transformations. His background combines sales expertise, recruitment, and technical team management, with one constant: building projects from the ground up.",
    gradient: "from-accent to-accent-dim",
    delay: 0,
  },
  {
    name: "Aun Raza",
    role: "Co-founder & Head of Technology",
    photo: "/aun.jpg",
    bio: "Aun joins Hiven as Co-founder and Head of Technology, bringing a strong background in software development, AI and leadership. Both a hands-on builder and experienced manager, he is driven by the mission of connecting the right people with the right minds, making Hiven a catalyst for innovation.",
    gradient: "from-accent-bright to-accent",
    delay: 0.2,
  },
];

export default function Founders() {
  return (
    <section id="founders" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/[0.02] to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
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
          <h2 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl md:text-6xl font-bold text-text-primary">
            Founding Members
          </h2>
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
              className="group relative"
            >
              <div className="relative p-8 lg:p-10 rounded-2xl border border-border bg-bg-secondary/50 backdrop-blur-sm transition-all duration-500 hover:border-accent/20 hover:bg-bg-card/80 hover:shadow-[0_0_60px_var(--accent-glow)]">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative flex flex-col sm:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className={`relative w-20 h-20 rounded-2xl overflow-hidden ring-2 ring-accent/20 group-hover:ring-accent/40 transition-all duration-500 shadow-lg`}>
                      <Image
                        src={founder.photo}
                        alt={founder.name}
                        fill
                        className="object-cover"
                        sizes="80px"
                      />
                    </div>
                  </div>

                  <div className="flex-1">
                    <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold text-text-primary mb-1">
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
