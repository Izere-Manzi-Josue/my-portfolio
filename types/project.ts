export interface Project {
  id?: number;
  title: string;
  description: string;
  image: string;
  github: string;
  live: string;
  technologies: string[];
  status: "Published" | "Draft";
}
