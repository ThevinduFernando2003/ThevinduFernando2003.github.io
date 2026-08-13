"use client";

import { motion } from "framer-motion";
import { ExternalLink, FileText, Github, Lock } from "lucide-react";

type Project = {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  live?: string;
  status?: string;
  accent: string;
  featured?: boolean;
};

const featured: Project[] = [
  {
    title: "LearnMate AI",
    description:
      "AI study platform for Sri Lankan legal education delivering grounded Q&A, summaries, and MCQs from dense legal PDFs. Fine-tuned Qwen 2.5 (LoRA/PEFT) on legal text with a Gemini API fallback so the system degrades gracefully instead of hard-failing. Owned the ML/fine-tuning track — dataset pipeline, LoRA setup, evaluation, and the offline MLOps lifecycle.",
    tags: ["Python", "FastAPI", "React", "Qwen 2.5", "LangChain"],
    status: "Private repo · Semester 5, ongoing",
    accent: "from-violet-500/20 to-transparent",
    featured: true,
  },
  {
    title: "CeylonGuide AI",
    description:
      "Multilingual AI travel companion built for the SLTDA Start-Up Competition 2026, closing a real gap in Sri Lankan tourism — fragmented trip planning and no trusted way to book verified local operators. Combines conversational trip planning, crowd-aware itineraries, and a verified operator marketplace. Owned the full-stack MVP track — itinerary/crowd engine, booking flow, and admin forecast dashboard.",
    tags: ["TypeScript", "Next.js", "FastAPI", "PostgreSQL", "Redis"],
    github: "https://github.com/ThevinduFernando2003/CeylonGuide-AI",
    accent: "from-cyan-500/20 to-transparent",
    featured: true,
  },
  {
    title: "MedBridge AI",
    description:
      "AI-powered healthcare navigator built at AgenTrix 2026, a 12-hour hackathon, with Team Dream4 — emergency response, appointment booking, medicine price comparison, and OCR-based prescription review. Implemented chat orchestration, emergency screening, RAG specialty grounding, and the Streamlit UI shell.",
    tags: ["Python", "Streamlit", "CrewAI", "Pydantic AI", "ChromaDB"],
    github: "https://github.com/ThevinduFernando2003/MedBridge-Dream4",
    accent: "from-rose-500/20 to-transparent",
    featured: true,
  },
  {
    title: "AgriSenseNet (Cropwise)",
    description:
      "Semester 4 group project: a precision-agriculture IoT platform with a React dashboard, Flutter app, and FastAPI backend. Owned the Automation & Testing role — rain-aware smart irrigation logic, a 150+ line backend test suite, and calendar/water-analytics tooling.",
    tags: ["React", "FastAPI", "Flutter", "Kafka", "Keycloak"],
    github: "https://github.com/ThevinduFernando2003/agri-dashboard",
    accent: "from-emerald-500/20 to-transparent",
    featured: true,
  },
  {
    title: "ClinicPro",
    description:
      "Semester 3 DBMS team project: a full-stack, multi-branch clinic operations platform covering scheduling, patient registration, billing, and insurance, with role-based portals for Admin, Receptionist, Doctor, and Branch Manager. Contributed to frontend development.",
    tags: ["MySQL", "Node.js", "Express", "Bootstrap 5", "Chart.js"],
    github: "https://github.com/ThevinduFernando2003/Hospital-Management-System",
    accent: "from-blue-500/20 to-transparent",
    featured: true,
  },
  {
    title: "RPAL Compiler",
    description:
      "Fully functional lexical tokenization scanner and structural parsing suite built in C++ with custom Makefile compilation.",
    tags: ["C++", "Compilers", "Makefile"],
    status: "Coursework · repo not public",
    accent: "from-sky-500/20 to-transparent",
    featured: true,
  },
  {
    title: "Cyclone Ditwah: A CSE Market Event Study",
    description:
      "Published quantitative research measuring the Colombo Stock Exchange's abnormal equity returns around Cyclone Ditwah's landfall, using event-study methodology. “An Event Study of Cyclone Ditwah's Impact on the Colombo Stock Exchange” — accepted at MERCon 2026 (Moratuwa Engineering Research Conference) and nominated for the Best Paper Award.",
    tags: ["Python", "Pandas", "Event Study", "Quant Research"],
    status: "Published research · MERCon 2026",
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
          {project.github ? (
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
          ) : (
            <span className="inline-flex items-center gap-1.5 text-sm text-text-dim">
              {project.status?.toLowerCase().includes("research") ? (
                <FileText size={15} />
              ) : (
                <Lock size={15} />
              )}
              {project.status ?? "Repo not public"}
            </span>
          )}
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
