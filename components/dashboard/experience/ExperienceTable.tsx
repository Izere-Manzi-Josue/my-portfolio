import type { Experience } from "@/types/experience";
import ExperienceRow from "./ExperienceRow";

interface ExperienceTableProps {
  experiences: Experience[];
}

export default function ExperienceTable({ experiences }: ExperienceTableProps) {
  if (experiences.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-slate-300 p-6 text-center sm:p-12 dark:border-slate-700">
        <h2 className="text-xl font-semibold sm:text-2xl">
          No experiences yet
        </h2>

        <p className="mt-2 text-sm text-slate-500 sm:text-base">
          Click <strong>Add Experience</strong> to create your first work
          experience.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full overflow-hidden rounded-2xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
      {/* Responsive horizontal scrolling */}
      <div className="w-full overflow-x-auto">
        <table className="w-full min-w-[650px]">
          <thead className="bg-slate-100 dark:bg-slate-800">
            <tr>
              <th className="whitespace-nowrap px-4 py-4 text-left sm:px-6">
                Company
              </th>

              <th className="whitespace-nowrap px-4 py-4 text-left sm:px-6">
                Role
              </th>

              <th className="whitespace-nowrap px-4 py-4 text-left sm:px-6">
                Period
              </th>

              <th className="whitespace-nowrap px-4 py-4 text-left sm:px-6">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {experiences.map((experience) => (
              <ExperienceRow key={experience.id} experience={experience} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
