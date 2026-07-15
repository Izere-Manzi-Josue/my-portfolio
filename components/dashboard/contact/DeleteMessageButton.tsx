"use client";

import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { Trash2 } from "lucide-react";
import { deleteMessage } from "@/app/dashboard/contact/actions";

export default function DeleteMessageButton({ id }: { id: number }) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const handleDelete = () => {
    if (!confirm("Delete this message?")) return;

    startTransition(async () => {
      await deleteMessage(id);

      router.push("/dashboard/contact");
      router.refresh();
    });
  };

  return (
    <button
      onClick={handleDelete}
      disabled={isPending}
      className="flex items-center gap-2 rounded-lg bg-red-600 px-4 py-2 text-white hover:bg-red-700 disabled:opacity-50"
    >
      <Trash2 size={16} />
      {isPending ? "Deleting..." : "Delete"}
    </button>
  );
}
