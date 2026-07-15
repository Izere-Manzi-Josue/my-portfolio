import { MdOutlineFileDownload } from "react-icons/md";
import Tittle from "../../ui/Tittle";
import { prisma } from "@/lib/prisma";

export default async function About() {
  const about = await prisma.about.findFirst();

  if (!about) {
    return (
      <section className="mt-8 px-6 py-12">
        <Tittle title="ABOUT ME" />
        <p>No information found.</p>
      </section>
    );
  }
  return (
    <section id="about" className="mt-8 px-6 py-12 lg:px-11">
      <Tittle title="ABOUT ME" />
      <p className="leading-7 text-slate-600 dark:text-slate-400 mb-4">
        {about.shortIntro}
      </p>
      <p className="leading-7 text-slate-600 dark:text-slate-400">
        {about.description}
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
