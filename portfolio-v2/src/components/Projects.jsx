"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Card from "@/components/Card";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projectData";
import { languageImages } from "@/data/languageImages";

export default function Projects() {
  const count = projects.length;

  return (
    <Card id="projects">
      <h2 className="text-2xl text-text-color font-semibold mb-4">
        Projects{" "}
        <span className="text-(--subtle-red)">[{projects.length}]</span>
      </h2>

      {/* Box */}
      <div className="relative w-full flex items-start flex-wrap gap-6">
        {projects.map((project, index) => {
          return (
            <div key={project.title} className="relative w-[360px] h-[250px]">
              <ProjectCard key={project.title} project={project} />
            </div>
          );
        })}
      </div>
    </Card>
  );
}
