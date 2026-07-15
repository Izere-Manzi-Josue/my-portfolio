import ProjectTable from "@/components/dashboard/project/ProjectTable";
import { prisma } from "@/lib/prisma";

export default async function ProjectsPage() {
  const projects = await prisma.project.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div className="space-y-8">
      
      <ProjectTable projects={projects} />
    </div>
  );
}
