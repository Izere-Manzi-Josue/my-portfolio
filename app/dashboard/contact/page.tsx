
import Link from "next/link";
import { prisma } from "@/lib/prisma";

export default async function ContactPage() {
  const messages = await prisma.message.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Contact Messages</h1>
        <p className="text-slate-500">Messages sent from your portfolio.</p>
      </div>

      <div className="overflow-hidden rounded-xl border border-slate-200 dark:border-slate-700">
        <table className="w-full">
          <thead className="bg-slate-100 dark:bg-slate-800">
            <tr>
              <th className="px-5 py-4 text-left">Name</th>
              <th className="px-5 py-4 text-left">Email</th>
              <th className="px-5 py-4 text-left">Subject</th>
              <th className="px-5 py-4 text-left">Status</th>
              <th className="px-5 py-4 text-left"></th>
            </tr>
          </thead>

          <tbody>
            {messages.map((message) => (
              <tr
                key={message.id}
                className="border-t border-slate-200 dark:border-slate-700"
              >
                <td className="px-5 py-4">{message.name}</td>
                <td className="px-5 py-4">{message.email}</td>
                <td className="px-5 py-4">{message.subject}</td>

                <td className="px-5 py-4">
                  {message.isRead ? (
                    <span className="rounded-full bg-green-100 px-3 py-1 text-sm text-green-600">
                      Read
                    </span>
                  ) : (
                    <span className="rounded-full bg-orange-100 px-3 py-1 text-sm text-orange-600">
                      New
                    </span>
                  )}
                </td>

                <td className="px-5 py-4">
                  <Link
                    href={`/dashboard/contact/${message.id}`}
                    className="font-medium text-orange-500"
                  >
                    View
                  </Link>
                </td>
              </tr>
            ))}

            {messages.length === 0 && (
              <tr>
                <td colSpan={5} className="py-12 text-center text-slate-500">
                  No messages yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
