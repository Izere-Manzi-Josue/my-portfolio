import StatCard from "@/components/dashboard/common/StatCard";
import { prisma } from "@/lib/prisma";

export default async function DashboardPage() {
  const [projects, experiences, Messages] = await Promise.all([
    prisma.project.count(),
    prisma.experience.count(),
    prisma.contact.count(),
  ]);

  return (
    <div>
      <h1 className="mb-8 text-3xl font-bold">Dashboard Overview</h1>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <StatCard title="Projects" value={projects} />
        <StatCard title="Experience" value={experiences} />
        <StatCard title="Messages" value={Messages} />
      </div>
    </div>
  );
}
