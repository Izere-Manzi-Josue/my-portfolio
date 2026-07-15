"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

type ProjectData = {
  title: string;
  slug: string;
  description: string;
  image: string;
  github: string | null;
  liveUrl: string | null;
  technologies: string[];
  featured: boolean;
};

export async function createProject(data: ProjectData) {
  await prisma.project.create({
    data,
  });

  revalidatePath("/dashboard/projects");
  redirect("/dashboard/projects");
}

export async function updateProject(id: number, data: ProjectData) {
  await prisma.project.update({
    where: {
      id,
    },
    data,
  });

  revalidatePath("/dashboard/projects");
  redirect("/dashboard/projects");
}

export async function deleteProject(id: number) {
  await prisma.project.delete({
    where: {
      id,
    },
  });

  revalidatePath("/dashboard/projects");
}
