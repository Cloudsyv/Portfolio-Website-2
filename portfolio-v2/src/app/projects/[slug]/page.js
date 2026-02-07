import { projects } from "@/data/projectData";
import { notFound } from "next/navigation";
import Image from "next/image";

import LanguageList from "@/components/LanguageList";
import Card from "@/components/Card";

export default async function ProjectPage({ params }) {
  const { slug } = await params;

  const project = projects.find(
    (p) => p.slug.toLowerCase() === slug.toLowerCase(),
  );

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      <Card>
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-10">
          <div className="relative w-24 h-24 shrink-0">
            <Image
              src={project.icon}
              alt={`${project.title} icon`}
              fill
              className="rounded-2xl object-cover"
            />
          </div>

          <div className="space-y-3">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">
              {project.title}
            </h1>
            <LanguageList project={project} size={24} />
          </div>
        </div>
        {/* 2. MEDIA SECTION: The "Hero" within the card */}
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-10 border border-white/5 bg-zinc-900">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
        </div>
        {/* 3. TEXT SECTION: Centered for readability */}
        <div className="max-w-3xl mx-auto mb-6">
          <div className="prose prose-invert prose-lg">
            <p className="text-gray-300 leading-relaxed text-xl">
              {project.description}
            </p>

            {/* This is where your detailedContent blocks will render later */}
          </div>
        </div>
      </Card>
    </main>
  );
}
