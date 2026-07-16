import { prisma } from "@/lib/prisma";
import { PiArrowUpRightBold } from "react-icons/pi";
import Tittle from "../../ui/Tittle";
import Link from "next/link";

export default async function Experience() {
  const experiences = await prisma.experience.findMany({
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
        <Link href="#" target="_blank">
          {experiences.map((experience) => (
            <article
              key={experience.id}
              className="group rounded-xl border border-transparent px-6 py-5 transition-all duration-300 hover:bg-slate-100/50 dark:hover:bg-slate-800"
            >
              <div className="grid gap-6 lg:grid-cols-12">
                <div className="lg:col-span-3">
                  <p className="text-sm font-medium text-slate-500">
                    {experience.startDate} — {experience.endDate}
                  </p>
                </div>

                <div className="space-y-2 lg:col-span-9">
                  <div>
                    <h3 className="flex items-center gap-3 text-xl font-semibold text-slate-900 transition-colors group-hover:text-orange-500 dark:text-white">
                      {experience.role}

                      <PiArrowUpRightBold className="duration-300 group-hover:-translate-y-1" />
                    </h3>

                    <p className="text-slate-600 dark:text-slate-400">
                      {experience.company}
                    </p>
                  </div>

                  <p className="text-sm leading-5 text-slate-600 dark:text-slate-400">
                    {experience.description}
                  </p>

                  <div className="flex flex-wrap gap-1">
                    {experience.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-orange-100 px-3 py-1 text-sm font-medium text-orange-700 dark:bg-orange-500/20 dark:text-orange-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </Link>
      )}
    </section>
  );
}
