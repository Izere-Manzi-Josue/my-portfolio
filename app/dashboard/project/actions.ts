"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

type ProjectData = {
  title: string;
  description: string;
  image: string;
  github: string;
  liveUrl: string;
  technologies: string[];
  featured: boolean;
};

const generateSlug = (title: string) =>
  title
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "");

export async function createProject(data: ProjectData) {
  await prisma.project.create({
    data: {
      title: data.title,
      description: data.description,
      image: data.image,
      github: data.github,
      liveUrl: data.liveUrl,
      technologies: data.technologies,
      featured: data.featured,
      slug: generateSlug(data.title),
    },
  });

  revalidatePath("/dashboard/project");
  revalidatePath("/");

  redirect("/dashboard/project");
}

export async function updateProject(id: number, data: ProjectData) {
  await prisma.project.update({
    where: {
      id,
    },
    data: {
      title: data.title,
      description: data.description,
      image: data.image,
      github: data.github,
      liveUrl: data.liveUrl,
      technologies: data.technologies,
      featured: data.featured,
      slug: generateSlug(data.title),
    },
  });

  revalidatePath("/dashboard/project");
  revalidatePath("/");

  redirect("/dashboard/project");
}

export async function deleteProject(id: number) {
  await prisma.project.delete({
    where: {
      id,
    },
  });

  revalidatePath("/dashboard/project");
  revalidatePath("/");
}
