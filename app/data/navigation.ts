export interface NavItem {
  key: string;
  icon: string;
  href: string;
}

export const navItems: NavItem[] = [
  { key: "nav.home", icon: "Home", href: "#Home" },
  { key: "nav.about", icon: "User", href: "#About" },
  { key: "nav.skills", icon: "Code2", href: "#Skills" },
  { key: "nav.projects", icon: "FolderOpen", href: "#Projects" },
  { key: "nav.experience", icon: "Briefcase", href: "#Experience" },
  { key: "nav.certifications", icon: "Award", href: "#Certifications" },
  { key: "nav.contacts", icon: "Mail", href: "#Contacts" },
];
