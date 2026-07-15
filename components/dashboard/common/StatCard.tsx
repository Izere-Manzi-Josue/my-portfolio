interface StatCardProps {
  title: string;
  value: string;
}

export default function StatCard({ title, value }: StatCardProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
      <p className="text-sm text-slate-500">{title}</p>

      <h2 className="mt-3 text-4xl font-bold">{value}</h2>
    </div>
  );
}
