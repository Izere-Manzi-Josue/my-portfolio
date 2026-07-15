import { prisma } from "@/lib/prisma";
import AboutHeader from "@/components/dashboard/about/AboutHeader";
import AboutEditor from "@/components/dashboard/about/AboutEditor";

export default async function AboutPage() {
  const about = await prisma.about.findFirst();

  return (
    <div className="space-y-8">
      <AboutHeader />

      <AboutEditor initialData={about} />
    </div>
  );
}
