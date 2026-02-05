"use client";

import { useState } from "react";
import Card from "@/components/Card";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projectData";

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const initDisplay = 2;

  const visibleProjects = showAll ? projects : projects.slice(0, initDisplay);

  return (
    <Card id="projects">
      <div className="flex justify-between items-end mb-6">
        <h2 className="text-2xl text-text-color font-semibold">Projects</h2>

        {!showAll && (
          <span className="text-sm opacity-50 font-mono mb-1">
            Showing {initDisplay} of {projects.length}
          </span>
        )}
      </div>

      <div className="grid grid-cols-1 gap-6 transition-all duration-500 ease-in-out">
        {visibleProjects.map((project) => (
          <div key={project.title} className="relative w-full min-h-120">
            <ProjectCard project={project} />
          </div>
        ))}
      </div>

      {/* View Toggle */}
      {projects.length > initDisplay && (
        <div className="mt-8 flex justify-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-2 border border-(--subtle-blue2)/30 rounded-2xl text-sm hover:bg-(--subtle-blue2)/10 transition-colors font-mono"
          >
            {showAll ? "↑ Show Less" : "↓ View All Projects"}
          </button>
        </div>
      )}
    </Card>
  );
}
