import type { Project } from "@/types/project";
import ProjectRow from "./ProjectRow";

interface ProjectTableProps {
  projects: Project[];
}

export default function ProjectTable({ projects }: ProjectTableProps) {
  if (projects.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-slate-300 p-8 text-center sm:py-16 dark:border-slate-700">
        <h2 className="text-xl font-semibold">No projects yet</h2>

        <p className="mt-2 text-sm text-slate-500 sm:text-base">
          Click <strong>Add Project</strong> to create your first project.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full overflow-hidden rounded-2xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
      {/* Responsive horizontal scrolling */}
      <div className="w-full overflow-x-auto">
        <table className="w-full min-w-[800px]">
          <thead className="bg-slate-100 dark:bg-slate-800">
            <tr>
              <th className="whitespace-nowrap p-4 text-left">Image</th>

              <th className="whitespace-nowrap p-4 text-left">Title</th>

              <th className="whitespace-nowrap p-4 text-left">Technologies</th>

              <th className="whitespace-nowrap p-4 text-left">Featured</th>

              <th className="whitespace-nowrap p-4 text-left">Actions</th>
            </tr>
          </thead>

          <tbody>
            {projects.map((project) => (
              <ProjectRow key={project.id} project={project} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
