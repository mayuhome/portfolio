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
} from "lucide-react";

const navItems = [
  { label: "Home", icon: Home, href: "#Home" },
  { label: "About", icon: User, href: "#About" },
  { label: "Skills", icon: Code2, href: "#Skills" },
  { label: "Projects", icon: FolderOpen, href: "#Projects" },
  { label: "Experience", icon: Briefcase, href: "#Experience" },
  { label: "Certifications", icon: Award, href: "#Certifications" },
  { label: "Contacts", icon: Mail, href: "#Contacts" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [mounted, setMounted] = useState(false);

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
        <div className="flex rounded-full px-8 py-3 items-center justify-center gap-10 text-lg font-light text-black dark:text-white bg-white/30 dark:bg-black/30 backdrop-blur-md border border-gray-300 dark:border-[#886fb8] shadow-lg">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                scrollTo(item.href.slice(1));
              }}
              className="flex items-center gap-2 cursor-pointer hover:text-[#886fb8] transition-all"
            >
              <item.icon size={16} />
              {item.label}
            </a>
          ))}

          {/* Divider */}
          <div className="w-[1px] h-6 bg-gray-400 dark:bg-gray-600" />

          {/* Theme toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
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
        className="fixed top-0 h-16 w-full border-b dark:border-gray-800 bg-white/70 dark:bg-black/70 md:hidden backdrop-blur-lg z-50 flex justify-between items-center px-4"
      >
        <a
          href="#Home"
          onClick={(e) => {
            e.preventDefault();
            scrollTo("Home");
          }}
          className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-[#9670df] to-[#b28ff1] bg-clip-text text-transparent"
        >
          Portfolio
        </a>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle theme"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.div>

      {/* Mobile sidebar drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/40 z-40 md:hidden"
              onClick={() => setMobileOpen(false)}
            />
            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="fixed top-0 w-[250px] h-screen bg-gray-50 dark:bg-[#0a0a0a] z-50 border-l border-gray-300 dark:border-gray-800 right-0"
            >
              <div className="flex flex-col items-start gap-8 pt-24 px-8 text-xl text-black dark:text-white">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      setMobileOpen(false);
                      scrollTo(item.href.slice(1));
                    }}
                    className="flex items-center gap-4 cursor-pointer hover:text-[#886fb8]"
                  >
                    <item.icon size={20} />
                    {item.label}
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
