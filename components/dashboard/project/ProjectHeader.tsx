import Link from "next/link";
import { Plus } from "lucide-react";

export default function ProjectHeader() {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Projects</h1>

        <p className="mt-1 text-slate-500 dark:text-slate-400">
          Manage your portfolio projects.
        </p>
      </div>

      <Link
        href="/dashboard/project/add"
        className="inline-flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-5 py-3 font-medium text-white transition hover:bg-orange-600"
      >
        <Plus size={18} />
        Add Project
      </Link>
    </div>
  );
}
