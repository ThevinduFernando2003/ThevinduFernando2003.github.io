"use client";

import { motion } from "framer-motion";

const skills = [
  "Python",
  "Java",
  "C++",
  "C",
  "JavaScript",
  "TypeScript",
  "HTML5",
  "React",
  "Next.js",
  "Flutter",
  "FastAPI",
  "SQL / Relational Databases",
  "Pandas",
  "Machine Learning",
];

const badgeVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: 0.05 * i, duration: 0.4 },
  }),
};

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-sm tracking-[0.25em] uppercase text-accent mb-3"
        >
          About & Skills
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55 }}
          >
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Engineer. Builder.
              <br />
              <span className="text-text-muted">Lifelong learner.</span>
            </h2>
            <p className="text-text-muted text-lg leading-relaxed">
              I am a 3rd-year Computer Science and Engineering undergraduate
              at the University of Moratuwa (2024–2028), based in Colombo,
              Sri Lanka, carrying a 3.36 CGPA across my first four semesters.
              I specialize in full-stack architecture, systems
              programming, compiler implementation, and applied machine
              learning — with active practice across{" "}
              <a
                href="https://github.com/ThevinduFernando2003"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                GitHub
              </a>{" "}
              and continuous upskilling on Kaggle.
            </p>
            <div className="mt-8 flex flex-wrap gap-8 border-t border-border pt-8">
              <div>
                <p className="font-[family-name:var(--font-display)] text-2xl font-bold text-accent">
                  S5
                </p>
                <p className="text-xs text-text-dim mt-1 uppercase tracking-wider">
                  Semester
                </p>
              </div>
              <div>
                <p className="font-[family-name:var(--font-display)] text-2xl font-bold text-accent">
                  3.36
                </p>
                <p className="text-xs text-text-dim mt-1 uppercase tracking-wider">
                  CGPA
                </p>
              </div>
              <div>
                <p className="font-[family-name:var(--font-display)] text-2xl font-bold text-accent">
                  CSE
                </p>
                <p className="text-xs text-text-dim mt-1 uppercase tracking-wider">
                  Degree
                </p>
              </div>
              <div>
                <p className="font-[family-name:var(--font-display)] text-2xl font-bold text-accent">
                  24–28
                </p>
                <p className="text-xs text-text-dim mt-1 uppercase tracking-wider">
                  UoM
                </p>
              </div>
            </div>
          </motion.div>

          <div className="flex flex-wrap gap-3 content-start pt-2">
            {skills.map((skill, i) => (
              <motion.span
                key={skill}
                custom={i}
                variants={badgeVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ scale: 1.06, borderColor: "var(--color-accent)" }}
                className="float-el inline-block border border-border bg-bg-surface px-5 py-2.5 text-sm text-text-muted hover:text-accent transition-colors cursor-default"
                style={{ animationDelay: `${i * 0.35}s` }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
