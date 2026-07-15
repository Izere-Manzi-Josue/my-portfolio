"use client";

import { useState, useTransition } from "react";
import { About } from "@prisma/client";
import { useRouter } from "next/navigation";

import { saveAbout } from "@/app/dashboard/about/actions";
import ImageUpload from "./ImageUpload";
import ResumeUpload from "./ResumeUpload";

interface AboutFormProps {
  initialData: About | null;
}

export default function AboutForm({ initialData }: AboutFormProps) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const [form, setForm] = useState({
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

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    startTransition(async () => {
      await saveAbout(form);
      router.refresh();
    });
  }

  const inputClass =
    "mt-2 w-full rounded-xl border border-slate-300 bg-transparent px-4 py-3 outline-none transition focus:border-orange-500 dark:border-slate-700";

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-8 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900"
    >
      {/* Basic Information */}
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label className="font-medium">Name</label>

          <input
            required
            disabled={isPending}
            name="name"
            value={form.name}
            onChange={handleChange}
            className={inputClass}
          />
        </div>

        <div>
          <label className="font-medium">Job Title</label>

          <input
            required
            disabled={isPending}
            name="jobTitle"
            value={form.jobTitle}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
      </div>

      {/* Short Intro */}
      <div>
        <label className="font-medium">Short Introduction</label>

        <input
          required
          disabled={isPending}
          name="shortIntro"
          value={form.shortIntro}
          onChange={handleChange}
          className={inputClass}
        />
      </div>

      {/* Description */}
      <div>
        <label className="font-medium">About Description</label>

        <textarea
          rows={6}
          required
          disabled={isPending}
          name="description"
          value={form.description}
          onChange={handleChange}
          className={`${inputClass} resize-none`}
        />
      </div>

      {/* Social Links */}
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label className="font-medium">GitHub</label>

          <input
            disabled={isPending}
            name="github"
            value={form.github}
            onChange={handleChange}
            className={inputClass}
          />
        </div>

        <div>
          <label className="font-medium">LinkedIn</label>

          <input
            disabled={isPending}
            name="linkedin"
            value={form.linkedin}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
      </div>

      {/* Email */}
      <div>
        <label className="font-medium">Email</label>

        <input
          required
          type="email"
          disabled={isPending}
          name="email"
          value={form.email}
          onChange={handleChange}
          className={inputClass}
        />
      </div>

      {/* Profile Image */}
      <ImageUpload
        image={form.profileImage}
        onChange={(image) =>
          setForm((prev) => ({
            ...prev,
            profileImage: image,
          }))
        }
      />

      {/* Resume */}
      <ResumeUpload
        resume={form.resume}
        onChange={(resume) =>
          setForm((prev) => ({
            ...prev,
            resume,
          }))
        }
      />

      <button
        type="submit"
        disabled={isPending}
        className="rounded-xl bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {isPending ? "Saving..." : "Save Changes"}
      </button>
    </form>
  );
}
