"use client";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { Experience } from "@prisma/client";
import FormSection from "../project/FormSection";
import SaveActions from "../project/SaveActions";
import {
  createExperience,
  updateExperience,
} from "@/app/dashboard/experience/actions";

interface ExperienceFormProps {
  mode: "create" | "edit";
  initialData?: Experience;
}

type ExperienceFormData = {
  company: string;
  role: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  technologies: string[];
};

export default function ExperienceForm({
  mode,
  initialData,
}: ExperienceFormProps) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [experience, setExperience] = useState<ExperienceFormData>(
    initialData
      ? {
          company: initialData.company,
          role: initialData.role,
          location: initialData.location,
          startDate: initialData.startDate,
          endDate: initialData.endDate,
          description: initialData.description,
          technologies: initialData.technologies,
        }
      : {
          company: "",
          role: "",
          location: "",
          startDate: "",
          endDate: "",
          description: "",
          technologies: [],
        },
  );

  const [technology, setTechnology] = useState("");

  const addTechnology = () => {
    if (technology.trim() && !experience.technologies.includes(technology)) {
      setExperience({
        ...experience,
        technologies: [...experience.technologies, technology],
      });

      setTechnology("");
    }
  };

  const removeTechnology = (tech: string) => {
    setExperience({
      ...experience,
      technologies: experience.technologies.filter((item) => item !== tech),
    });
  };

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  startTransition(async () => {
    if (mode === "create") {
      await createExperience(experience);
    } else if (initialData) {
      await updateExperience(initialData.id, experience);
    }

    router.push("/dashboard/experience");
    router.refresh();
  });
};

  return (
    <form onSubmit={handleSubmit} className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold">
          {mode === "create" ? "Add Experience" : "Edit Experience"}
        </h1>

        <p className="mt-2 text-slate-500">Manage your work experience.</p>
      </div>

      <FormSection
        title="Basic Information"
        description="Enter your work experience."
      >
        <div className="grid gap-5 md:grid-cols-2">
          <input
            disabled={isPending}
            placeholder="Company"
            value={experience.company}
            onChange={(e) =>
              setExperience({
                ...experience,
                company: e.target.value,
              })
            }
            className="rounded-xl border px-4 py-3"
          />

          <input
            disabled={isPending}
            placeholder="Role"
            value={experience.role}
            onChange={(e) =>
              setExperience({
                ...experience,
                role: e.target.value,
              })
            }
            className="rounded-xl border px-4 py-3"
          />

          <input
            disabled={isPending}
            placeholder="Location"
            value={experience.location}
            onChange={(e) =>
              setExperience({
                ...experience,
                location: e.target.value,
              })
            }
            className="rounded-xl border px-4 py-3"
          />

          <input
            disabled={isPending}
            placeholder="Start Date"
            value={experience.startDate}
            onChange={(e) =>
              setExperience({
                ...experience,
                startDate: e.target.value,
              })
            }
            className="rounded-xl border px-4 py-3"
          />

          <input
            disabled={isPending}
            placeholder="End Date"
            value={experience.endDate}
            onChange={(e) =>
              setExperience({
                ...experience,
                endDate: e.target.value,
              })
            }
            className="rounded-xl border px-4 py-3"
          />
        </div>

        <textarea
          disabled={isPending}
          rows={6}
          placeholder="Description"
          value={experience.description}
          onChange={(e) =>
            setExperience({
              ...experience,
              description: e.target.value,
            })
          }
          className="mt-5 w-full rounded-xl border px-4 py-3"
        />
      </FormSection>

      <FormSection
        title="Technologies"
        description="Technologies used in this role."
      >
        <div className="flex gap-3">
          <input
            value={technology}
            onChange={(e) => setTechnology(e.target.value)}
            placeholder="React"
            className="flex-1 rounded-xl border px-4 py-3"
          />
          <button
            type="button"
            disabled={isPending}
            onClick={addTechnology}
            className="rounded-xl bg-orange-500 px-5 text-white hover:bg-orange-600 disabled:opacity-50"
          >
            Add
          </button>
        </div>

        <div className="mt-5 flex flex-wrap gap-3">
          {experience.technologies.map((tech) => (
            <span
              key={tech}
              className="flex items-center rounded-full bg-orange-100 px-4 py-2 text-orange-700"
            >
              {tech}

              <button
                type="button"
                onClick={() => removeTechnology(tech)}
                className="ml-2 font-bold"
              >
                ×
              </button>
            </span>
          ))}
        </div>
      </FormSection>

      <SaveActions
        loading={isPending}
        buttonText={
          mode === "create" ? "Create Experience" : "Update Experience"
        }
      />
    </form>
  );
}
