export interface Certification {
  title: string;
  issuer: string;
  date: string;
  color: string;
}

export const certifications: Certification[] = [
  { title: "AWS Certified Developer", issuer: "Amazon Web Services", date: "2024", color: "#FF9900" },
  { title: "Meta Frontend Developer", issuer: "Meta", date: "2024", color: "#0668E1" },
  { title: "Google UX Design", issuer: "Google", date: "2023", color: "#4285F4" },
  { title: "JavaScript Algorithms", issuer: "freeCodeCamp", date: "2023", color: "#0A0A23" },
  { title: "React Developer Certification", issuer: "HackerRank", date: "2023", color: "#00EA64" },
  { title: "MongoDB Associate Developer", issuer: "MongoDB", date: "2024", color: "#47A248" },
];
