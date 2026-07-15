"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

type ExperienceData = {
  company: string;
  role: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  technologies: string[];
};

export async function createExperience(data: ExperienceData) {
  await prisma.experience.create({
    data: {
      company: data.company,
      role: data.role,
      location: data.location,
      startDate: data.startDate,
      endDate: data.endDate,
      description: data.description,
      technologies: data.technologies,
    },
  });

  revalidatePath("/dashboard/experience");

  redirect("/dashboard/experience");
}

export async function updateExperience(id: number, data: ExperienceData) {
  await prisma.experience.update({
    where: {
      id,
    },
    data: {
      company: data.company,
      role: data.role,
      location: data.location,
      startDate: data.startDate,
      endDate: data.endDate,
      description: data.description,
      technologies: data.technologies,
    },
  });

  revalidatePath("/dashboard/experience");

  redirect("/dashboard/experience");
}

export async function deleteExperience(id: number) {
  await prisma.experience.delete({
    where: {
      id,
    },
  });

  revalidatePath("/dashboard/experience");
}
