import { prisma } from "@/lib/prisma";
import type { Experience } from "@/types/experience";
import Tittle from "../../ui/Tittle";
import ExperienceList from "./ExperienceList";

export default async function ExperienceSection() {
  const experiences: Experience[] = await prisma.experience.findMany({
    orderBy: {
      startDate: "desc",
    },
  });

  return (
    <section id="experience" className="lg:px-6">
      <div className="px-5 lg:px-5">
        <Tittle title="EXPERIENCE" />
      </div>

      {experiences.length === 0 ? (
        <div className="px-5 py-10 text-slate-500">
          No experience added yet.
        </div>
      ) : (
        <ExperienceList experiences={experiences} />
      )}
    </section>
  );
}
