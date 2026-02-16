"use client";
import { useState } from "react";
import ProjectCard from "@/components/Projects/ProjectCard";

export default function ProjectsList({ posts }) {
  const [showAll, setShowAll] = useState(false);
  const initDisplay = 2;

  return (
    <>
      <div className="grid grid-cols-1 transition-all duration-500 ease-in-out">
        {posts.map((post, index) => {
          const isHidden = !showAll && index >= initDisplay;
          const transitionElements = isHidden
            ? "max-h-0 min-h-0 mt-0 opacity-0 pointer-events-none"
            : "min-h-120 mt-6 opacity-100";
          return (
            <div
              key={post.slug}
              className={`relative w-full ${transitionElements} transition-all duration-1000 ease-in-out`}
            >
              <ProjectCard project={post} />
            </div>
          );
        })}
      </div>

      {posts.length > initDisplay && (
        <div className="mt-12 flex justify-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="group relative px-8 py-3 bg-white/5 border border-white/10 rounded-xl text-xs font-mono uppercase tracking-[0.2em] text-zinc-400 hover:text-white hover:bg-white/10 transition-all overflow-hidden"
          >
            <span className="relative z-10">
              {showAll ? "↑ Minimize" : "↓ Expand"}
            </span>
          </button>
        </div>
      )}
    </>
  );
}
