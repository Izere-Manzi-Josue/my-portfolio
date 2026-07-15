import { prisma } from "@/lib/prisma";

import ExperienceTable from "@/components/dashboard/experience/ExperienceTable";
import ExperienceHeader from "@/components/dashboard/experience/ExperienceHeader";

export default async function ExperiencePage() {
  const experiences = await prisma.experience.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div className="space-y-8">
      <ExperienceHeader />

      <ExperienceTable experiences={experiences} />
    </div>
  );
}
