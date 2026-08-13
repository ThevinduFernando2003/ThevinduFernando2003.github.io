"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

type Project = {
  title: string;
  description: string;
  tags: string[];
  github: string;
  live?: string;
  accent: string;
  featured?: boolean;
};

const featured: Project[] = [
  {
    title: "AgriSenseNet",
    description:
      "Cross-platform smart agricultural platform featuring interactive dashboards and mobile interfaces built with React, Flutter, and FastAPI.",
    tags: ["React", "Flutter", "FastAPI"],
    github: "https://github.com/ThevinduFernando2003",
    accent: "from-emerald-500/20 to-transparent",
    featured: true,
  },
  {
    title: "RPAL Compiler",
    description:
      "Fully functional lexical tokenization scanner and structural parsing suite built in C++ with custom Makefile compilation.",
    tags: ["C++", "Compilers", "Makefile"],
    github: "https://github.com/ThevinduFernando2003",
    accent: "from-sky-500/20 to-transparent",
    featured: true,
  },
  {
    title: "Financial Event-Study Pipeline",
    description:
      "A data-cleaning and analytics pipeline tracking Colombo Stock Exchange equity returns against natural disaster impacts.",
    tags: ["Python", "Pandas", "Analytics"],
    github: "https://github.com/ThevinduFernando2003",
    accent: "from-amber-500/20 to-transparent",
    featured: true,
  },
];

const githubProjects: Project[] = [
  {
    title: "Pintos — User Programs",
    description:
      "Operating systems coursework implementing user-program support on the Pintos teaching OS — process loading, syscalls, and related kernel work in C.",
    tags: ["C", "Operating Systems", "Pintos"],
    github: "https://github.com/ThevinduFernando2003/pintos-project",
    accent: "from-violet-500/20 to-transparent",
  },
  {
    title: "Code Problems",
    description:
      "Competitive programming and algorithm practice problems implemented in C++, covering data structures and problem-solving patterns.",
    tags: ["C++", "Algorithms", "DSA"],
    github: "https://github.com/ThevinduFernando2003/Code-Problems",
    accent: "from-cyan-500/20 to-transparent",
  },
  {
    title: "Side Game",
    description:
      "Browser-based cursor-controlled game built with JavaScript — interaction, game loop, and lightweight client-side logic.",
    tags: ["JavaScript", "Game Dev", "DOM"],
    github: "https://github.com/ThevinduFernando2003/Side_game",
    accent: "from-rose-500/20 to-transparent",
  },
  {
    title: "Always-on-Top Timer",
    description:
      "Desktop countdown timer utility written in Python, designed to stay visible while working across other applications.",
    tags: ["Python", "Desktop Utility"],
    github: "https://github.com/ThevinduFernando2003/Always-on-Top-Timer",
    accent: "from-teal-500/20 to-transparent",
  },
  {
    title: "ML & Data Science Track",
    description:
      "Hands-on Kaggle coursework spanning Intro to ML, Feature Engineering, Deep Learning, Data Cleaning, Visualization, and Pandas — with notebooks on GitHub.",
    tags: ["Python", "Kaggle", "ML", "Pandas"],
    github: "https://github.com/ThevinduFernando2003/python-machine-learning",
    accent: "from-indigo-500/20 to-transparent",
  },
  {
    title: "Codewars Practice",
    description:
      "Kata solutions and coding practice problems in Python for sharpening algorithmic thinking and language fluency.",
    tags: ["Python", "Codewars"],
    github: "https://github.com/ThevinduFernando2003/Codewars",
    accent: "from-orange-500/20 to-transparent",
  },
];

function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: Math.min(index * 0.06, 0.3) }}
      whileHover={{ scale: 1.02, y: -4 }}
      className="group relative border border-border bg-bg-surface overflow-hidden flex flex-col"
    >
      <div
        className={`h-36 bg-gradient-to-br ${project.accent} border-b border-border relative`}
      >
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle at 30% 40%, var(--color-accent) 0%, transparent 50%)",
          }}
        />
        <span className="absolute bottom-4 left-5 font-[family-name:var(--font-display)] text-4xl font-bold text-text/10 group-hover:text-accent/20 transition-colors">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <div className="flex flex-col flex-1 p-6">
        <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold group-hover:text-accent transition-colors">
          {project.title}
        </h3>
        <p className="mt-3 text-sm text-text-muted leading-relaxed flex-1">
          {project.description}
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <span
              key={t}
              className="text-xs border border-border px-2.5 py-1 text-text-dim"
            >
              {t}
            </span>
          ))}
        </div>
        <div className="mt-6 flex items-center gap-4 border-t border-border pt-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-text-muted hover:text-accent transition-colors"
            aria-label={`${project.title} GitHub`}
          >
            <Github size={15} />
            Code
          </a>
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-text-muted hover:text-accent transition-colors"
              aria-label={`${project.title} Live Demo`}
            >
              <ExternalLink size={15} />
              Demo
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-sm tracking-[0.25em] uppercase text-accent mb-3"
        >
          Featured Work
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold tracking-tight mb-4"
        >
          Projects
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-text-muted mb-14 max-w-2xl"
        >
          Selected builds plus public work from{" "}
          <a
            href="https://github.com/ThevinduFernando2003"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            github.com/ThevinduFernando2003
          </a>
          .
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>

        <motion.h3
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight mt-16 mb-8"
        >
          From GitHub
        </motion.h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {githubProjects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i + featured.length} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <a
            href="https://github.com/ThevinduFernando2003?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-border px-5 py-2.5 text-sm text-text-muted hover:border-accent hover:text-accent transition-colors"
          >
            <Github size={16} />
            View all repositories
          </a>
        </motion.div>
      </div>
    </section>
  );
}
