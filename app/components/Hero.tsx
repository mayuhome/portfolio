"use client";

import { motion } from "framer-motion";
import { useTypewriter } from "react-simple-typewriter";
import { GitFork, Link2, Mail, Download, ChevronDown } from "lucide-react";

export default function Hero() {
  const [text] = useTypewriter({
    words: [
      "Full-Stack Web Development",
      "UI/UX Design",
      "Creative Problem Solving",
      "Scalable System Design",
    ],
    loop: true,
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 1500,
  });

  return (
    <section
      id="Home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-72 h-72 bg-[#9670df]/20 dark:bg-[#b28ff1]/10 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[120px] animate-blob" />
        <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-400/20 dark:bg-blue-600/10 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[120px] animate-blob animation-delay-2000" />
        <div className="absolute -bottom-32 left-20 w-72 h-72 bg-emerald-400/20 dark:bg-emerald-500/10 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[120px] animate-blob animation-delay-4000" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 grid-pattern opacity-50" />

      {/* Floating particles */}
      <FloatingParticles />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-sm sm:text-base font-light tracking-wider uppercase text-[#9670df] dark:text-[#b28ff1] mb-4">
            Welcome to my portfolio
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl sm:text-7xl font-extrabold tracking-tight mb-6"
        >
          <span className="bg-gradient-to-r from-[#9670df] to-[#b28ff1] bg-clip-text text-transparent">
            Maja
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-2xl sm:text-4xl font-light mb-6 h-12"
        >
          <span className="text-slate-500 dark:text-slate-400">I love </span>
          <span className="text-[#9670df] dark:text-[#b28ff1] font-medium">
            {text}
            <span className="animate-pulse">|</span>
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-base sm:text-lg font-light text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Passionate developer crafting beautiful, performant web experiences
          with modern technologies. Always learning, always building.
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
            className="flex items-center gap-2 px-8 py-3 bg-[#9670df] hover:bg-[#8563c9] dark:bg-[#5a4392] dark:hover:bg-[#b28ff1] text-white rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-[#9670df]/30 transform hover:-translate-y-1"
          >
            <Download size={18} />
            Download Resume
          </a>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-slate-200/50 dark:bg-white/10 hover:bg-[#9670df]/20 dark:hover:bg-[#b28ff1]/20 border border-slate-300/50 dark:border-white/20 transition-all duration-300 hover:-translate-y-1"
            >
              <GitFork size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-slate-200/50 dark:bg-white/10 hover:bg-[#9670df]/20 dark:hover:bg-[#b28ff1]/20 border border-slate-300/50 dark:border-white/20 transition-all duration-300 hover:-translate-y-1"
            >
              <Link2 size={20} />
            </a>
            <a
              href="mailto:hello@example.com"
              className="p-3 rounded-full bg-slate-200/50 dark:bg-white/10 hover:bg-[#9670df]/20 dark:hover:bg-[#b28ff1]/20 border border-slate-300/50 dark:border-white/20 transition-all duration-300 hover:-translate-y-1"
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
            className="animate-bounce text-[#9670df] dark:text-[#b28ff1]"
          />
        </motion.a>
      </div>
    </section>
  );
}

function FloatingParticles() {
  const particles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    size: Math.random() * 8 + 4,
    duration: Math.random() * 15 + 10,
    delay: Math.random() * 10,
    shape: i % 3 === 0 ? "circle" : i % 3 === 1 ? "square" : "code",
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute animate-float-up opacity-20 dark:opacity-10"
          style={{
            left: p.left,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        >
          {p.shape === "circle" ? (
            <div
              className="rounded-full bg-[#b28ff1]"
              style={{ width: p.size, height: p.size }}
            />
          ) : p.shape === "square" ? (
            <div
              className="rounded-sm bg-blue-400"
              style={{ width: p.size, height: p.size }}
            />
          ) : (
            <span
              className="text-emerald-400 font-mono"
              style={{ fontSize: p.size }}
            >
              {"</>"}
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
