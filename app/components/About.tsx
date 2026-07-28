"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Server, Palette, Zap } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Frontend",
    desc: "React, Next.js, TypeScript, Tailwind CSS",
  },
  {
    icon: Server,
    title: "Backend",
    desc: "Node.js, Express, PostgreSQL, MongoDB",
  },
  {
    icon: Palette,
    title: "Design",
    desc: "Figma, responsive layouts, animations",
  },
  {
    icon: Zap,
    title: "Performance",
    desc: "Optimized, scalable, accessible apps",
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="About" className="relative py-20 sm:py-28 px-4">
      {/* Section gradient divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-px bg-gradient-to-r from-transparent via-[#9670df] to-transparent" />

      <div ref={ref} className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold tracking-tight mb-2">
            About{" "}
            <span className="bg-gradient-to-r from-[#9670df] to-[#b28ff1] bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#9670df] to-[#b28ff1] mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 mx-auto">
              {/* Animated border */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#9670df] to-[#b28ff1] animate-spin-slow" />
              <div className="absolute inset-[3px] rounded-3xl bg-slate-50 dark:bg-[#0a0a0a]" />
              <div className="absolute inset-0 rounded-3xl overflow-hidden flex items-center justify-center">
                <div className="text-8xl sm:text-9xl font-extrabold bg-gradient-to-br from-[#9670df] to-[#b28ff1] bg-clip-text text-transparent select-none">
                  M
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-4">
              A passionate developer who loves building things
            </h3>
            <p className="text-base font-light text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
              I&apos;m a software developer with a passion for creating elegant,
              efficient, and user-friendly web applications. With a strong
              foundation in both frontend and backend technologies, I enjoy
              tackling complex problems and turning ideas into reality through
              clean, maintainable code.
            </p>
            <p className="text-base font-light text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
              When I&apos;m not coding, you can find me exploring new
              technologies, contributing to open-source projects, or learning
              about the latest trends in web development.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
                  className="p-4 rounded-xl bg-slate-100 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 hover:border-[#b28ff1] transition-all duration-300"
                >
                  <item.icon className="text-[#9670df] dark:text-[#b28ff1] mb-2" size={20} />
                  <h4 className="font-bold text-sm mb-1">{item.title}</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-light">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
