import Link from "next/link";
import Image from "next/image";
import LanguageList from "@/components/Util/LanguageList";
import Draft from "@/components/Util/Draft";

export default function ProjectCard({ project }) {
  return (
    <Link href={`/projects/${project.slug}`}>
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
            {project.endDate}
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
          <div className="flex items-center gap-3 mb-1">
            <h3 className="text-lg font-bold text-zinc-200">{project.title}</h3>

            <Draft post={project} />
          </div>

          {/* Sub-content*/}
          <div className="pt-3 space-y-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
            <LanguageList project={project} />

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
