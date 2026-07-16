"use client";

import { FileText } from "lucide-react";

interface ResumeUploadProps {
  resume: string;
  onChange: (resume: string) => void;
}

export default function ResumeUpload({ resume, onChange }: ResumeUploadProps) {
  async function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];

    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    const response = await fetch("/api/upload/resume", {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      alert("Upload failed");
      return;
    }

    const data = await response.json();

    onChange(data.url);
  }

  return (
    <div className="rounded-xl border border-dashed p-8">
      <label className="mb-4 block font-medium">Resume (PDF)</label>

      {resume && (
        <div className="mb-4 flex items-center gap-2 rounded-lg bg-slate-100 p-3 dark:bg-slate-800">
          <FileText className="text-orange-500" size={20} />

          <a
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
            className="truncate text-sm text-blue-600 hover:underline dark:text-blue-400"
          >
            View Selected Resume
          </a>
        </div>
      )}

      <input
        type="file"
        accept=".pdf"
        onChange={handleFileChange}
        className="w-full"
      />
    </div>
  );
}
