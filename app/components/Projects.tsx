"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, ExternalLink, GitFork, ChevronRight } from "lucide-react";
import { useLang } from "../contexts/LanguageContext";
import { projects } from "../data/projects";

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLang();

  return (
    <section id="Projects" className="relative py-20 sm:py-28 px-4">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />

      <div ref={ref} className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold tracking-tight mb-2">
            {t("projects.title").split(" ").slice(0, -1).join(" ")}{" "}
            <span className="bg-gradient-to-r from-accent-dark to-accent bg-clip-text text-transparent">
              {t("projects.title").split(" ").slice(-1)}
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent-dark to-accent mx-auto rounded-full" />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-accent/50 via-accent/20 to-transparent" />

          <div className="space-y-12">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative pl-8 md:pl-20"
              >
                {/* Timeline dot */}
                <div
                  className="absolute left-0 md:left-8 top-6 w-3 h-3 rounded-full border-2 -translate-x-1/2"
                  style={{
                    borderColor: project.color,
                    backgroundColor: `${project.color}30`,
                  }}
                />

                <div className="group bg-card border border-card-border rounded-2xl p-6 md:p-8 hover:border-accent transition-all duration-300 shadow-sm hover:shadow-lg">
                  {/* Header: Title + Time */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-xl font-bold group-hover:text-accent transition-colors">
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-4 mt-1">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted hover:text-accent transition-colors"
                          >
                            <GitFork size={16} />
                          </a>
                        )}
                        {project.live && (
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted hover:text-accent transition-colors"
                          >
                            <ExternalLink size={16} />
                          </a>
                        )}
                      </div>
                    </div>
                    {project.timeRange && (
                      <div className="flex items-center gap-2 text-sm text-muted shrink-0">
                        <Calendar size={14} />
                        <span>{project.timeRange}</span>
                      </div>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-muted font-light mb-5 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Responsibilities */}
                  {project.Responsibilities.length > 0 && (
                    <div className="mb-5">
                      <h4 className="text-sm font-semibold text-foreground mb-2">
                        {t("projects.responsibilities")}
                      </h4>
                      <ul className="space-y-1.5">
                        {project.Responsibilities.map((resp, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-sm text-muted"
                          >
                            <ChevronRight
                              size={14}
                              className="mt-0.5 shrink-0 text-accent"
                            />
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Achievements */}
                  {project.Achievements.length > 0 && (
                    <div className="mb-5">
                      <h4 className="text-sm font-semibold text-foreground mb-2">
                        {t("projects.achievements")}
                      </h4>
                      <ul className="space-y-1.5">
                        {project.Achievements.map((ach, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-sm text-muted"
                          >
                            <ChevronRight
                              size={14}
                              className="mt-0.5 shrink-0 text-emerald-500"
                            />
                            <span>{ach}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs font-semibold rounded-full bg-accent/10 text-accent border border-accent/20"
                      >
                        {tech}
                      </span>
                    ))}
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
