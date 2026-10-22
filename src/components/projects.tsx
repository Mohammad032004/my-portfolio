
"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ExternalLink,
  FolderCode,
  Sparkles,
} from "lucide-react";

const projects = [
  {
    number: "01",
    title: "AI Club Website",
    category: "Community Platform",
    description:
      "A platform for an AI student community to showcase activities, share resources, manage recruitment, and highlight technical events.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB"],
    image: "/images/projects/ai-club.png",
    accent: "from-violet-500/20 to-indigo-500/5",
    github: "https://github.com/YOUR_USERNAME",
    demo: "",
    featured: true,
  },
  {
    number: "02",
    title: "QR Smart Restaurant",
    category: "Full-Stack Application",
    description:
      "A QR-based restaurant ordering experience designed to let customers browse a digital menu and place orders from their devices.",
    technologies: ["React", "Node.js", "Express.js", "MongoDB"],
    image: "/images/projects/smart-restaurant.png",
    accent: "from-cyan-500/20 to-blue-500/5",
    github: "https://github.com/YOUR_USERNAME",
    demo: "",
    featured: false,
  },
  {
    number: "03",
    title: "Developer Experiments",
    category: "Learning & Innovation",
    description:
      "A collection of practical experiments exploring web development, automation, AI concepts, and modern software engineering.",
    technologies: ["TypeScript", "Next.js", "Git", "APIs"],
    image: "",
    accent: "from-fuchsia-500/20 to-violet-500/5",
    github: "https://github.com/YOUR_USERNAME",
    demo: "",
    featured: false,
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#0b0a13] px-5 py-24 sm:px-8 lg:px-12 lg:py-32"
    >
      <div className="pointer-events-none absolute -right-40 top-1/4 h-96 w-96 rounded-full bg-violet-600/[0.07] blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end"
        >
          <div className="max-w-2xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-400/[0.06] px-4 py-2">
              <FolderCode size={15} className="text-violet-300" />
              <span className="text-xs font-medium uppercase tracking-widest text-violet-200">
                Selected work
              </span>
            </div>

            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Featured{" "}
              <span className="bg-gradient-to-r from-violet-400 to-cyan-300 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-zinc-400 sm:text-lg">
              A selection of applications and experiments that reflect
              my interests in development, AI, and solving practical problems.
            </p>
          </div>

          <a
            href="https://github.com/YOUR_USERNAME"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center gap-2 rounded-xl border border-white/10 px-5 py-3 text-sm font-semibold text-zinc-300 transition hover:border-violet-400/30 hover:text-white"
          >
            More on GitHub <ArrowUpRight size={17} />
          </a>
        </motion.div>

        {/* Project cards */}
        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              whileHover={{ y: -6 }}
              className={`group overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] transition-colors hover:border-violet-400/25 ${
                project.featured ? "lg:col-span-2" : ""
              }`}
            >
              <div
                className={`relative overflow-hidden bg-gradient-to-br ${project.accent} ${
                  project.featured ? "grid lg:grid-cols-[1.1fr_0.9fr]" : ""
                }`}
              >
                {/* Image preview */}
                <div className="relative flex min-h-56 items-center justify-center overflow-hidden border-b border-white/[0.06] bg-[#10101b] p-6 sm:min-h-64 lg:min-h-72">
                  {project.image ? (
                    // Add your own screenshots under public/images/projects/
                    <img
                      src={project.image}
                      alt={`${project.title} project preview`}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div className="relative flex h-full min-h-52 w-full flex-col items-center justify-center gap-4 rounded-xl border border-dashed border-white/10 bg-white/[0.02]">
                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-violet-400/20 bg-violet-500/10 text-violet-300">
                        {project.featured ? (
                          <Sparkles size={30} />
                        ) : (
                          <FolderCode size={30} />
                        )}
                      </div>
                      <p className="text-sm text-zinc-500">
                        Project preview coming soon
                      </p>
                    </div>
                  )}

                  <span className="absolute left-4 top-4 rounded-lg border border-white/10 bg-[#080810]/80 px-3 py-1.5 font-mono text-xs text-zinc-300 backdrop-blur">
                    PROJECT_{project.number}
                  </span>
                </div>

                {/* Details */}
                <div className="flex flex-col justify-center p-6 sm:p-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-300">
                    {project.category}
                  </p>

                  <h3 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
                    {project.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-zinc-400 sm:text-base">
                    {project.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-lg border border-white/[0.08] bg-white/[0.03] px-3 py-2 text-xs font-medium text-zinc-300"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-wrap gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} source code`}
                      className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-4 py-3 text-sm font-semibold text-zinc-300 transition hover:border-violet-400/30 hover:text-white"
                    >
                      <span className="font-bold text-xs">GH</span>
                        Source Code
                    </a>

                    {project.demo ? (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-xl bg-violet-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-violet-400"
                      >
                        Live Demo <ExternalLink size={16} />
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-2 rounded-xl border border-white/[0.06] px-4 py-3 text-sm text-zinc-500">
                        Demo not added
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
