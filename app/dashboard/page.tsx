import StatCard from "@/components/dashboard/common/StatCard";


export default function DashboardPage() {
  return (
    <div>
      <h1 className="mb-8 text-3xl font-bold">Dashboard Overview</h1>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <StatCard title="Projects" value="5" />

        <StatCard title="Experience" value="2" />

        <StatCard title="Skills" value="18" />

        <StatCard title="Messages" value="12" />
      </div>
    </div>
  );
}
