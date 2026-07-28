"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLang } from "../contexts/LanguageContext";

interface Skill {
  name: string;
  icon: string;
  color: string;
  level: number;
}

interface SkillCategory {
  titleKey: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    titleKey: "skills.languages",
    skills: [
      { name: "JavaScript", icon: "devicon-javascript-plain", color: "#F7DF1E", level: 3 },
      { name: "TypeScript", icon: "devicon-typescript-plain", color: "#3178C6", level: 3 },
      { name: "Python", icon: "devicon-python-plain", color: "#3776AB", level: 2 },
      { name: "HTML5", icon: "devicon-html5-plain", color: "#E34F26", level: 3 },
      { name: "CSS3", icon: "devicon-css3-plain", color: "#1572B6", level: 3 },
    ],
  },
  {
    titleKey: "skills.frontend",
    skills: [
      { name: "React", icon: "devicon-react-original", color: "#61DAFB", level: 3 },
      { name: "Next.js", icon: "devicon-nextjs-plain", color: "#FFFFFF", level: 3 },
      { name: "Tailwind CSS", icon: "devicon-tailwindcss-plain", color: "#06B6D4", level: 3 },
      { name: "Vue.js", icon: "devicon-vuejs-plain", color: "#4FC08D", level: 2 },
    ],
  },
  {
    titleKey: "skills.backend",
    skills: [
      { name: "Node.js", icon: "devicon-nodejs-plain", color: "#339933", level: 3 },
      { name: "Express", icon: "devicon-express-original", color: "#FFFFFF", level: 2 },
      { name: "PostgreSQL", icon: "devicon-postgresql-plain", color: "#4169E1", level: 2 },
      { name: "MongoDB", icon: "devicon-mongodb-plain", color: "#47A248", level: 2 },
    ],
  },
  {
    titleKey: "skills.tools",
    skills: [
      { name: "Git", icon: "devicon-git-plain", color: "#F05032", level: 3 },
      { name: "Docker", icon: "devicon-docker-plain", color: "#2496ED", level: 2 },
      { name: "VS Code", icon: "devicon-vscode-plain", color: "#007ACC", level: 3 },
      { name: "Figma", icon: "devicon-figma-plain", color: "#F24E1E", level: 2 },
    ],
  },
];

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
