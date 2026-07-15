"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

type AboutData = {
  name: string;
  jobTitle: string;
  shortIntro: string;
  description: string;
  profileImage: string;
  resume: string;
  github: string;
  linkedin: string;
  email: string;
};

export async function saveAbout(data: AboutData) {
  const existing = await prisma.about.findFirst();

  if (existing) {
    await prisma.about.update({
      where: {
        id: existing.id,
      },
      data,
    });
  } else {
    await prisma.about.create({
      data,
    });
  }

  revalidatePath("/dashboard/about");
}
