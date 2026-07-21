"use client";

import { useState } from "react";
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
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <main className="min-h-screen bg-slate-100 dark:bg-slate-950">
      {/* Mobile Overlay */}
      {sidebarOpen && (
        <button
          type="button"
          aria-label="Close sidebar"
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 z-50 h-screen w-72 transform transition-transform duration-300
          ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
          }`}
      >
        <DashboardSidebar onNavigate={() => setSidebarOpen(false)} />
      </aside>

      {/* Main Content */}
      <div className="min-h-screen lg:ml-72">
        <DashboardNavbar user={user} onMenuClick={() => setSidebarOpen(true)} />

        <section className="p-4 sm:p-6 lg:p-8">{children}</section>
      </div>
    </main>
  );
}
