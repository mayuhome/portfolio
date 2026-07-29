"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Calendar } from "lucide-react";
import { useLang } from "../contexts/LanguageContext";
import { certifications } from "../data/certifications";

export default function Certifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLang();

  const doubledCerts = [...certifications, ...certifications];

  return (
    <section id="Certifications" className="relative py-20 sm:py-28 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />

      <div ref={ref} className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold tracking-tight mb-2">
            <span className="bg-gradient-to-r from-accent-dark to-accent bg-clip-text text-transparent">
              {t("certifications.title")}
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent-dark to-accent mx-auto rounded-full" />
        </motion.div>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />

        <div className="flex animate-infinite-scroll">
          {doubledCerts.map((cert, i) => (
            <div
              key={`${cert.title}-${i}`}
              className="flex-shrink-0 w-[300px] sm:w-[350px] mx-3"
            >
              <div className="h-50 p-6 rounded-2xl bg-card border border-card-border hover:border-accent transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="p-2 rounded-lg"
                      style={{ backgroundColor: `${cert.color}15` }}
                    >
                      <Award size={20} style={{ color: cert.color }} />
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted">
                      <Calendar size={12} />
                      {cert.date}
                    </div>
                  </div>
                  <h3 className="font-bold text-base mb-1">{cert.title}</h3>
                  <p className="text-sm text-muted font-light">
                    {cert.issuer}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span className="text-xs text-emerald-500 font-medium">
                    {t("certifications.verified")}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
