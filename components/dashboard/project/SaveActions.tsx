interface SaveActionsProps {
  loading?: boolean;
  buttonText: string;
}

export default function SaveActions({ loading, buttonText }: SaveActionsProps) {
  return (
    <div className="flex justify-end gap-4">
      <button type="button" className="rounded-xl border px-5 py-3">
        Cancel
      </button>

      <button
        type="submit"
        className="rounded-xl bg-orange-500 px-5 py-3 text-white"
      >
        {loading ? "Saving..." : buttonText}
      </button>
    </div>
  );
}
