"use client";

import dynamic from "next/dynamic";
import { Bell, Menu, Search } from "lucide-react";

const ThemeToggle = dynamic(() => import("@/components/ui/ThemeToggle"), {
  ssr: false,
});

interface DashboardNavbarProps {
  user: {
    email: string;
  };
  onMenuClick: () => void;
}

export default function DashboardNavbar({
  user,
  onMenuClick,
}: DashboardNavbarProps) {
  const initial = user.email.charAt(0).toUpperCase();

  return (
    <header className="sticky top-0 z-30 flex h-20 items-center justify-between border-b border-slate-200 bg-white px-4 dark:border-slate-800 dark:bg-slate-900 sm:px-6 lg:px-8">
      {/* Left */}
      <div className="flex items-center gap-3">
        {/* Mobile Menu */}
        <button
          type="button"
          onClick={onMenuClick}
          className="rounded-lg p-2 hover:bg-slate-100 dark:hover:bg-slate-800 lg:hidden"
          aria-label="Open sidebar"
        >
          <Menu size={24} />
        </button>

        <div>
          <h2 className="text-lg font-bold text-slate-900 dark:text-white sm:text-2xl">
            Dashboard
          </h2>

          <p className="hidden text-sm text-slate-500 sm:block">
            Welcome back, {user.email}
          </p>
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center gap-2 sm:gap-4">
        {/* Search */}
        <div className="hidden items-center rounded-xl border border-slate-200 px-4 py-2 dark:border-slate-700 md:flex">
          <Search size={18} />

          <input
            placeholder="Search..."
            className="ml-2 w-48 bg-transparent outline-none"
          />
        </div>

        {/* Notification */}
        <button
          type="button"
          className="rounded-xl p-2 transition hover:bg-slate-100 dark:hover:bg-slate-800 sm:p-3"
          aria-label="Notifications"
        >
          <Bell size={20} />
        </button>

        {/* Theme */}
        <ThemeToggle />

        {/* User */}
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="hidden text-right md:block">
            <p className="text-sm font-medium text-slate-900 dark:text-white">
              Admin
            </p>

            <p className="text-xs text-slate-500">{user.email}</p>
          </div>

          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-500 text-sm font-semibold text-white sm:h-10 sm:w-10">
            {initial}
          </div>
        </div>
      </div>
    </header>
  );
}
