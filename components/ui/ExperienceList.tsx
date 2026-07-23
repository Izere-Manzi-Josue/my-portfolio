"use client";

import { useState } from "react";
import type { Experience } from "@/types/experience";

interface ExperienceListProps {
  experiences: Experience[];
}

export default function ExperienceList({ experiences }: ExperienceListProps) {
  const [showAll, setShowAll] = useState(false);

  const visibleExperiences = showAll ? experiences : experiences.slice(0, 5);

  return (
    <>
      <div>
        {visibleExperiences.map((experience) => (
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
      </div>

      {experiences.length > 5 && (
        <div className="flex justify-center py-6">
          <button
            type="button"
            onClick={() => setShowAll(!showAll)}
            className="group inline-flex items-center gap-2 rounded-xl border py-2 px-4 hover:bg-orange-500/20 text-orange-500 bg-orange-400/20 transition cursor-pointer dark:hover:bg-orange-500/20 duration-300 font-semibold "
          >
            {showAll ? "View Less" : "View More"}
          </button>
        </div>
      )}
    </>
  );
}
