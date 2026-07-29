export interface Highlight {
  icon: string;
  titleKey: string;
  descKey: string;
}

export const highlights: Highlight[] = [
  { icon: "Code2", titleKey: "about.frontend", descKey: "about.frontend.desc" },
  { icon: "Server", titleKey: "about.backend", descKey: "about.backend.desc" },
  { icon: "Palette", titleKey: "about.design", descKey: "about.design.desc" },
  { icon: "Zap", titleKey: "about.performance", descKey: "about.performance.desc" },
];
