"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Server, Palette, Zap } from "lucide-react";
import { useLang } from "../contexts/LanguageContext";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLang();

  const highlights = [
    { icon: Code2, titleKey: "about.frontend", descKey: "about.frontend.desc" },
    { icon: Server, titleKey: "about.backend", descKey: "about.backend.desc" },
    { icon: Palette, titleKey: "about.design", descKey: "about.design.desc" },
    { icon: Zap, titleKey: "about.performance", descKey: "about.performance.desc" },
  ];

  return (
    <section id="About" className="relative py-20 sm:py-28 px-4">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-px bg-gradient-to-r from-transparent via-[#9670df] to-transparent" />

      <div ref={ref} className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold tracking-tight mb-2">
            {t("about.title").split(" ").slice(0, -1).join(" ")}{" "}
            <span className="bg-gradient-to-r from-[#9670df] to-[#b28ff1] bg-clip-text text-transparent">
              {t("about.title").split(" ").slice(-1)}
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
            <h3 className="text-2xl font-bold mb-4">{t("about.subtitle")}</h3>
            <p className="text-base font-light text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
              {t("about.p1")}
            </p>
            <p className="text-base font-light text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
              {t("about.p2")}
            </p>

            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, i) => (
                <motion.div
                  key={item.titleKey}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
                  className="p-4 rounded-xl bg-slate-100 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 hover:border-[#b28ff1] transition-all duration-300"
                >
                  <item.icon className="text-[#9670df] dark:text-[#b28ff1] mb-2" size={20} />
                  <h4 className="font-bold text-sm mb-1">{t(item.titleKey)}</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-light">
                    {t(item.descKey)}
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
