"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

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
    data,
  });

  revalidatePath("/dashboard/experience");
  revalidatePath("/");
}

export async function updateExperience(id: number, data: ExperienceData) {
  await prisma.experience.update({
    where: { id },
    data,
  });

  revalidatePath("/dashboard/experience");
  revalidatePath("/");
}

export async function deleteExperience(id: number) {
  await prisma.experience.delete({
    where: { id },
  });

  revalidatePath("/dashboard/experience");
  revalidatePath("/");
}
