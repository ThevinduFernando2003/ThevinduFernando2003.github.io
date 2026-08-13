"use client";

import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated gradient mesh */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="mesh-blob absolute -top-32 -left-32 h-[28rem] w-[28rem] rounded-full bg-accent/10 blur-[100px]" />
        <div
          className="mesh-blob absolute top-1/3 -right-24 h-[22rem] w-[22rem] rounded-full bg-cyan-700/20 blur-[90px]"
          style={{ animationDelay: "-6s" }}
        />
        <div
          className="mesh-blob absolute -bottom-20 left-1/3 h-[18rem] w-[18rem] rounded-full bg-accent/5 blur-[80px]"
          style={{ animationDelay: "-12s" }}
        />
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      {/* Floating geometric accent */}
      <div
        className="float-el pointer-events-none absolute right-[12%] top-[28%] hidden lg:block"
        aria-hidden
      >
        <div className="h-24 w-24 border border-accent/30 rotate-12" />
        <div className="absolute -bottom-4 -left-4 h-16 w-16 border border-accent/15 -rotate-6" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-24 pb-16 text-center md:text-left">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 text-sm tracking-[0.25em] uppercase text-accent"
        >
          CSE Undergraduate · University of Moratuwa
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-[family-name:var(--font-display)] text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95]"
        >
          Thevindu
          <br />
          <span className="text-accent">Fernando</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.25 }}
          className="mt-6 max-w-xl text-lg md:text-xl text-text-muted leading-relaxed mx-auto md:mx-0"
        >
          Building intelligent systems and scalable full-stack applications.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 bg-accent text-bg px-7 py-3.5 font-medium hover:scale-[1.03] transition-transform"
          >
            View Projects
            <ArrowDown
              size={16}
              className="group-hover:translate-y-0.5 transition-transform"
            />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 border border-border-hover text-text px-7 py-3.5 hover:border-accent hover:text-accent transition-colors"
          >
            <Mail size={16} />
            Contact Me
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex h-9 w-5 items-start justify-center rounded-full border border-text-dim p-1">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
            className="h-1.5 w-1 rounded-full bg-accent"
          />
        </div>
      </motion.div>
    </section>
  );
}
