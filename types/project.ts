export interface Project {
  id?: number;
  title: string;
  description: string;
  image: string;
  github: string | null;
  liveUrl: string | null;
  technologies: string[];
  featured: boolean;
}
