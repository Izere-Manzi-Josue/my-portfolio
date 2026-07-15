import { PiArrowUpRightBold } from "react-icons/pi";
import Tittle from "../ui/Tittle";
import Link from "next/link";

const experiences = [
  {
    period: "May 2025 — Jun 2025",
    company: "Rwanda Charity Eye Hospital.",
    role: "Networking Intern",
    description:
      "Assisted in configuring and maintaining LAN infrastructure, troubleshooting network connectivity issues, and supporting the IT team in deploying routers, switches, and wireless access points. Documented network layouts and collaborated on improving system reliability.",
    technologies: [
      "Networking",
      "LAN",
      "TCP/IP",
      "Routers",
      "Switches",
      "IT Support",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="lg:px-6">
      <div className="px-5 lg:px-5">
        <Tittle title="EXPERIENCE" />
      </div>

      <Link href="#" className="" target="_black">
        {experiences.map((experience) => (
          <article
            key={experience.company}
            className="group rounded-xl border border-transparent px-6 py-5 lg:px-5 transition-all duration-300 hover:bg-slate-100/50 dark:hover:bg-slate-800"
          >
            <div className="grid gap-6 lg:grid-cols-12">
              <div className="lg:col-span-3">
                <p className="text-sm font-medium text-slate-500">
                  {experience.period}
                </p>
              </div>

              <div className="space-y-2 lg:col-span-9">
                <div>
                  <h3 className="text-xl flex gap-3 items-center font-semibold text-slate-900 transition-colors group-hover:text-orange-500 dark:text-white">
                    {experience.role}
                    <PiArrowUpRightBold className="group-hover:-translate-y-1 duration-300" />
                  </h3>

                  <p className=" text-slate-600 dark:text-slate-400">
                    {experience.company}
                  </p>
                </div>

                <p className="leading-5 text-sm text-slate-600 dark:text-slate-400">
                  {experience.description}
                </p>

                <div className="flex flex-wrap gap-1">
                  {experience.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-orange-100 px-3 py-1 text-sm font-medium text-orange-700 dark:bg-orange-500/20 dark:text-orange-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </Link>
    </section>
  );
}
