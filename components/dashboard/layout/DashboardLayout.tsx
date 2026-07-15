"use client";

import DashboardNavbar from "./DashboardNavbar";
import DashboardSidebar from "./DashboardSidebar";

interface DashboardLayoutProps {
  children: React.ReactNode;
  user: {
    email: string;
  };
}

export default function DashboardLayout({
  children,
  user,
}: DashboardLayoutProps) {
  return (
    <main className="flex min-h-screen bg-slate-100 dark:bg-slate-950">
      <DashboardSidebar />

      <div className="flex flex-1 flex-col">
        <DashboardNavbar user={user} />

        <section className="flex-1 overflow-y-auto p-8">{children}</section>
      </div>
    </main>
  );
}
