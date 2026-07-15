"use client";

import ThemeToggle from "@/components/ui/ThemeToggle";
import { Bell, Search } from "lucide-react";

interface DashboardNavbarProps {
  user: {
    email: string;
  };
}

export default function DashboardNavbar({ user }: DashboardNavbarProps) {
  const initial = user.email.charAt(0).toUpperCase();

  return (
    <header className="sticky top-0 z-20 flex h-20 items-center justify-between border-b border-slate-200 bg-white px-8 dark:border-slate-800 dark:bg-slate-900">
      {/* Left */}
      <div>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
          Dashboard
        </h2>

        <p className="text-sm text-slate-500">Welcome back, {user.email}</p>
      </div>

      {/* Right */}
      <div className="flex items-center gap-4">
        {/* Search */}
        <div className="hidden items-center rounded-xl border border-slate-200 px-4 py-2 dark:border-slate-700 md:flex">
          <Search size={18} />

          <input
            placeholder="Search..."
            className="ml-2 w-48 bg-transparent outline-none"
          />
        </div>

        {/* Notification */}
        <button className="rounded-xl p-3 transition hover:bg-slate-100 dark:hover:bg-slate-800">
          <Bell size={20} />
        </button>

        {/* Theme */}
        <ThemeToggle />

        {/* User */}
        <div className="flex items-center gap-3">
          <div className="hidden text-right md:block">
            <p className="text-sm font-medium text-slate-900 dark:text-white">
              Admin
            </p>

            <p className="text-xs text-slate-500">{user.email}</p>
          </div>

          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 font-semibold text-white">
            {initial}
          </div>
        </div>
      </div>
    </header>
  );
}
