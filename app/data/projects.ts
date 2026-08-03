export interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
  github?: string;
  live?: string;
  color: string;
}

export const projects: Project[] = [
  {
    title: "Industrial IoT Platform",
    description: " A comprehensive Industrial IoT platform that enables real-time monitoring, predictive maintenance, and data analytics for manufacturing equipment. It integrates with various sensors and devices to provide actionable insights.",
    tech: ["Angular", ".NET", "MQTT", "PostgreSQL", "Tailwind"],
    image: "/projects/ecommerce.jpg",
    github: "https://github.com",
    live: "https://example.com",
    color: "#9670df",
  },
  {
    title: "AI Chat Application",
    description: "Real-time chat application powered by AI with natural language processing capabilities. Features include message history, typing indicators, and smart suggestions.",
    tech: ["React", "Node.js", "OpenAI", "Socket.io", "MongoDB"],
    image: "/projects/chat.jpg",
    github: "https://github.com",
    color: "#61DAFB",
  },
  {
    title: "Task Management Dashboard",
    description: "Collaborative project management tool with Kanban boards, time tracking, team analytics, and real-time notifications for seamless workflow management.",
    tech: ["Vue.js", "Express", "PostgreSQL", "Redis", "Docker"],
    image: "/projects/task.jpg",
    github: "https://github.com",
    color: "#4FC08D",
  },
  {
    title: "Weather Forecast App",
    description: "Beautiful weather application with 7-day forecasts, interactive maps, severe weather alerts, and location-based recommendations.",
    tech: ["React", "TypeScript", "OpenWeather API", "Mapbox"],
    image: "/projects/weather.jpg",
    github: "https://github.com",
    live: "https://example.com",
    color: "#F59E0B",
  },
  {
    title: "Portfolio Generator",
    description: "Dynamic portfolio generator that creates stunning portfolio websites from markdown files. Features customizable themes and automatic deployment.",
    tech: ["Next.js", "MDX", "Tailwind", "Vercel"],
    image: "/projects/portfolio.jpg",
    github: "https://github.com",
    color: "#EC4899",
  },
  {
    title: "Fitness Tracker",
    description: "Comprehensive fitness tracking app with workout logging, progress visualization, meal planning, and integration with wearable devices.",
    tech: ["React Native", "Firebase", "Chart.js", "Node.js"],
    image: "/projects/fitness.jpg",
    github: "https://github.com",
    color: "#10B981",
  },
];
