
import About from "../sections/About";
import Contact from "../sections/Contact";
import Experience from "../sections/Experience";
import Footer from "../sections/Footer";
import Projects from "../sections/Projects";
import Sidebar from "../sidebar/Sidebar";
import ClientEffects from "./ClientEffects";

export default function PortfolioLayout() {
  return (
    <main className="relative min-h-screen bg-[#F8FAFC] text-slate-900 transition-colors duration-300 dark:bg-[#0f182c] dark:text-slate-100">
     <ClientEffects />
      <div className="relative mx-auto flex max-w-7xl flex-col lg:flex-row" id="top"> 
        <Sidebar />

        <div className="flex-1 space-y-20">
          <About />
          <Experience />
          <Projects />
          <Contact />
          <Footer />
        </div>
      </div>
    </main>
  );
}
