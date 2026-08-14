"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { BookOpen, Github, Linkedin, Send } from "lucide-react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Ready for EmailJS / Formspree wiring
    setStatus("sent");
    (e.target as HTMLFormElement).reset();
    setTimeout(() => setStatus("idle"), 4000);
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 bg-bg-elevated">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm tracking-[0.25em] uppercase text-accent mb-3">
              Contact
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold tracking-tight mb-5">
              Let&apos;s build something
              <br />
              <span className="text-text-muted">worth shipping.</span>
            </h2>
            <p className="text-text-muted leading-relaxed max-w-md">
              Based in Colombo, Sri Lanka. Open to internships, research
              collaborations, and engineering projects. Drop a message —
              I&apos;ll get back to you.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="https://github.com/ThevinduFernando2003"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-border px-4 py-2.5 text-sm text-text-muted hover:border-accent hover:text-accent transition-colors"
                aria-label="GitHub"
              >
                <Github size={18} />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/thevindu-fernando-4a63b3283/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-border px-4 py-2.5 text-sm text-text-muted hover:border-accent hover:text-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
                LinkedIn
              </a>
              <a
                href="https://medium.com/@thevindufernando0315"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-border px-4 py-2.5 text-sm text-text-muted hover:border-accent hover:text-accent transition-colors"
                aria-label="Medium"
              >
                <BookOpen size={18} />
                Medium
              </a>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            onSubmit={onSubmit}
            className="border border-border bg-bg p-6 md:p-8 space-y-5"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-xs uppercase tracking-wider text-text-dim mb-2"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                required
                autoComplete="name"
                className="w-full bg-bg-surface border border-border px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-xs uppercase tracking-wider text-text-dim mb-2"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                className="w-full bg-bg-surface border border-border px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-xs uppercase tracking-wider text-text-dim mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="w-full bg-bg-surface border border-border px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors resize-none"
                placeholder="What are you working on?"
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center gap-2 bg-accent text-bg px-6 py-3 text-sm font-medium hover:scale-[1.02] transition-transform"
            >
              <Send size={15} />
              {status === "sent" ? "Message queued!" : "Send Message"}
            </button>
            <p className="text-[11px] text-text-dim">
              Form UI ready — wire to EmailJS or Formspree when you have keys.
            </p>
          </motion.form>
        </div>

        <footer className="mt-20 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-dim">
          <p>
            © {new Date().getFullYear()} Thevindu Fernando. Built with Next.js &
            Framer Motion.
          </p>
          <p className="font-[family-name:var(--font-display)] tracking-wide">
            TF<span className="text-accent">.</span>
          </p>
        </footer>
      </div>
    </section>
  );
}
