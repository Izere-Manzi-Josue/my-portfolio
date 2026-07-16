import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import ProjectForm from "@/components/dashboard/project/ProjectForm";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function EditProjectPage({ params }: Props) {
  const { id } = await params;

  const project = await prisma.project.findUnique({
    where: {
      id: Number(id),
    },
  });

  if (!project) {
    notFound();
  }

  return <ProjectForm mode="edit" initialData={project} />;
}
