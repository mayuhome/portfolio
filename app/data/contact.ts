export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
}

export interface SocialLink {
  label: string;
  href: string;
}

export const contactInfo: ContactInfo = {
  email: "mayuhome@163.com",
  phone: "+86 189 1366 5695",
  location: "Shanghai, China",
};

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/mayuhome" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Email", href: "mailto:mayuhome@163.com" },
];
