import { projects } from "@/data/projects";
import ProjectCard from "../ui/ProjectCard";



export default function Projects() {
  return (
    <section id="projects" className="space-y-10">
      <div>
        <h2 className="text-3xl font-bold">Projects</h2>

        <p className="mt-2 text-slate-600 dark:text-slate-400">
          Here are some projects I've built to improve my skills and solve
          real-world problems.
        </p>
      </div>

      <div className="grid gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}