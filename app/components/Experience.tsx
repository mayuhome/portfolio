"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar } from "lucide-react";

interface ExperienceItem {
  role: string;
  company: string;
  duration: string;
  description: string[];
  tech: string[];
}

const experiences: ExperienceItem[] = [
  {
    role: "Senior Frontend Developer",
    company: "Tech Innovations Inc.",
    duration: "Jan 2024 - Present",
    description: [
      "Led the development of a next-gen dashboard platform serving 50K+ users",
      "Improved application performance by 40% through code optimization and lazy loading",
      "Mentored a team of 5 junior developers and conducted code reviews",
    ],
    tech: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
  },
  {
    role: "Full Stack Developer",
    company: "Digital Solutions Co.",
    duration: "Jun 2022 - Dec 2023",
    description: [
      "Built and maintained microservices architecture handling 1M+ daily requests",
      "Implemented real-time notification system using WebSocket",
      "Reduced deployment time by 60% with CI/CD pipeline automation",
    ],
    tech: ["Node.js", "React", "PostgreSQL", "Docker"],
  },
  {
    role: "Frontend Developer Intern",
    company: "StartUp Hub",
    duration: "Jan 2022 - May 2022",
    description: [
      "Developed responsive web applications for 3 client projects",
      "Created reusable component library used across multiple projects",
      "Participated in agile sprints and daily standups",
    ],
    tech: ["React", "JavaScript", "CSS3", "Git"],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="Experience" className="relative py-20 sm:py-28 px-4">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-px bg-gradient-to-r from-transparent via-[#9670df] to-transparent" />

      <div ref={ref} className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold tracking-tight mb-2">
            Work{" "}
            <span className="bg-gradient-to-r from-[#9670df] to-[#b28ff1] bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#9670df] to-[#b28ff1] mx-auto rounded-full" />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-slate-200 dark:bg-slate-800 hidden md:block" />

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
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-6">
                  <div className="relative">
                    <div className="w-4 h-4 rounded-full bg-white dark:bg-slate-900 border-2 border-[#9670df] dark:border-[#b28ff1] group-hover:bg-[#9670df] shadow-[0_0_10px_rgba(150,112,223,0.3)]" />
                    <div className="absolute inset-0 w-4 h-4 rounded-full bg-[#9670df] animate-ping opacity-20" />
                  </div>
                </div>

                {/* Content */}
                <div className={`md:w-1/2 ${i % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                  <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 hover:border-[#b28ff1] transition-all duration-300 shadow-sm hover:shadow-xl">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 rounded-lg bg-[#9670df]/10">
                        <Briefcase size={18} className="text-[#9670df] dark:text-[#b28ff1]" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">{exp.role}</h3>
                        <p className="text-[#9670df] dark:text-[#b28ff1] font-medium text-sm">
                          {exp.company}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 mb-4 text-sm text-slate-500 dark:text-slate-400">
                      <Calendar size={14} />
                      {exp.duration}
                    </div>

                    <ul className="space-y-2 mb-4">
                      {exp.description.map((desc, j) => (
                        <li
                          key={j}
                          className="text-sm text-slate-600 dark:text-slate-400 font-light flex items-start gap-2"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#9670df] dark:bg-[#b28ff1] mt-1.5 shrink-0" />
                          {desc}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 text-xs font-semibold rounded-full bg-[#9670df]/10 text-[#9670df] dark:text-[#b28ff1]"
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
