export interface ExperienceItem {
  role: string;
  company: string;
  duration: string;
  description: string[];
  tech: string[];
}

export const experiences: ExperienceItem[] = [
  {
    role: "Senior Frontend Developer",
    company: "Tech Innovations Inc.",
    duration: "Jan 2024 - Present",
    description: [
      "Led the development of a next-gen dashboard platform serving 50K+ users",
      "Improved application performance by 40% through code optimization and lazy loading",
      "Mentored a team of 5 junior developers and conducted code reviews",
    ],
    tech: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
  },
  {
    role: "Full Stack Developer",
    company: "Digital Solutions Co.",
    duration: "Jun 2022 - Dec 2023",
    description: [
      "Built and maintained microservices architecture handling 1M+ daily requests",
      "Implemented real-time notification system using WebSocket",
      "Reduced deployment time by 60% with CI/CD pipeline automation",
    ],
    tech: ["Node.js", "React", "PostgreSQL", "Docker"],
  },
  {
    role: "Frontend Developer Intern",
    company: "StartUp Hub",
    duration: "Jan 2022 - May 2022",
    description: [
      "Developed responsive web applications for 3 client projects",
      "Created reusable component library used across multiple projects",
      "Participated in agile sprints and daily standups",
    ],
    tech: ["React", "JavaScript", "CSS3", "Git"],
  },
];
