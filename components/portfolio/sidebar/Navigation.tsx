"use client";

import { useEffect, useState } from "react";

const links = [
  {
    label: "ABOUT",
    href: "#about",
  },
  {
    label: "EXPERIENCE",
    href: "#experience",
  },
  {
    label: "PROJECTS",
    href: "#projects",
  },
  {
    label: "CONTACT",
    href: "#contact",
  },
];

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = links.map((link) => document.querySelector(link.href));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      {
        // Triggers when a section is roughly in the middle of the viewport
        rootMargin: "-50% 0px -50% 0px",
        threshold: 0,
      },
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="mt-10 hidden lg:block">
      <ul className="space-y-6">
        {links.map((link) => {
          const isActive = activeSection === link.href;

          return (
            <li key={link.label}>
              <a href={link.href} className="group flex items-center gap-4">
                <span
                  className={`h-0.5 transition-all duration-300 ${
                    isActive
                      ? "w-16 bg-orange-500"
                      : "w-8 bg-slate-700 dark:bg-slate-500 group-hover:w-16 group-hover:bg-orange-500"
                  }`}
                />

                <span
                  className={`text-xs font-semibold tracking-[0.15em] transition ${
                    isActive
                      ? "text-orange-500"
                      : "text-slate-700 dark:text-slate-500 group-hover:text-orange-500"
                  }`}
                >
                  {link.label}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
