"use client";

import { useState } from "react";
import { Project } from "@/types/project";
import ProjectCard from "@/components/ui/ProjectCard";


interface ProjectListProps {
  projects: Project[];
}

export default function ProjectList({ projects }: ProjectListProps) {
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll ? projects : projects.slice(0, 5);

  return (
    <>
      <div>
        {visibleProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {projects.length > 5 && (
        <div className="flex justify-center py-6">
          <button
            type="button"
            onClick={() => setShowAll(!showAll)}
            className="group inline-flex cursor-pointer items-center gap-2 rounded-xl border bg-orange-400/20 px-4 py-2 font-semibold text-orange-500 transition duration-300 hover:bg-orange-500/20 dark:hover:bg-orange-500/20"
          >
            {showAll ? "View Less" : "View More"}
          </button>
        </div>
      )}
    </>
  );
}
