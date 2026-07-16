import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { PiArrowUpRightBold } from "react-icons/pi";
import { Project } from "@/types/project";

interface ProjectCardProps {
  project: Project;
}
export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group rounded-xl border border-transparent transition-all duration-300 hover:bg-slate-100/50 dark:hover:bg-slate-800">
      <div className="flex flex-col gap-6 lg:p-6 md:flex-row">
        {/* Image */}
        <div className="w-full md:w-1/3 lg:w-2/5">
          <div className="overflow-hidden rounded-xl">
            <Image
              src={project.image}
              alt={project.title}
              width={800}
              height={500}
              className="h-48 w-full object-cover transition duration-500 group-hover:scale-105 md:h-full"
            />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 space-y-3">
          <div className="flex items-center gap-2">
            <Link
              href={project.liveUrl || "#"}
              target="_blank"
              className="text-xl font-semibold transition-colors duration-300 group-hover:text-orange-500 dark:text-white"
            >
              {project.title}
            </Link>

            <PiArrowUpRightBold className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-orange-500" />
          </div>

          <p className="leading-5 text-slate-600 dark:text-slate-400">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-1">
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
            <Link
              href={project.github || "#"}
              target="_blank"
              className="transition group-hover:text-orange-500"
            >
              <FaGithub size={24} />
            </Link>

            <Link
              href={project.liveUrl || "#"}
              target="_blank"
              className="transition group-hover:text-orange-500"
            >
              <ExternalLink size={24} />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
