interface Props {
  children: React.ReactNode;
}

export default function AuthCard({ children }: Props) {
  return (
    <div className="w-full max-w-md rounded-2xl border bg-white p-8 shadow-xl dark:bg-slate-900">
      {children}
    </div>
  );
}
