"use client";

import { useState, useEffect, startTransition } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  User,
  Code2,
  FolderOpen,
  Briefcase,
  Award,
  Mail,
  Menu,
  X,
  Sun,
  Moon,
  Globe,
  type LucideIcon,
} from "lucide-react";
import { useLang } from "../contexts/LanguageContext";
import { navItems } from "../data/navigation";

const iconMap: Record<string, LucideIcon> = {
  Home,
  User,
  Code2,
  FolderOpen,
  Briefcase,
  Award,
  Mail,
};

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const [mounted, setMounted] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");
  const { lang, toggleLang, t } = useLang();

  const getInitialTheme = (): boolean => {
  if (typeof window === 'undefined') return false; // SSR安全
  
  const stored = localStorage.getItem("theme");
  if (stored === 'dark') return true;
  if (stored === 'light') return false;
  
  // 没有存储的值，使用系统偏好
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
};

  const [darkMode, setDarkMode] = useState(getInitialTheme());

  useEffect(() => {
    startTransition(() => {
      setMounted(true);
    });
  }, []);

  useEffect(() => {
    if (!mounted) return;
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode, mounted]);

  // IntersectionObserver for active section tracking
  useEffect(() => {
    const sectionIds = navItems.map((item) => item.href.slice(1));
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          });
        },
        {
          rootMargin: "-40% 0px -55% 0px",
          threshold: 0,
        }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [mounted]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      {/* Desktop: centered floating pill */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full pt-4 fixed top-0 md:flex flex-col items-center hidden z-30"
      >
        <div className="relative flex rounded-full px-4 py-2 items-center justify-center gap-1 text-base font-light text-foreground bg-card/60 backdrop-blur-xl border border-card-border shadow-lg">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.slice(1);
            const Icon = iconMap[item.icon];
            return (
              <a
                key={item.key}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(item.href.slice(1));
                }}
                className={`relative flex items-center gap-1.5 px-3 py-1.5 rounded-full cursor-pointer transition-colors duration-300 z-10 ${
                  isActive
                    ? "text-accent font-medium"
                    : "text-muted hover:text-foreground"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="nav-active-pill"
                    className="absolute inset-0 rounded-full bg-accent/10 border border-accent/30"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-1.5">
                  {Icon && <Icon size={15} />}
                  {t(item.key)}
                </span>
              </a>
            );
          })}

          <div className="w-px h-6 bg-card-border mx-2" />

          <button
            onClick={toggleLang}
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-full hover:bg-card transition-colors text-sm text-muted"
            aria-label="Toggle language"
          >
            <Globe size={15} />
            {lang === "en" ? "中文" : "EN"}
          </button>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full hover:bg-card transition-colors text-muted"
            aria-label="Toggle theme"
          >
            {darkMode ? <Sun size={17} /> : <Moon size={17} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile: full-width top bar */}
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 h-16 w-full border-b border-card-border bg-card/70 backdrop-blur-xl md:hidden z-50 flex justify-between items-center px-4"
      >
        <a
          href="#Home"
          onClick={(e) => {
            e.preventDefault();
            scrollTo("Home");
          }}
          className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-accent-dark to-accent bg-clip-text text-transparent"
        >
          Portfolio
        </a>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleLang}
            className="flex items-center gap-1 px-2 py-1.5 rounded-full hover:bg-card transition-colors text-sm text-muted"
            aria-label="Toggle language"
          >
            <Globe size={14} />
            {lang === "en" ? "中文" : "EN"}
          </button>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full hover:bg-card transition-colors text-muted"
            aria-label="Toggle theme"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 rounded-full hover:bg-card transition-colors text-muted"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.div>

      {/* Mobile sidebar drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/40 z-40 md:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="fixed top-0 w-[250px] h-screen bg-background z-50 border-l border-card-border right-0"
            >
              <div className="flex flex-col items-start gap-6 pt-24 px-8 text-xl">
                {navItems.map((item) => {
                  const isActive = activeSection === item.href.slice(1);
                  const Icon = iconMap[item.icon];
                  return (
                    <a
                      key={item.key}
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        setMobileOpen(false);
                        scrollTo(item.href.slice(1));
                      }}
                      className={`flex items-center gap-4 cursor-pointer transition-colors duration-200 ${
                        isActive
                          ? "text-accent font-medium"
                          : "text-muted hover:text-foreground"
                      }`}
                    >
                      {Icon && <Icon size={20} />}
                      {t(item.key)}
                      {isActive && (
                        <span className="w-1.5 h-1.5 rounded-full bg-accent ml-auto" />
                      )}
                    </a>
                  );
                })}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
