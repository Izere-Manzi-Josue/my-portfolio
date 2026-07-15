import ThemeToggle from "../../ui/ThemeToggle";
import Navigation from "./Navigation";
import SocialLinks from "./SocialLinks";

export default function Sidebar() {
  return (
    <aside className="w-full p-5 lg:p-10 lg:sticky lg:top-0 lg:h-screen lg:w-[40%]">
      <div className="flex h-full flex-col justify-between">
        {/* Top */}
        <div>
          <div className="flex justify-end">
            <ThemeToggle />
          </div>
          <h3 className="leading-7 text-slate-600 dark:text-slate-400">
            Hi👋 , I am
          </h3>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900/90 dark:text-white/90">
            Izere <span className="text-orange-500"> Manzi </span>Josue
          </h1>

          <h2 className="mt-3 text-xl font-semibold text-slate-700 dark:text-slate-200">
            <span className="text-orange-500"> Software</span> Developer
          </h2>

          <p className="mt-3 max-w-sm leading-7 text-slate-600 dark:text-slate-400">
            I build accessible, responsive and scalable web applications using
            modern technologies.
          </p>

          <Navigation />
        </div>

        {/* Bottom */}
        <SocialLinks />
      </div>
    </aside>
  );
}
