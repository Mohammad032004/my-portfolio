
"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Mail,
  Sparkles,
} from "lucide-react";

export default function Hero() {
  const [imageError, setImageError] = useState(false);

  return (
    <section
      id="home"
      className="relative isolate flex min-h-screen items-center overflow-hidden bg-[#080810] px-5 pb-16 pt-32 sm:px-8 lg:px-12"
    >
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(109,40,217,0.13),transparent_55%)]" />

        <motion.div
          animate={{ x: [0, 35, 0], y: [0, -25, 0] }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-violet-600/15 blur-[120px]"
        />

        <motion.div
          animate={{ x: [0, -30, 0], y: [0, 30, 0] }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[130px]"
        />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:65px_65px] [mask-image:linear-gradient(to_bottom,black,transparent_90%)]" />
      </div>

      <div className="mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
        {/* Left: Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10"
        >
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-400/[0.07] px-4 py-2">
            <Sparkles size={15} className="text-violet-300" />

            <span className="text-xs font-medium tracking-wide text-violet-200 sm:text-sm">
              Developer · Tech Enthusiast · AI Club Leader
            </span>

            <span className="ml-1 h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
          </div>

          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-zinc-400">
            Hello, I&apos;m
          </p>

          <h1 className="max-w-3xl text-5xl font-bold leading-[1.08] tracking-tight text-white sm:text-6xl lg:text-7xl xl:text-8xl">
            Mohammad
            <br />
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent">
              Irfan.
            </span>
          </h1>

          <h2 className="mt-7 text-xl font-medium text-zinc-200 sm:text-2xl">
            Full-Stack Developer
            <span className="text-violet-400"> &amp; </span>
            <br className="hidden sm:block" />
            DevOps Enthusiast.
          </h2>

          <p className="mt-6 max-w-xl text-base leading-8 text-zinc-400 sm:text-lg">
            I build modern web applications, explore cloud and DevOps
            technologies, and lead student initiatives in artificial
            intelligence. Turning ideas into useful digital experiences
            is what drives me.
          </p>

          {/* Call-to-action buttons */}
          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-3 rounded-xl bg-violet-500 px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 transition hover:-translate-y-1 hover:bg-violet-400"
            >
              Explore My Work

              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>

            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-6 py-4 text-sm font-semibold text-zinc-200 transition hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.07]"
            >
              Download CV
              <ArrowUpRight size={17} />
            </a>
          </div>

          {/* Social links */}
          <div className="mt-10 flex items-center gap-4">
            <span className="mr-1 text-xs uppercase tracking-widest text-zinc-500">
              Connect with me
            </span>

            <a
              href="https://github.com/YOUR_USERNAME"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 font-bold text-zinc-400 transition hover:-translate-y-1 hover:border-violet-400/40 hover:text-white"
            >
              GH
            </a>

            <a
              href="https://www.linkedin.com/in/YOUR_PROFILE/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 font-bold text-zinc-400 transition hover:-translate-y-1 hover:border-violet-400/40 hover:text-white"
            >
              in
            </a>

            <a
              href="mailto:your-email@example.com"
              aria-label="Email"
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 text-zinc-400 transition hover:-translate-y-1 hover:border-violet-400/40 hover:text-white"
            >
              <Mail size={19} />
            </a>
          </div>
        </motion.div>

        {/* Right: Profile portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, x: 25 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-md"
        >
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative"
          >
            {/* Portrait glow */}
            <div className="absolute inset-8 rounded-full bg-violet-600/25 blur-[70px]" />

            <div className="absolute -inset-2 rounded-[2rem] bg-gradient-to-br from-violet-500/40 via-transparent to-cyan-400/30 opacity-70 blur-xl" />

            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#211632] via-[#11111d] to-[#0b1822]">
              {!imageError ? (
                <Image
                  src="/images/profile.png"
                  alt="Mohammad Irfan — Full-Stack Developer"
                  fill
                  priority
                  sizes="(max-width: 1024px) 80vw, 420px"
                  className="object-cover object-center"
                  onError={() => setImageError(true)}
                />
              ) : (
                <div className="flex h-full flex-col items-center justify-center gap-4 p-8 text-center">
                  <div className="flex h-28 w-28 items-center justify-center rounded-full border border-violet-400/30 bg-violet-500/10 text-4xl font-bold text-violet-200">
                    MI
                  </div>

                  <p className="text-lg font-semibold text-white">
                    Your portrait goes here
                  </p>

                  <p className="max-w-xs text-sm leading-6 text-zinc-400">
                    Add your photo to public/images/profile.png to display
                    it in this section.
                  </p>
                </div>
              )}

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#080810]/70 via-transparent to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                <p className="text-sm font-medium text-violet-300">
                  BUILD · LEARN · INNOVATE
                </p>

                <p className="mt-2 text-xl font-semibold text-white sm:text-2xl">
                  Creating what&apos;s next.
                </p>
              </div>
            </div>

            {/* Floating developer card */}
            <div className="absolute -left-5 top-12 flex items-center gap-3 rounded-2xl border border-white/10 bg-[#11111b]/90 p-4 shadow-2xl backdrop-blur-xl sm:-left-10">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-400/10 font-mono text-lg font-bold text-emerald-300">
                {"</>"}
              </div>

              <div>
                <p className="text-sm font-semibold text-white">
                  Developer
                </p>

                <p className="mt-1 text-xs text-zinc-400">
                  Always building
                </p>
              </div>
            </div>

            {/* Floating AI card */}
            <div className="absolute -right-3 bottom-24 rounded-2xl border border-white/10 bg-[#11111b]/90 p-4 shadow-2xl backdrop-blur-xl sm:-right-8">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-400/10 text-violet-300">
                  <Sparkles size={20} />
                </div>

                <div>
                  <p className="text-sm font-semibold text-white">
                    AI &amp; Innovation
                  </p>

                  <p className="mt-1 text-xs text-zinc-400">
                    Building the future
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-zinc-500 transition hover:text-white sm:flex"
      >
        <span className="text-[10px] uppercase tracking-[0.25em]">
          Scroll to explore
        </span>

        <ArrowDown size={16} className="animate-bounce" />
      </a>
    </section>
  );
}
