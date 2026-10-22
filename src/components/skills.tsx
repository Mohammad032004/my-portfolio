
"use client";

import { motion } from "framer-motion";
import {
  Code2,
  PanelsTopLeft,
  Server,
  Database,
  Cloud,
  BrainCircuit,
  Terminal,
  Wrench,
} from "lucide-react";

const skillGroups = [
  {
    title: "Frontend Development",
    description: "Building responsive, modern user interfaces.",
    icon: PanelsTopLeft,
    color: "violet",
    skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Backend Development",
    description: "Developing APIs and application logic.",
    icon: Server,
    color: "cyan",
    skills: ["Node.js", "Express.js", "REST APIs"],
  },
  {
    title: "Databases",
    description: "Storing and managing application data.",
    icon: Database,
    color: "emerald",
    skills: ["MongoDB", "MySQL"],
  },
  {
    title: "DevOps & Cloud",
    description: "Exploring deployment and infrastructure.",
    icon: Cloud,
    color: "blue",
    skills: ["Git", "GitHub", "Vercel", "Render", "Linux Basics"],
  },
  {
    title: "AI & Emerging Tech",
    description: "Exploring intelligent and emerging systems.",
    icon: BrainCircuit,
    color: "fuchsia",
    skills: ["AI & ML Fundamentals", "Prompt Engineering", "Web3 Fundamentals"],
  },
  {
    title: "Tools & Workflow",
    description: "Tools I use to build and manage projects.",
    icon: Wrench,
    color: "orange",
    skills: ["VS Code", "npm", "Postman", "Figma"],
  },
];

const colorStyles: Record<string, string> = {
  violet: "bg-violet-500/10 text-violet-300 border-violet-400/20",
  cyan: "bg-cyan-500/10 text-cyan-300 border-cyan-400/20",
  emerald: "bg-emerald-500/10 text-emerald-300 border-emerald-400/20",
  blue: "bg-blue-500/10 text-blue-300 border-blue-400/20",
  fuchsia: "bg-fuchsia-500/10 text-fuchsia-300 border-fuchsia-400/20",
  orange: "bg-orange-500/10 text-orange-300 border-orange-400/20",
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#080810] px-5 py-24 sm:px-8 lg:px-12 lg:py-32"
    >
      <div className="pointer-events-none absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-cyan-500/[0.06] blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-400/[0.06] px-4 py-2">
            <Code2 size={15} className="text-violet-300" />
            <span className="text-xs font-medium uppercase tracking-widest text-violet-200">
              My technical toolkit
            </span>
          </div>

          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Skills &{" "}
            <span className="bg-gradient-to-r from-violet-400 to-cyan-300 bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>

          <p className="mt-6 text-base leading-8 text-zinc-400 sm:text-lg">
            Technologies and tools I use to build applications, solve
            problems, and continue growing as a developer.
          </p>
        </motion.div>

        {/* Skill categories */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;

            return (
              <motion.article
                key={group.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.55,
                  delay: (index % 3) * 0.1,
                }}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 transition-colors hover:border-violet-400/25 hover:bg-white/[0.035] sm:p-7"
              >
                <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-violet-500/[0.06] blur-3xl transition group-hover:bg-violet-500/[0.12]" />

                <div className="relative">
                  <div
                    className={`mb-6 flex h-12 w-12 items-center justify-center rounded-xl border ${colorStyles[group.color]}`}
                  >
                    <Icon size={23} />
                  </div>

                  <h3 className="text-lg font-semibold text-white">
                    {group.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-zinc-500">
                    {group.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-lg border border-white/[0.08] bg-white/[0.03] px-3 py-2 text-xs font-medium text-zinc-300 transition hover:border-violet-400/30 hover:text-violet-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Learning note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-10 flex flex-col items-center justify-center gap-3 rounded-2xl border border-white/[0.07] bg-white/[0.02] px-6 py-6 text-center sm:flex-row"
        >
          <Terminal size={20} className="text-violet-300" />

          <p className="text-sm leading-6 text-zinc-400">
            Always learning, experimenting, and improving through{" "}
            <span className="font-medium text-zinc-200">
              hands-on projects.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
