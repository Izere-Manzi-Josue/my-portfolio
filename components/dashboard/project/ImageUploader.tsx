"use client";

import { ImagePlus } from "lucide-react";

export default function ImageUploader() {
  return (
    <label className="flex h-60 cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-slate-300 transition hover:border-orange-500 dark:border-slate-700">
      <ImagePlus size={45} className="text-slate-400" />

      <p className="mt-4 font-medium">Upload Project Image</p>

      <span className="mt-1 text-sm text-slate-500">PNG, JPG or WEBP</span>

      <input type="file" className="hidden" />
    </label>
  );
}
