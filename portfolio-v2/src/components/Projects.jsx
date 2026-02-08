"use client";

import { useState } from "react";
import Card from "@/components/Card";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projectData";

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const initDisplay = 2;

  return (
    <Card id="projects">
      <h2 className="mb-6 text-sm md:text-base font-bold uppercase tracking-[0.3em] text-zinc-500 border-b border-white/5 pb-2 w-fit">
        Projects
      </h2>

      <div className="grid grid-cols-1 transition-all duration-500 ease-in-out">
        {projects.map((project, index) => {
          const isHidden = !showAll && index >= initDisplay;
          const transitionElements = isHidden
            ? "max-h-0 min-h-0 mt-0 opacity-0 pointer-events-none"
            : "min-h-120 mt-6 opacity-100";
          return (
            <div
              key={project.title}
              className={`relative w-full ${transitionElements} transition-all duration-1000 ease-in-out`}
            >
              <ProjectCard project={project} />
            </div>
          );
        })}
      </div>

      {/* View Toggle*/}
      {projects.length > initDisplay && (
        <div className="mt-12 flex justify-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="group relative px-8 py-3 bg-white/5 border border-white/10 rounded-xl text-xs font-mono uppercase tracking-[0.2em] text-zinc-400 hover:text-white hover:bg-white/10 transition-all overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              {showAll ? "↑ Minimize" : "↓ Expand"}
            </span>
            <div className="absolute inset-0 bg-(--subtle-blue) opacity-0 group-hover:opacity-10 transition-opacity blur-xl" />
          </button>
        </div>
      )}
    </Card>
  );
}
