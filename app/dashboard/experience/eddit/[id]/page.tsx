import { notFound } from "next/navigation";
import ExperienceForm from "@/components/dashboard/experience/ExperienceForm";
import { prisma } from "@/lib/prisma";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function EditExperiencePage({ params }: Props) {
  const { id } = await params;

  const experience = await prisma.experience.findUnique({
    where: {
      id: Number(id),
    },
  });

  if (!experience) {
    notFound();
  }

  return <ExperienceForm mode="edit" initialData={experience} />;
}
