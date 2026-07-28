"use client";

import { motion } from "framer-motion";
import { useTypewriter } from "react-simple-typewriter";
import { GitFork, Link2, Mail, Download, ChevronDown } from "lucide-react";
import { useLang } from "../contexts/LanguageContext";

export default function Hero() {
  const { t } = useLang();

  const [text] = useTypewriter({
    words: [
      t("hero.typewriter.1"),
      t("hero.typewriter.2"),
      t("hero.typewriter.3"),
      t("hero.typewriter.4"),
    ],
    loop: true,
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 1500,
  });

  return (
    <section
      id="Home"
      className="relative min-h-screen flex items-center justify-center"
    >
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-sm sm:text-base font-light tracking-wider uppercase text-accent mb-4">
            {t("hero.welcome")}
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl sm:text-7xl font-extrabold tracking-tight mb-6"
        >
          <span className="bg-gradient-to-r from-accent-dark to-accent bg-clip-text text-transparent">
            Maja
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-2xl sm:text-4xl font-light mb-6 h-12"
        >
          <span className="text-muted">{t("hero.love")}</span>
          <span className="text-accent font-medium">
            {text}
            <span className="animate-pulse">|</span>
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-base sm:text-lg font-light text-muted max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {t("hero.desc")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <a
            href="/resume.pdf"
            download
            className="flex items-center gap-2 px-8 py-3 bg-accent-dark hover:bg-accent-hover text-white rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-accent/30 transform hover:-translate-y-1"
          >
            <Download size={18} />
            {t("hero.resume")}
          </a>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card hover:bg-accent/10 border border-card-border transition-all duration-300 hover:-translate-y-1"
            >
              <GitFork size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card hover:bg-accent/10 border border-card-border transition-all duration-300 hover:-translate-y-1"
            >
              <Link2 size={20} />
            </a>
            <a
              href="mailto:hello@example.com"
              className="p-3 rounded-full bg-card hover:bg-accent/10 border border-card-border transition-all duration-300 hover:-translate-y-1"
            >
              <Mail size={20} />
            </a>
          </div>
        </motion.div>

        <motion.a
          href="#About"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="inline-block"
        >
          <ChevronDown
            size={28}
            className="animate-bounce text-accent"
          />
        </motion.a>
      </div>
    </section>
  );
}
