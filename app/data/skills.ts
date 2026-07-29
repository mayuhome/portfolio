export interface Skill {
  name: string;
  icon: string;
  color: string;
  level: number;
}

export interface SkillCategory {
  titleKey: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    titleKey: "skills.languages",
    skills: [
      { name: "JavaScript", icon: "devicon-javascript-plain", color: "#F7DF1E", level: 3 },
      { name: "TypeScript", icon: "devicon-typescript-plain", color: "#3178C6", level: 3 },
      { name: "C#", icon: "devicon-csharp-plain", color: "#3776AB", level: 2 },
      { name: "Python", icon: "devicon-python-plain", color: "#E34F26", level: 1 },
    ],
  },
  {
    titleKey: "skills.frontend",
    skills: [
      { name: "Angular", icon: "devicon-angularjs-plain", color: "#DD0031", level: 3 },
      { name: "React", icon: "devicon-react-original", color: "#61DAFB", level: 2 },
      { name: "Next.js", icon: "devicon-nextjs-plain colored", color: "#000000", level: 2 },
      { name: "Tailwind CSS", icon: "devicon-tailwindcss-plain", color: "#06B6D4", level: 3 },
      { name: "Vue.js", icon: "devicon-vuejs-plain", color: "#4FC08D", level: 2 },
    ],
  },
  {
    titleKey: "skills.backend",
    skills: [
      { name: "Node.js", icon: "devicon-nodejs-plain", color: "#339933", level: 3 },
      { name: "NestJS", icon: "devicon-nestjs-original colored", color: "#df234f", level: 3 },
      { name: ".NET", icon: "devicon-dotnetcore-plain colored", color: "#3776AB", level: 2 },
      { name: "PostgreSQL", icon: "devicon-postgresql-plain", color: "#4169E1", level: 2 },
      { name: "MongoDB", icon: "devicon-mongodb-plain", color: "#47A248", level: 2 },
    ],
  },
  {
    titleKey: "skills.tools",
    skills: [
      { name: "Git", icon: "devicon-git-plain", color: "#F05032", level: 3 },
      { name: "Docker", icon: "devicon-docker-plain", color: "#2496ED", level: 2 },
      { name: "VS Code", icon: "devicon-vscode-plain", color: "#007ACC", level: 3 },
      { name: "Figma", icon: "devicon-figma-plain", color: "#F24E1E", level: 2 },
    ],
  },
];
