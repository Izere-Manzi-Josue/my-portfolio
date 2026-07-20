export interface Project {
  id: number;
  title: string;
  slug: string;
  description: string;
  image: string;
  github: string | null;
  liveUrl: string | null;
  technologies: string[];
  featured: boolean;
  createdAt: Date;
}

export interface ProjectFormData {
  title: string;
  description: string;
  image: string;
  github: string;
  liveUrl: string;
  technologies: string[];
  featured: boolean;
}
