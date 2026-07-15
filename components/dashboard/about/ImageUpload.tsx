"use client";

import Image from "next/image";

interface ImageUploadProps {
  image: string;
  onChange: (image: string) => void;
}

export default function ImageUpload({ image, onChange }: ImageUploadProps) {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;

    // Temporary local preview
    const previewUrl = URL.createObjectURL(file);

    onChange(previewUrl);
  };

  return (
    <div className="rounded-xl border border-dashed p-8">
      <label className="mb-4 block font-medium">Profile Image</label>

      {image && (
        <div className="mb-6 flex justify-center">
          <Image
            src={image}
            alt="Profile Preview"
            width={160}
            height={160}
            className="rounded-full object-cover"
          />
        </div>
      )}

      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="w-full"
      />
    </div>
  );
}
