"use client";

import { motion } from "framer-motion";

const nodes = [
  {
    title: "BSc. (Hons) Computer Science Engineering",
    meta: "2024 – 2028 · University of Moratuwa",
    detail:
      "Semester 4 undergraduate in the Department of Computer Science & Engineering. Focus areas: full-stack architecture, systems programming, compiler implementation, and applied machine learning.",
  },
  {
    title: "CIMA Level 1 — Certificate in Business Accounting",
    meta: "Reading",
    detail: "Currently reading for the CIMA Certificate in Business Accounting.",
  },
  {
    title: "Fritz Kunz Award",
    meta: "2022 · Ananda College",
    detail:
      "Prestigious academic excellence award recognizing outstanding Advanced Level performance.",
  },
  {
    title: "G.C.E. Advanced Level",
    meta: "2022 (Jan. 2023) · English Medium · Index 2044668",
    detail:
      "Physics (A), Chemistry (A), Combined Mathematics (A), General English (A). Common General Test: 088. Z-Score: +2.3010.",
  },
  {
    title: "Daham Pasal Final Certificate Examination",
    meta: "2019 (results 2021) · Sinhala Medium · Index 8163006",
    detail:
      "Buddha Charithaya (C), Buddha Dharmaya & Pali (C), Sasana Ithihasaya (D), Bauddha Sanskruthiya (C).",
  },
  {
    title: "G.C.E. Ordinary Level",
    meta: "2019 · English Medium · Index 90062922",
    detail:
      "9 Distinctions — Buddhism, Sinhala, English, Mathematics, History, Science, Drama & Theatre, Business & Accounting, ICT.",
  },
  {
    title: "Grade 5 Scholarship Examination",
    meta: "2013 · 182 Marks",
    detail:
      "Qualified with 182 marks. Recipient of Arunalu, BOC, and NSB scholarships (school first / above 180).",
  },
];

export default function Timeline() {
  return (
    <section id="journey" className="relative py-24 md:py-32 bg-bg-elevated">
      <div className="mx-auto max-w-6xl px-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-sm tracking-[0.25em] uppercase text-accent mb-3"
        >
          The Journey
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold tracking-tight mb-14"
        >
          Educational Qualifications
        </motion.h2>

        <div className="relative">
          <div className="absolute left-[11px] md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          <ul className="space-y-12">
            {nodes.map((node, i) => {
              const left = i % 2 === 0;
              return (
                <motion.li
                  key={node.title}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: Math.min(i * 0.06, 0.3) }}
                  className="relative grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12"
                >
                  <div className="absolute left-[7px] md:left-1/2 md:-translate-x-1/2 top-1.5 z-10">
                    <div className="h-2.5 w-2.5 rounded-full bg-accent shadow-[0_0_12px_var(--color-accent)]" />
                  </div>

                  <div
                    className={`pl-10 md:pl-0 ${
                      left
                        ? "md:text-right md:pr-12"
                        : "md:col-start-2 md:pl-12"
                    }`}
                  >
                    <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold">
                      {node.title}
                    </h3>
                    <p className="mt-1 text-sm text-accent">{node.meta}</p>
                    <p className="mt-3 text-text-muted leading-relaxed">
                      {node.detail}
                    </p>
                  </div>
                </motion.li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
