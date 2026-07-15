import Link from "next/link";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className=" px-6 pb-20 dark:border-slate-800">
      <div className="flex flex-col items-center justify-between gap-6 text-center md:flex-row">
        {/* Left */}
        <div>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            © {new Date().getFullYear()} Izere Manzi Josue. All rights reserved.
          </p>

          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
            Designed & Built with{" "}
            <Link
              href="https://nextjs.org/"
              target="_brack"
              className="text-black dark:text-white"
            >
              Next.js
            </Link>
            ,{" "}
            <Link
              href="https://www.typescriptlang.org/"
              target="_brack"
              className="text-black dark:text-white"
            >
              TypeScript
            </Link>{" "}
            and{" "}
            <Link
              href="https://tailwindcss.com/"
              target="_brack"
              className="text-black dark:text-white"
            >
              Tailwind CSS
            </Link>
            .
          </p>
        </div>

        {/* Right */}
        <a
          href="#top"
          className="flex items-center gap-2 text-sm font-semibold text-slate-900/90 dark:text-white/90 transition hover:text-orange-500 "
        >
          Back to Top
          <ArrowUp size={18} />
        </a>
      </div>
    </footer>
  );
}
