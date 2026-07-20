import { prisma } from "@/lib/prisma";
import type { Project } from "@/types/project";
import ProjectCard from "../../ui/ProjectCard";
import Tittle from "../../ui/Tittle";

export default async function Projects() {
  const projects: Project[] = await prisma.project.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <section id="projects" className="space-y-2">
      <div className="px-5 lg:px-11">
        <Tittle title="PROJECT" />
      </div>

      <div className="grid gap-8 px-5 py-5 lg:px-5">
        {projects.length === 0 ? (
          <p className="text-slate-500">No projects added yet.</p>
        ) : (
          projects.map((project: Project) => (
            <ProjectCard key={project.id} project={project} />
          ))
        )}
      </div>
    </section>
  );
}
