"use client";

import { useState } from "react";
import { X } from "lucide-react";

export default function TechnologiesInput() {
  const [tech, setTech] = useState("");
  const [technologies, setTechnologies] = useState<string[]>([]);

  const addTechnology = () => {
    const value = tech.trim();

    if (!value) return;

    if (technologies.includes(value)) return;

    setTechnologies([...technologies, value]);
    setTech("");
  };

  const removeTechnology = (item: string) => {
    setTechnologies(technologies.filter((t) => t !== item));
  };

  return (
    <div>
      <div className="flex gap-2">
        <input
          value={tech}
          onChange={(e) => setTech(e.target.value)}
          placeholder="React"
          className="flex-1 rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-orange-500 dark:border-slate-700"
        />

        <button
          type="button"
          onClick={addTechnology}
          className="rounded-xl bg-orange-500 px-5 text-white"
        >
          Add
        </button>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {technologies.map((item) => (
          <div
            key={item}
            className="flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2 text-orange-700 dark:bg-orange-500/20 dark:text-orange-300"
          >
            {item}

            <button type="button" onClick={() => removeTechnology(item)}>
              <X size={14} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
