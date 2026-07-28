"use client";

import { createContext, useContext, useState, useEffect, ReactNode, startTransition } from "react";

type Lang = "en" | "zh";

interface LanguageContextType {
  lang: Lang;
  toggleLang: () => void;
  t: (key: string) => string;
}

const translations: Record<Lang, Record<string, string>> = {
  en: {
    // Navbar
    "nav.home": "Home",
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.experience": "Experience",
    "nav.certifications": "Certifications",
    "nav.contacts": "Contacts",

    // Hero
    "hero.welcome": "Welcome to my portfolio",
    "hero.love": "I love ",
    "hero.typewriter.1": "Full-Stack Web Development",
    "hero.typewriter.2": "UI/UX Design",
    "hero.typewriter.3": "Creative Problem Solving",
    "hero.typewriter.4": "Scalable System Design",
    "hero.desc": "Passionate developer crafting beautiful, performant web experiences with modern technologies. Always learning, always building.",
    "hero.resume": "Download Resume",

    // About
    "about.title": "About Me",
    "about.subtitle": "A passionate developer who loves building things",
    "about.p1": "I'm a software developer with a passion for creating elegant, efficient, and user-friendly web applications. With a strong foundation in both frontend and backend technologies, I enjoy tackling complex problems and turning ideas into reality through clean, maintainable code.",
    "about.p2": "When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or learning about the latest trends in web development.",
    "about.frontend": "Frontend",
    "about.frontend.desc": "React, Next.js, TypeScript, Tailwind CSS",
    "about.backend": "Backend",
    "about.backend.desc": "Node.js, Express, PostgreSQL, MongoDB",
    "about.design": "Design",
    "about.design.desc": "Figma, responsive layouts, animations",
    "about.performance": "Performance",
    "about.performance.desc": "Optimized, scalable, accessible apps",

    // Skills
    "skills.title": "My Skills",
    "skills.languages": "Core Languages",
    "skills.frontend": "Frontend",
    "skills.backend": "Backend & Databases",
    "skills.tools": "Tools & Platforms",

    // Projects
    "projects.title": "My Projects",
    "projects.source": "Source Code",
    "projects.live": "Live Demo",

    // Experience
    "experience.title": "Work Experience",

    // Certifications
    "certifications.title": "Certifications",
    "certifications.verified": "Verified",

    // Contact
    "contact.title": "Get In Touch",
    "contact.desc": "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.",
    "contact.name": "Your Name",
    "contact.email": "Your Email",
    "contact.message": "Your Message",
    "contact.name.placeholder": "John Doe",
    "contact.email.placeholder": "john@example.com",
    "contact.message.placeholder": "Tell me about your project...",
    "contact.send": "Send Message",
    "contact.work": "Let's work together",
    "contact.work.desc": "Whether you have a question or just want to say hi, I'll try my best to get back to you!",
    "contact.location": "Location",
    "contact.footer": "Jade | All rights reserved",
  },
  zh: {
    // Navbar
    "nav.home": "首页",
    "nav.about": "关于",
    "nav.skills": "技能",
    "nav.projects": "项目",
    "nav.experience": "经历",
    "nav.certifications": "认证",
    "nav.contacts": "联系",

    // Hero
    "hero.welcome": "欢迎来到我的作品集",
    "hero.love": "我热爱 ",
    "hero.typewriter.1": "全栈Web开发",
    "hero.typewriter.2": "UI/UX设计",
    "hero.typewriter.3": "创造性问题解决",
    "hero.typewriter.4": "可扩展系统设计",
    "hero.desc": "热衷于使用现代技术打造美观、高性能的Web应用。持续学习，持续构建。",
    "hero.resume": "下载简历",

    // About
    "about.title": "关于我",
    "about.subtitle": "一个热爱创造的开发者",
    "about.p1": "我是一名软件开发者，热衷于创建优雅、高效且用户友好的Web应用。凭借扎实的前后端技术基础，我喜欢解决复杂问题，通过整洁、可维护的代码将想法变为现实。",
    "about.p2": "不写代码的时候，你可以发现我在探索新技术、为开源项目做贡献，或者学习Web开发的最新趋势。",
    "about.frontend": "前端",
    "about.frontend.desc": "React, Next.js, TypeScript, Tailwind CSS",
    "about.backend": "后端",
    "about.backend.desc": "Node.js, Express, PostgreSQL, MongoDB",
    "about.design": "设计",
    "about.design.desc": "Figma, 响应式布局, 动画效果",
    "about.performance": "性能",
    "about.performance.desc": "优化、可扩展、无障碍的应用",

    // Skills
    "skills.title": "我的技能",
    "skills.languages": "核心语言",
    "skills.frontend": "前端开发",
    "skills.backend": "后端与数据库",
    "skills.tools": "工具与平台",

    // Projects
    "projects.title": "我的项目",
    "projects.source": "源代码",
    "projects.live": "在线演示",

    // Experience
    "experience.title": "工作经历",

    // Certifications
    "certifications.title": "专业认证",
    "certifications.verified": "已认证",

    // Contact
    "contact.title": "联系我",
    "contact.desc": "随时欢迎讨论新项目、创意想法，或成为您愿景的一部分。",
    "contact.name": "您的姓名",
    "contact.email": "您的邮箱",
    "contact.message": "您的留言",
    "contact.name.placeholder": "张三",
    "contact.email.placeholder": "zhangsan@example.com",
    "contact.message.placeholder": "告诉我关于您的项目...",
    "contact.send": "发送消息",
    "contact.work": "一起合作吧",
    "contact.work.desc": "无论您有问题还是只想打个招呼，我都会尽力回复您！",
    "contact.location": "所在地",
    "contact.footer": "Jade | 版权所有",
  },
};

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
