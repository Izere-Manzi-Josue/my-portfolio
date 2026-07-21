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
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold sm:text-3xl">Contact Messages</h1>

        <p className="mt-1 text-sm text-slate-500 sm:text-base">
          Messages sent from your portfolio.
        </p>
      </div>

      {/* Table Container */}
      <div className="w-full overflow-hidden rounded-xl border border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900">
        {/* Horizontal Scroll on Small Screens */}
        <div className="w-full overflow-x-auto">
          <table className="w-full min-w-[750px]">
            <thead className="bg-slate-100 dark:bg-slate-800">
              <tr>
                <th className="whitespace-nowrap px-4 py-4 text-left sm:px-5">
                  Name
                </th>

                <th className="whitespace-nowrap px-4 py-4 text-left sm:px-5">
                  Email
                </th>

                <th className="whitespace-nowrap px-4 py-4 text-left sm:px-5">
                  Subject
                </th>

                <th className="whitespace-nowrap px-4 py-4 text-left sm:px-5">
                  Status
                </th>

                <th className="whitespace-nowrap px-4 py-4 text-left sm:px-5">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {messages.map((message) => (
                <tr
                  key={message.id}
                  className="border-t border-slate-200 dark:border-slate-700"
                >
                  <td className="whitespace-nowrap px-4 py-4 sm:px-5">
                    {message.name}
                  </td>

                  <td className="whitespace-nowrap px-4 py-4 sm:px-5">
                    {message.email}
                  </td>

                  <td className="max-w-[250px] truncate px-4 py-4 sm:px-5">
                    {message.subject}
                  </td>

                  <td className="whitespace-nowrap px-4 py-4 sm:px-5">
                    {message.isRead ? (
                      <span className="rounded-full bg-green-100 px-3 py-1 text-sm text-green-600 dark:bg-green-500/20 dark:text-green-300">
                        Read
                      </span>
                    ) : (
                      <span className="rounded-full bg-orange-100 px-3 py-1 text-sm text-orange-600 dark:bg-orange-500/20 dark:text-orange-300">
                        New
                      </span>
                    )}
                  </td>

                  <td className="whitespace-nowrap px-4 py-4 sm:px-5">
                    <Link
                      href={`/dashboard/contact/${message.id}`}
                      className="font-medium text-orange-500 transition hover:text-orange-600"
                    >
                      View
                    </Link>
                  </td>
                </tr>
              ))}

              {messages.length === 0 && (
                <tr>
                  <td
                    colSpan={5}
                    className="py-12 text-center text-sm text-slate-500 sm:text-base"
                  >
                    No messages yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
