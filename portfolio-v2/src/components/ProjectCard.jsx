import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projectData";
import { languageImages } from "@/data/languageImages";

export default function ProjectCard({ project }) {
  return (
    <Link href={project.href}>
      {/* Thumbnail */}
      <div className="group relative w-full h-full bg-white shadow-2xl rounded-sm overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          quality={95}
        />

        {/* Overlay background */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-500"></div>

        {/* Date */}
        <div className="text-xs text-(--light-gray) opacity-0 -translate-y-10 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 relative top-3 right-3">
          {project.StartDate} - {project.EndDate}
        </div>

        {/* Text container */}
        <div
          className="absolute bottom-4 left-3 right-3 text-(--off-white) flex flex-col items-start 
                  transform translate-y-16 group-hover:translate-y-0 transition-all duration-500"
        >
          {/* Icon */}
          <Image
            src={project.icon}
            alt={`${project.title} icon`}
            width={24}
            height={24}
            className="mb-1 rounded"
          />

          {/* Title */}
          <div className="text-sm font-semibold">{project.title}</div>

          {/* Languages */}
          <div className="flex items-start mb-1 mt-1 space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            {project.languages.map((language) => {
              const icon = languageImages[language];

              if (!icon) return null;

              return (
                <Image
                  key={language}
                  src={icon.src}
                  alt={icon.alt}
                  width={16}
                  height={16}
                  className="rounded bg-(--off-white) p-0.5"
                />
              );
            })}
          </div>

          {/* Description */}
          <div className="text-xs text-(--light-gray) opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            {project.description}
          </div>
        </div>
      </div>
    </Link>
  );
}
