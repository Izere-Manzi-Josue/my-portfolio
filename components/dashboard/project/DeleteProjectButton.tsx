"use client";

import { Trash2 } from "lucide-react";
import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { deleteProject } from "@/app/dashboard/project/actions";


interface Props {
  id: number;
}

export default function DeleteProjectButton({ id }: Props) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const handleDelete = () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this project?",
    );

    if (!confirmed) return;

    startTransition(async () => {
      await deleteProject(id);

      router.refresh();
    });
  };

  return (
    <button
      onClick={handleDelete}
      disabled={isPending}
      className="rounded-lg p-2 text-red-500 transition hover:bg-red-100 disabled:opacity-50 dark:hover:bg-red-500/20"
    >
      <Trash2 size={18} />
    </button>
  );
}
