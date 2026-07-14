import Tittle from "../ui/Tittle";

const experiences = [
  {
    period: "May 2025 — Jun 2025",
    company: "Rwanda Charity Eye Hospital",
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
    <section id="experience" className="px-6">
      <div className="px-6 lg:px-10">
        <Tittle title="EXPERIENCE"/>
      </div>

      <div className="">
        {experiences.map((experience) => (
          <article
            key={experience.company}
            className="group rounded-2xl border border-transparent px-6 py-5 lg:px-10 transition-all duration-300 hover:border-orange-400 hover:bg-slate-100/50 dark:hover:bg-slate-800"
          >
            <div className="grid gap-6 lg:grid-cols-12">
              <div className="lg:col-span-3">
                <p className="text-sm font-medium text-slate-500">
                  {experience.period}
                </p>
              </div>

              <div className="space-y-4 lg:col-span-9">
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 transition-colors group-hover:text-orange-500 dark:text-white">
                    {experience.role}
                  </h3>

                  <p className="mt-1 text-slate-600 dark:text-slate-400">
                    {experience.company}
                  </p>
                </div>

                <p className="leading-7 text-slate-600 dark:text-slate-400">
                  {experience.description}
                </p>

                <div className="flex flex-wrap gap-3">
                  {experience.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-orange-100 px-4 py-1 text-sm font-medium text-orange-700 dark:bg-orange-500/20 dark:text-orange-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
