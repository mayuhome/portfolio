"use client";

import { useState, useEffect } from "react";
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
} from "lucide-react";
import { useLang } from "../contexts/LanguageContext";

const navItemKeys = [
  { key: "nav.home", icon: Home, href: "#Home" },
  { key: "nav.about", icon: User, href: "#About" },
  { key: "nav.skills", icon: Code2, href: "#Skills" },
  { key: "nav.projects", icon: FolderOpen, href: "#Projects" },
  { key: "nav.experience", icon: Briefcase, href: "#Experience" },
  { key: "nav.certifications", icon: Award, href: "#Certifications" },
  { key: "nav.contacts", icon: Mail, href: "#Contacts" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [mounted, setMounted] = useState(false);
  const { lang, toggleLang, t } = useLang();

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored) {
      setDarkMode(stored === "dark");
    } else {
      setDarkMode(window.matchMedia("(prefers-color-scheme: dark)").matches);
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode, mounted]);

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
        <div className="flex rounded-full px-8 py-3 items-center justify-center gap-10 text-lg font-light text-foreground bg-card/60 backdrop-blur-xl border border-card-border shadow-lg">
          {navItemKeys.map((item) => (
            <a
              key={item.key}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                scrollTo(item.href.slice(1));
              }}
              className="flex items-center gap-2 cursor-pointer hover:text-accent transition-all"
            >
              <item.icon size={16} />
              {t(item.key)}
            </a>
          ))}

          <div className="w-[1px] h-6 bg-card-border" />

          <button
            onClick={toggleLang}
            className="flex items-center gap-1 px-2 py-1.5 rounded-full hover:bg-card transition-colors text-sm"
            aria-label="Toggle language"
          >
            <Globe size={16} />
            {lang === "en" ? "中文" : "EN"}
          </button>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full hover:bg-card transition-colors"
            aria-label="Toggle theme"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
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
            className="flex items-center gap-1 px-2 py-1.5 rounded-full hover:bg-card transition-colors text-sm"
            aria-label="Toggle language"
          >
            <Globe size={14} />
            {lang === "en" ? "中文" : "EN"}
          </button>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full hover:bg-card transition-colors"
            aria-label="Toggle theme"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 rounded-full hover:bg-card transition-colors"
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
              <div className="flex flex-col items-start gap-8 pt-24 px-8 text-xl text-foreground">
                {navItemKeys.map((item) => (
                  <a
                    key={item.key}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      setMobileOpen(false);
                      scrollTo(item.href.slice(1));
                    }}
                    className="flex items-center gap-4 cursor-pointer hover:text-accent"
                  >
                    <item.icon size={20} />
                    {t(item.key)}
                  </a>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
