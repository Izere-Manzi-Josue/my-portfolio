"use client";

interface DeleteModalProps {
  open: boolean;
  title: string;
  onClose: () => void;
  onConfirm: () => void;
}

export default function DeleteModal({
  open,
  title,
  onClose,
  onConfirm,
}: DeleteModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl dark:bg-slate-900">
        <h2 className="text-xl font-semibold">Delete Project</h2>

        <p className="mt-3 text-slate-500">
          Are you sure you want to delete{" "}
          <span className="font-semibold">{title}</span>?
        </p>

        <div className="mt-8 flex justify-end gap-3">
          <button onClick={onClose} className="rounded-lg border px-5 py-2">
            Cancel
          </button>

          <button
            onClick={onConfirm}
            className="rounded-lg bg-red-500 px-5 py-2 text-white hover:bg-red-600"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
