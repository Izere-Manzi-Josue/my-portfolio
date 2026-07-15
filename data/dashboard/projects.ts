export interface Project {
  id: number;
  title: string;
  image: string;
  technologies: string[];
  status: "Published" | "Draft";
  github: string;
  live: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Portfolio Website",
    image: "/portfolio.png",
    technologies: ["Next.js", "TypeScript", "Tailwind"],
    status: "Published",
    github: "#",
    live: "#",
  },
  {
    id: 2,
    title: "HR Management System",
    image: "/portfolio.png",
    technologies: ["React", "Node.js", "MongoDB"],
    status: "Draft",
    github: "#",
    live: "#",
  },
];
