export interface ExperienceItem {
  role: string;
  company: string;
  duration: string;
  description: string[];
  tech: string[];
}

export const experiences: ExperienceItem[] = [
  {
    role: "Senior Software Developer",
    company: "Trumpf GmbH + Co. KG",
    duration: "Jun 2020 - Present",
    description: [
      "Develop and maintain industry-leading software solutions for manufacturing IOT systems",
    ],
    tech: ["Angular", "TypeScript", "Nest.js", ".NET", "Tailwind CSS"],
  },
  {
    role: "Full Stack Developer",
    company: "Capgemini",
    duration: "Mar 2015 - Jun 2020",
    description: [
      "Implemented real-time notification system using WebSocket",
    ],
    tech: ["Node.js", "Angular", ".NET", "Vuejs"],
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
