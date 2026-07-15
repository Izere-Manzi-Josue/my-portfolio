import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import DeleteMessageButton from "@/components/dashboard/contact/DeleteMessageButton";
import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";

export default async function MessageDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const message = await prisma.message.findUnique({
    where: {
      id: Number(id),
    },
  });

  if (!message) {
    notFound();
  }

  await prisma.message.update({
    where: {
      id: message.id,
    },
    data: {
      isRead: true,
    },
  });

  return (
    <div className="max-w-4xl space-y-6">
      {/* Back Button */}
      <Link
        href="/dashboard/contact"
        className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium transition hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800"
      >
        <ArrowLeft size={18} />
        Back
      </Link>

      <h1 className="text-3xl font-bold">{message.subject}</h1>

      <div className="rounded-xl border p-6">
        <p>
          <strong>Name:</strong> {message.name}
        </p>

        <p>
          <strong>Email:</strong> {message.email}
        </p>

        <div className="mt-6 whitespace-pre-wrap">{message.message}</div>
      </div>

      <div className="flex justify-end">
        <DeleteMessageButton id={message.id} />
      </div>
    </div>
  );
}
