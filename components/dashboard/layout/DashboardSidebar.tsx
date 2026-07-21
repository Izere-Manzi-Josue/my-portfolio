"use client";

import Link from "next/link";
import {
  LayoutDashboard,
  User,
  BriefcaseBusiness,
  FolderKanban,
  Mail,
  Settings,
} from "lucide-react";
import NavItem from "./NavItem";
import LogoutButton from "../LogoutButton";

interface DashboardSidebarProps {
  onNavigate?: () => void;
}

const navItems = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "About",
    href: "/dashboard/about",
    icon: User,
  },
  {
    title: "Experience",
    href: "/dashboard/experience",
    icon: BriefcaseBusiness,
  },
  {
    title: "Projects",
    href: "/dashboard/project",
    icon: FolderKanban,
  },
  {
    title: "Contact",
    href: "/dashboard/contact",
    icon: Mail,
  },
  {
    title: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
];

export default function DashboardSidebar({
  onNavigate,
}: DashboardSidebarProps) {
  return (
    <aside className="flex h-screen w-72 flex-col border-r border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
      {/* Logo */}
      <div className="border-b border-slate-200 p-6 dark:border-slate-800">
        <Link href="/" onClick={onNavigate}>
          <h1 className="text-2xl font-bold text-orange-500">Portfolio CMS</h1>

          <p className="mt-1 text-sm text-slate-500">Manage your portfolio</p>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-2 overflow-y-auto p-4">
        {navItems.map((item) => (
          <NavItem
            key={item.href}
            title={item.title}
            href={item.href}
            icon={item.icon}
            onClick={onNavigate}
          />
        ))}

        {/* Logout */}
        <LogoutButton />
      </nav>
    </aside>
  );
}
