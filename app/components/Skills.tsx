"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLang } from "../contexts/LanguageContext";
import { skillCategories } from "../data/skills";

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLang();

  return (
    <section id="Skills" className="relative py-20 sm:py-28 px-4">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />

      <div ref={ref} className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold tracking-tight mb-2">
            {t("skills.title").split(" ").slice(0, -1).join(" ")}{" "}
            <span className="bg-gradient-to-r from-accent-dark to-accent bg-clip-text text-transparent">
              {t("skills.title").split(" ").slice(-1)}
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent-dark to-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={category.titleKey}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: catIdx * 0.15 }}
              className="p-6 md:p-8 rounded-2xl bg-card border border-card-border hover:border-accent transition-all duration-300 shadow-sm hover:shadow-xl"
            >
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent" />
                {t(category.titleKey)}
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {category.skills.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: catIdx * 0.15 + i * 0.08 }}
                    className="group p-4 rounded-xl bg-background border border-card-border hover:border-accent transition-all duration-300 hover:-translate-y-1 cursor-default"
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow = `0 0 20px ${skill.color}20`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = `0 0 0px transparent`;
                    }}
                  >
                    <i
                      className={`${skill.icon} text-3xl mb-3 transition-all duration-300 group-hover:scale-110`}
                      style={{ color: skill.color }}
                    />
                    <p className="text-sm font-medium mb-2">{skill.name}</p>
                    <div className="flex gap-1">
                      {[1, 2, 3].map((level) => (
                        <div
                          key={level}
                          className={`h-1 flex-1 rounded-full transition-all duration-500 ${
                            level <= skill.level
                              ? "bg-gradient-to-r from-accent-dark to-accent"
                              : "bg-card-border"
                          }`}
                          style={{
                            transitionDelay: isInView
                              ? `${(catIdx * 0.15 + i * 0.08 + level * 0.1) * 1000}ms`
                              : "0ms",
                          }}
                        />
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
