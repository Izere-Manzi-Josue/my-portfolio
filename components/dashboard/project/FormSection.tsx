import { ReactNode } from "react";

interface FormSectionProps {
  title: string;
  description?: string;
  children: ReactNode;
}

export default function FormSection({
  title,
  description,
  children,
}: FormSectionProps) {
  return (
    <div className="grid gap-8 border-b border-slate-200 py-8 lg:grid-cols-12 dark:border-slate-800">
      <div className="lg:col-span-3">
        <h2 className="text-lg font-semibold">{title}</h2>

        {description && (
          <p className="mt-2 text-sm text-slate-500">{description}</p>
        )}
      </div>

      <div className="space-y-6 lg:col-span-9">{children}</div>
    </div>
  );
}
