interface ProjectStatusProps {
  status: "Published" | "Draft";
}

export default function ProjectStatus({ status }: ProjectStatusProps) {
  return (
    <span
      className={`rounded-full px-3 py-1 text-xs font-medium ${
        status === "Published"
          ? "bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-300"
          : "bg-yellow-100 text-yellow-700 dark:bg-yellow-500/20 dark:text-yellow-300"
      }`}
    >
      {status}
    </span>
  );
}
