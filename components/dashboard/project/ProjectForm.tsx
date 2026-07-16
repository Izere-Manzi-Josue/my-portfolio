"use client";

import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import FormSection from "./FormSection";
import ImageUploader from "./ImageUploader";
import TechnologiesInput from "./TechnologiesInput";
import SaveActions from "./SaveActions";
import { Project } from "@/types/project";
import { createProject, updateProject } from "@/app/dashboard/project/actions";

interface ProjectFormProps {
  mode: "create" | "edit";
  initialData?: Project;
}

export default function ProjectForm({ mode, initialData }: ProjectFormProps) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const [project, setProject] = useState<Project>(
    initialData ?? {
      title: "",
      description: "",
      image: "",
      github: "",
      liveUrl: "",
      technologies: [],
      featured: false,
    },
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    startTransition(async () => {
      try {
        if (mode === "create") {
          await createProject(project);
        } else {
          await updateProject(project.id!, project);
        }

        router.push("/dashboard/project");
        router.refresh();
      } catch (error) {
        console.error(error);
      }
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold">
          {mode === "create" ? "Add Project" : "Edit Project"}
        </h1>

        <p className="mt-2 text-slate-500">
          {mode === "create"
            ? "Create a new project."
            : "Update project information."}
        </p>
      </div>

      <FormSection
        title="Project Information"
        description="Basic details about your project."
      >
        <div>
          <label className="mb-2 block font-medium">Project Title</label>

          <input
            value={project.title}
            onChange={(e) =>
              setProject({
                ...project,
                title: e.target.value,
              })
            }
            className="w-full rounded-xl border px-4 py-3"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">Description</label>

          <textarea
            rows={5}
            value={project.description}
            onChange={(e) =>
              setProject({
                ...project,
                description: e.target.value,
              })
            }
            className="w-full rounded-xl border px-4 py-3"
          />
        </div>
      </FormSection>

      <FormSection title="Image" description="Upload project image.">
        <ImageUploader
          image={project.image}
          onChange={(image) =>
            setProject({
              ...project,
              image,
            })
          }
        />
      </FormSection>

      <FormSection title="Links" description="Project URLs.">
        <input
          placeholder="GitHub URL"
          value={project.github ?? ""}
          onChange={(e) =>
            setProject({
              ...project,
              github: e.target.value,
            })
          }
          className="mb-4 w-full rounded-xl border px-4 py-3"
        />

        <input
          placeholder="Live URL"
          value={project.liveUrl ?? ""}
          onChange={(e) =>
            setProject({
              ...project,
              liveUrl: e.target.value,
            })
          }
          className="w-full rounded-xl border px-4 py-3"
        />
      </FormSection>

      <FormSection
        title="Technologies"
        description="Technologies used in this project."
      >
        <TechnologiesInput
          technologies={project.technologies}
          onChange={(technologies) =>
            setProject({
              ...project,
              technologies,
            })
          }
        />
      </FormSection>

      <SaveActions
        loading={isPending}
        buttonText={mode === "create" ? "Create Project" : "Update Project"}
      />
    </form>
  );
}
