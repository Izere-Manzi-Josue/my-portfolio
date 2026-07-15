"use client";

import { Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { deleteExperience } from "@/app/dashboard/experience/actions";

export default function DeleteExperienceButton({ id }: { id: number }) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const handleDelete = () => {
    if (!confirm("Delete this experience?")) {
      return;
    }

    startTransition(async () => {
      await deleteExperience(id);

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
