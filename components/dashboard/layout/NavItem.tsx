"use client";

import Link from "next/link";
import { LucideIcon } from "lucide-react";
import { usePathname } from "next/navigation";

interface NavItemProps {
  title: string;
  href: string;
  icon: LucideIcon;
  onClick?: () => void;
}

export default function NavItem({
  title,
  href,
  icon: Icon,
  onClick,
}: NavItemProps) {
  const pathname = usePathname();

  const active = pathname === href;

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`flex items-center gap-3 rounded-xl px-4 py-3 transition-all duration-300 ${
        active
          ? "bg-orange-500 text-white shadow-md"
          : "text-slate-600 hover:bg-orange-50 hover:text-orange-500 dark:text-slate-300 dark:hover:bg-orange-500/20"
      }`}
    >
      <Icon size={20} />

      <span className="font-medium">{title}</span>
    </Link>
  );
}
