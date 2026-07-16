"use client";

import { useState } from "react";
import { About } from "@prisma/client";
import AboutForm from "./AboutForm";
import AboutPreview from "./AboutPreview";

interface Props {
  initialData: About | null;
}

export type AboutFormData = {
  name: string;
  jobTitle: string;
  shortIntro: string;
  description: string;
  profileImage: string;
  resume: string;
  github: string;
  linkedin: string;
  email: string;
};

export default function AboutEditor({ initialData }: Props) {
  const [form, setForm] = useState<AboutFormData>({
    name: initialData?.name ?? "",
    jobTitle: initialData?.jobTitle ?? "",
    shortIntro: initialData?.shortIntro ?? "",
    description: initialData?.description ?? "",
    profileImage: initialData?.profileImage ?? "",
    resume: initialData?.resume ?? "",
    github: initialData?.github ?? "",
    linkedin: initialData?.linkedin ?? "",
    email: initialData?.email ?? "",
  });

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <AboutForm initialData={initialData} />
      <AboutPreview
        name={form.name}
        jobTitle={form.jobTitle}
        shortIntro={form.shortIntro}
        description={form.description}
        image={form.profileImage}
      />
    </div>
  );
}
