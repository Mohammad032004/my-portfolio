
"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Code2,
  GraduationCap,
  Lightbulb,
  Users,
} from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Full-Stack Development",
    description:
      "Building responsive web applications with modern frontend and backend technologies.",
  },
  {
    icon: Users,
    title: "AI Club Leadership",
    description:
      "Leading student initiatives, coordinating technical teams, and organizing campus events.",
  },
  {
    icon: Lightbulb,
    title: "Continuous Learning",
    description:
      "Exploring AI, DevOps, cloud technologies, and practical software engineering.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#0b0a13] px-5 py-24 sm:px-8 lg:px-12 lg:py-32"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute -right-40 top-20 h-80 w-80 rounded-full bg-violet-600/[0.08] blur-[100px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-14 max-w-2xl"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-violet-400">
            Get to know me
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            About{" "}
            <span className="bg-gradient-to-r from-violet-400 to-cyan-300 bg-clip-text text-transparent">
              Me
            </span>
          </h2>

          <p className="mt-6 text-base leading-8 text-zinc-400 sm:text-lg">
            A developer, learner, and technology enthusiast focused on
            building meaningful digital experiences and helping others
            grow through technology.
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 sm:p-8">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-500/10 text-violet-300">
                  <GraduationCap size={23} />
                </div>

                <div>
                  <h3 className="font-semibold text-white">
                    My Journey
                  </h3>
                  <p className="text-sm text-zinc-500">
                    Education meets technology
                  </p>
                </div>
              </div>

              <p className="leading-8 text-zinc-400">
                I&apos;m Mohammad Irfan, a BCA student at Lucknow Public
                Post Graduate College, interested in full-stack
                development, DevOps, and artificial intelligence.
                I enjoy turning ideas into working applications,
                learning new technologies, and collaborating with
                people on technical projects.
              </p>

              <p className="mt-4 leading-8 text-zinc-400">
                As Head of the AI Club, I also contribute to student
                learning initiatives, technical events, hackathons,
                and collaborative projects. My goal is to grow as a
                software professional while building products that
                solve real problems.
              </p>
            </div>

            {/* Education card */}
            <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300">
                  <GraduationCap size={23} />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-cyan-300">
                    Education
                  </p>

                  <h3 className="mt-2 text-lg font-semibold text-white">
                    Bachelor of Computer Applications
                  </h3>

                  <p className="mt-2 leading-7 text-zinc-400">
                    Lucknow Public Post Graduate College
                  </p>

                  <p className="mt-1 text-sm text-zinc-500">
                    Batch 2024–2027
                  </p>
                </div>
              </div>
            </div>

            <a
              href="#projects"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-violet-300 transition hover:text-violet-200"
            >
              Discover my projects
              <ArrowUpRight
                size={17}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          </motion.div>

          {/* Highlights */}
          <div className="space-y-5">
            {highlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.12,
                  }}
                  whileHover={{ y: -5 }}
                  className="group rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 transition-colors hover:border-violet-400/25 hover:bg-violet-400/[0.03] sm:p-7"
                >
                  <div className="flex gap-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-violet-500/10 text-violet-300 transition group-hover:bg-violet-500/20">
                      <Icon size={23} />
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-white">
                        {item.title}
                      </h3>

                      <p className="mt-3 leading-7 text-zinc-400">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
