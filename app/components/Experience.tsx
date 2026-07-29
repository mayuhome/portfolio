"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar } from "lucide-react";
import { useLang } from "../contexts/LanguageContext";
import { experiences } from "../data/experience";

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLang();

  return (
    <section id="Experience" className="relative py-20 sm:py-28 px-4">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />

      <div ref={ref} className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold tracking-tight mb-2">
            {t("experience.title").split(" ").slice(0, -1).join(" ")}{" "}
            <span className="bg-gradient-to-r from-accent-dark to-accent bg-clip-text text-transparent">
              {t("experience.title").split(" ").slice(-1)}
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent-dark to-accent mx-auto rounded-full" />
        </motion.div>

        <div className="relative">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-card-border hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.role}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-6">
                  <div className="relative">
                    <div className="w-4 h-4 rounded-full bg-background border-2 border-accent shadow-[0_0_10px_rgba(150,112,223,0.3)]" />
                    <div className="absolute inset-0 w-4 h-4 rounded-full bg-accent animate-ping opacity-20" />
                  </div>
                </div>

                <div className={`md:w-1/2 ${i % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                  <div className="p-6 rounded-2xl bg-card border border-card-border hover:border-accent transition-all duration-300 shadow-sm hover:shadow-xl">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 rounded-lg bg-accent/10">
                        <Briefcase size={18} className="text-accent" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">{exp.role}</h3>
                        <p className="text-accent font-medium text-sm">
                          {exp.company}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 mb-4 text-sm text-muted">
                      <Calendar size={14} />
                      {exp.duration}
                    </div>

                    <ul className="space-y-2 mb-4">
                      {exp.description.map((desc, j) => (
                        <li
                          key={j}
                          className="text-sm text-muted font-light flex items-start gap-2"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                          {desc}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 text-xs font-semibold rounded-full bg-accent/10 text-accent"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
