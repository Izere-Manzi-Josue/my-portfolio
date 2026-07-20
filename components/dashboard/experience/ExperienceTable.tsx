import type { Experience } from "@/types/experience";
import ExperienceRow from "./ExperienceRow";

interface ExperienceTableProps {
  experiences: Experience[];
}

export default function ExperienceTable({ experiences }: ExperienceTableProps) {
  if (experiences.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-slate-300 p-12 text-center dark:border-slate-700">
        <h2 className="text-2xl font-semibold">No experiences yet</h2>

        <p className="mt-2 text-slate-500">
          Click <strong>Add Experience</strong> to create your first work
          experience.
        </p>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
      <table className="w-full">
        <thead className="bg-slate-100 dark:bg-slate-800">
          <tr>
            <th className="px-6 py-4 text-left">Company</th>
            <th className="px-6 py-4 text-left">Role</th>
            <th className="px-6 py-4 text-left">Period</th>
            <th className="px-6 py-4 text-left">Actions</th>
          </tr>
        </thead>

        <tbody>
          {experiences.map((experience) => (
            <ExperienceRow key={experience.id} experience={experience} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
