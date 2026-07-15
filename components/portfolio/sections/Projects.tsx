import { projects } from "@/data/projects";
import ProjectCard from "../../ui/ProjectCard";
import Tittle from "../../ui/Tittle";

export default function Projects() {
  return (
    <section id="projects" className="space-y-2">
      <div className="px-5 lg:px-11">
        <Tittle title="PROJECT" />
      </div>

      <div className="grid gap-8 px-5 py-5 lg:px-5">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
