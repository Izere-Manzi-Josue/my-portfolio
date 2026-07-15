import {
  FolderKanban,
  BriefcaseBusiness,
  GraduationCap,
  Mail,
} from "lucide-react";

import StatsCard from "@/components/dashboard/overview/StatsCard";

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>

        <p className="mt-2 text-slate-500">Welcome back, Josue 👋</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <StatsCard
          title="Projects"
          value={12}
          icon={<FolderKanban size={26} />}
        />

        <StatsCard
          title="Experience"
          value={2}
          icon={<BriefcaseBusiness size={26} />}
        />

        <StatsCard
          title="Education"
          value={3}
          icon={<GraduationCap size={26} />}
        />

        <StatsCard title="Messages" value={8} icon={<Mail size={26} />} />
      </div>
    </div>
  );
}
