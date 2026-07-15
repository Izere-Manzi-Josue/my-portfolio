import { MdOutlineFileDownload } from "react-icons/md";
import Tittle from "../ui/Tittle";

export default function About() {
  return (
    <section id="about" className="mt-8 px-6 py-12 lg:px-11">
      <Tittle title="ABOUT ME" />
      <p className="leading-7 text-slate-600 dark:text-slate-400 mb-4">
        I’m a Junior Software Developer passionate about building responsive,
        accessible, and user-friendly web applications. I enjoy working with
        React, Next.js, TypeScript, and Tailwind CSS to create clean and
        maintainable solutions. I'm committed to continuous learning, embracing
        new challenges, and growing as a developer while contributing to
        impactful projects.
      </p>
      <p className="leading-7 text-slate-600 dark:text-slate-400">
        I have experience building responsive web applications using React,
        Next.js, TypeScript, JavaScript, and Tailwind CSS. I use Git and GitHub
        for version control and enjoy creating reusable, maintainable components
        that provide a smooth user experience. I'm continuously expanding my
        knowledge of frontend and backend development, learning best practices,
        and exploring new technologies to build scalable and reliable software.
      </p>

      {/* cv button */}
      <a
        href="/cv/IZERE_MANZI_Josue_Resume.pdf"
        download
        className="group mt-6 inline-flex items-center gap-2 rounded-xl border py-2 px-4 hover:border-orange-300 "
      >
        <span className="text-slate-600 dark:text-slate-400">Download CV</span>

        <MdOutlineFileDownload
          size={20}
          className="transition-transform duration-300 group-hover:translate-y-1 text-slate-600 dark:text-slate-400"
        />
      </a>
    </section>
  );
}
