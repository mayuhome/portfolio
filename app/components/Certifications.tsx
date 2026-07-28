"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Calendar } from "lucide-react";

interface Certification {
  title: string;
  issuer: string;
  date: string;
  color: string;
}

const certifications: Certification[] = [
  { title: "AWS Certified Developer", issuer: "Amazon Web Services", date: "2024", color: "#FF9900" },
  { title: "Meta Frontend Developer", issuer: "Meta", date: "2024", color: "#0668E1" },
  { title: "Google UX Design", issuer: "Google", date: "2023", color: "#4285F4" },
  { title: "JavaScript Algorithms", issuer: "freeCodeCamp", date: "2023", color: "#0A0A23" },
  { title: "React Developer Certification", issuer: "HackerRank", date: "2023", color: "#00EA64" },
  { title: "MongoDB Associate Developer", issuer: "MongoDB", date: "2024", color: "#47A248" },
];

export default function Certifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Double the array for seamless infinite scroll
  const doubledCerts = [...certifications, ...certifications];

  return (
    <section id="Certifications" className="relative py-20 sm:py-28 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-px bg-gradient-to-r from-transparent via-[#9670df] to-transparent" />

      <div ref={ref} className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold tracking-tight mb-2">
            <span className="bg-gradient-to-r from-[#9670df] to-[#b28ff1] bg-clip-text text-transparent">
              Certifications
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#9670df] to-[#b28ff1] mx-auto rounded-full" />
        </motion.div>
      </div>

      {/* Infinite scroll carousel */}
      <div className="relative">
        {/* Edge fades */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-slate-50 dark:from-[#0a0a0a] to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-slate-50 dark:from-[#0a0a0a] to-transparent z-10" />

        <div className="flex animate-infinite-scroll">
          {doubledCerts.map((cert, i) => (
            <div
              key={`${cert.title}-${i}`}
              className="flex-shrink-0 w-[300px] sm:w-[350px] mx-3"
            >
              <div className="h-[200px] p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 hover:border-[#b28ff1] transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="p-2 rounded-lg"
                      style={{ backgroundColor: `${cert.color}15` }}
                    >
                      <Award size={20} style={{ color: cert.color }} />
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                      <Calendar size={12} />
                      {cert.date}
                    </div>
                  </div>
                  <h3 className="font-bold text-base mb-1">{cert.title}</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 font-light">
                    {cert.issuer}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span className="text-xs text-emerald-500 font-medium">
                    Verified
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
