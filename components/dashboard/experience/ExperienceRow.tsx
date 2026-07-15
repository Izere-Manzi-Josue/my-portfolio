import Link from "next/link";
import { Pencil } from "lucide-react";
import { Experience } from "@prisma/client";
import DeleteExperienceButton from "./DeleteExperienceButton";


interface Props {
  experience: Experience;
}

export default function ExperienceRow({ experience }: Props) {
  return (
    <tr className="border-b last:border-none">
      <td className="px-6 py-4">{experience.company}</td>

      <td className="px-6 py-4">{experience.role}</td>

      <td className="px-6 py-4">
        {experience.startDate} - {experience.endDate}
      </td>

      <td className="px-6 py-4">
        <div className="flex gap-3">
          <Link
            href={`/dashboard/experience/edit/${experience.id}`}
            className="rounded-lg p-2 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            <Pencil size={18} />
          </Link>

          <DeleteExperienceButton id={experience.id} />
        </div>
      </td>
    </tr>
  );
}
