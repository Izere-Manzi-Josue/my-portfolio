"use client";

import Image from "next/image";
import Link from "next/link";
import { Eye, Pencil } from "lucide-react";
import type { Project } from "@/types/project";
import DeleteProjectButton from "./DeleteProjectButton";


interface Props {
  project: Project;
}

export default function ProjectRow({ project }: Props) {
  return (
    <tr className="border-b border-slate-200 dark:border-slate-800">
      <td className="p-4">
        <Image
          src={project.image}
          alt={project.title}
          width={70}
          height={45}
          className="rounded-lg object-cover"
        />
      </td>

      <td className="p-4 font-medium">{project.title}</td>

      <td className="p-4">
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-orange-100 px-2 py-1 text-xs text-orange-700 dark:bg-orange-500/20 dark:text-orange-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </td>

      <td className="p-4">
        {project.featured ? (
          <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700 dark:bg-green-500/20 dark:text-green-300">
            Featured
          </span>
        ) : (
          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700 dark:bg-slate-700 dark:text-slate-300">
            Normal
          </span>
        )}
      </td>

      <td className="p-4">
        <div className="flex items-center gap-2">
          {project.liveUrl && (
            <Link
              href={project.liveUrl}
              target="_blank"
              className="rounded-lg p-2 hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              <Eye size={18} />
            </Link>
          )}

          <Link
            href={`/dashboard/project/edit/${project.id}`}
            className="rounded-lg p-2 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            <Pencil size={18} />
          </Link>

          <DeleteProjectButton id={project.id} />
        </div>
      </td>
    </tr>
  );
}
