import Link from "next/link";
import Image from "next/image";
import { languageImages } from "@/data/languageImages";

export default function ProjectCard({ project }) {
  return (
    <Link href={project.href}>
      {/* Thumbnail */}
      <div className="group relative w-full h-full bg-white shadow-2xl rounded-2xl overflow-hidden">
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
        <div className="absolute top-4 right-4 overflow-hidden">
          <span className="block text-md text-white/60 font-mono transform translate-x-20 group-hover:translate-x-0 transition-transform duration-500">
            {project.EndDate}
          </span>
        </div>

        {/* Text container */}
        <div
          className="absolute bottom-4 left-3 right-3 text-(--off-white) flex flex-col items-start 
                  transform translate-y-28 group-hover:translate-y-0 transition-all duration-500"
        >
          {/* Icon */}
          <Image
            src={project.icon}
            alt={`${project.title} icon`}
            width={64}
            height={64}
            className="mb-1 rounded"
          />

          {/* Title */}
          <div className="text-lg font-semibold">{project.title}</div>

          {/* Sub-content*/}
          <div className="pt-3 space-y-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
            {/* Languages */}
            <div className="flex flex-wrap gap-2">
              {project.languages.map((language) => {
                const icon = languageImages[language];
                if (!icon) return null;
                return (
                  <div
                    key={language}
                    className="bg-(--off-white)/50 p-1.5 rounded-md"
                  >
                    <Image
                      src={icon.src}
                      alt={icon.alt}
                      width={18}
                      height={18}
                    />
                  </div>
                );
              })}
            </div>

            {/* Description */}
            <p className="text-sm text-gray-300 leading-relaxed line-clamp-3">
              {project.description}
            </p>

            {/* Action */}
            <div className="">
              <span className="text-xs font-bold text-(--subtle-blue2) uppercase tracking-widest">
                View Project →
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
