import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    image: string;
    technologies: string[];
    github: string;
    live: string;
  };
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-200 transition hover:border-orange-400 dark:border-slate-700">
      <div className="overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          width={800}
          height={500}
          className="h-60 w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="space-y-4 p-6">
        <h3 className="text-2xl font-semibold">{project.title}</h3>

        <p className="text-slate-600 dark:text-slate-400">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-orange-100 px-3 py-1 text-sm text-orange-700 dark:bg-orange-500/20 dark:text-orange-300"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-5 pt-2">
          <a href={project.github} target="_blank">
            <Github />
          </a>

          <a href={project.live} target="_blank">
            <ExternalLink />
          </a>
        </div>
      </div>
    </article>
  );
}
