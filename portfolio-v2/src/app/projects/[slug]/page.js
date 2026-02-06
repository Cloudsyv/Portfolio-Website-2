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
        {/* Icon */}
        <Image
          src={project.icon}
          alt={`${project.title} icon`}
          width={64}
          height={64}
          className="mb-1 rounded"
        />

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
          <LanguageList project={project} size={24} />
        </div>

        {/* Main Image */}
        <div className="relative w-full h-100 rounded-3xl overflow-hidden mb-8">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-300">{project.description}</p>
        </div>
      </Card>
    </main>
  );
}
