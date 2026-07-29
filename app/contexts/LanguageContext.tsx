"use client";

import { createContext, useContext, useState, useEffect, ReactNode, startTransition } from "react";
import { translations, type Lang } from "../data/translations";

interface LanguageContextType {
  lang: Lang;
  toggleLang: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    startTransition(() => {
      const stored = localStorage.getItem("lang") as Lang;
      if (stored === "en" || stored === "zh") {
        setLang(stored);
      }
      setMounted(true);
    });
  }, []);

  const toggleLang = () => {
    const next = lang === "en" ? "zh" : "en";
    setLang(next);
    localStorage.setItem("lang", next);
  };

  const t = (key: string): string => {
    return translations[lang][key] ?? key;
  };

  if (!mounted) {
    return (
      <LanguageContext.Provider value={{ lang: "en", toggleLang, t: (key) => translations["en"][key] ?? key }}>
        {children}
      </LanguageContext.Provider>
    );
  }

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLang must be used within LanguageProvider");
  return context;
}
