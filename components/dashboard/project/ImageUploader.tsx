"use client";

import Image from "next/image";
import { ImagePlus } from "lucide-react";

interface ImageUploaderProps {
  image: string;
  onChange: (image: string) => void;
}

export default function ImageUploader({ image, onChange }: ImageUploaderProps) {
 const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
   const file = e.target.files?.[0];

   if (!file) return;

   const formData = new FormData();
   formData.append("file", file);

   try {
     const res = await fetch("/api/upload/project", {
       method: "POST",
       body: formData,
     });

     const data = await res.json();

     if (data.success) {
       onChange(data.imageUrl);
     } else {
       console.log(data);
       alert(data.error || "Image upload failed");
     }
   } catch (error) {
     console.error(error);
   }
 };

  return (
    <label className="flex h-60 cursor-pointer items-center justify-center overflow-hidden rounded-xl border-2 border-dashed border-slate-300 transition hover:border-orange-500 dark:border-slate-700">
      {image ? (
        <div className="relative h-full w-full">
          <Image src={image} alt="Project" fill className="object-cover" />
        </div>
      ) : (
        <div className="flex flex-col items-center">
          <ImagePlus size={45} className="text-slate-400" />

          <p className="mt-4 font-medium">Upload Project Image</p>

          <span className="mt-1 text-sm text-slate-500">PNG, JPG or WEBP</span>
        </div>
      )}

      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="hidden"
      />
    </label>
  );
}
