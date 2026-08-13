"use client";

import { motion } from "framer-motion";
import { Award, Trophy, Users } from "lucide-react";

const highlights = [
  {
    icon: Award,
    title: "Academic Excellence",
    points: [
      "Z-Score +2.5049 · 4 A/L Distinctions (2022)",
      "Fritz Kunz Award — Ananda College, 2022",
      "9 Distinctions at G.C.E. O/L (2019)",
    ],
  },
  {
    icon: Users,
    title: "Leadership",
    points: [
      "Swimming Captain — Ananda College, 2021",
      "Head Prefect — Thurstan College Primary, 2013",
      "Swimming House Captain · Maths Subject Monitor",
    ],
  },
  {
    icon: Trophy,
    title: "Athletic Pinnacle",
    points: [
      "Anada Padma Award for Swimming 2020–2021",
      "1st Place — 400m Freestyle, XLVI National Sports Festival",
      "School Colours & Western Province Colours",
    ],
  },
];

export default function Highlights() {
  return (
    <div className="mb-16">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-sm tracking-[0.25em] uppercase text-accent mb-3"
      >
        Career Highlights
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold tracking-tight mb-10"
      >
        School Career, Leadership & Achievements
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {highlights.map((h, i) => (
          <motion.div
            key={h.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.45 }}
            whileHover={{ y: -4 }}
            className="border border-border bg-bg-surface p-6 hover:border-accent/40 transition-colors"
          >
            <h.icon className="text-accent mb-4" size={28} strokeWidth={1.5} />
            <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold mb-4">
              {h.title}
            </h3>
            <ul className="space-y-3">
              {h.points.map((p) => (
                <li
                  key={p}
                  className="text-sm text-text-muted leading-snug pl-3 border-l border-accent/40"
                >
                  {p}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
