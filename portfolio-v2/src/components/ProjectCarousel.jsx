"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Card from "@/components/Card";
import { projects } from "@/data/projectData";
import { languageImages } from "@/data/languageImages";

const rotationInterval = 3000;

export default function ProjectCarousel() {
  const count = projects.length;
  const radius = 180 + count * 25;
  const rotationAngle = 360 / count;
  const [rotation, setRotation] = useState(0);

  const [autoRotate, setAutoRotate] = useState(true);
  const lastTimeRef = useRef(performance.now());

  useEffect(() => {
    let rafId;

    const tick = (time) => {
      if (autoRotate && time - lastTimeRef.current >= rotationInterval) {
        setRotation((r) => r + 360 / count);
        lastTimeRef.current = time;
      }

      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(rafId);
  }, [count, autoRotate]);

  return (
    <Card id="projects">
      <h2 className="text-2xl text-(--off-black) font-semibold mb-12">
        Projects{" "}
        <span className="text-(--subtle-red)">[{projects.length}]</span>
      </h2>

      {/* Box */}
      <div
        className="relative w-full h-[320px] overflow-hidden flex items-start justify-center"
        style={{ perspective: "2000px" }}
      >
        {/* Interaction Frame */}
        <div
          className="relative w-[360px] h-[250px]"
          style={{ perspective: "2000px" }}
          onMouseEnter={() => setAutoRotate(false)}
          onMouseLeave={() => setAutoRotate(true)}
        >
          {/* Rotating ring */}
          <div
            className="relative w-full h-full"
            style={{
              transformStyle: "preserve-3d",
              transform: `translateZ(-${radius}px) rotateY(${rotation}deg)`,
              transition: "transform 1s ease-in-out",
            }}
          >
            {projects.map((project, index) => {
              const angle = rotationAngle * index;

              return (
                <div
                  key={project.title}
                  className="absolute top-1/2 left-1/2 w-[360px] h-[250px] -translate-x-1/2 -translate-y-1/2"
                  style={{
                    transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                  }}
                >
                  <Link href={project.href}>
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
                      <div className="text-xs text-(--light-gray) opacity-0 -translate-y-10 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 fixed top-3 right-3">
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
                        <div className="text-sm font-semibold">
                          {project.title}
                        </div>

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
                </div>
              );
            })}
          </div>
        </div>

        {/* Controls
        <button
          onClick={() => setRotation(rotation + rotationAngle)}
          className="absolute center left-10 bottom-0 -translate-y-1/2 text-xl"
        >
          ◀
        </button>
        <button
          onClick={() => setRotation(rotation - rotationAngle)}
          className="absolute center right-10 bottom-0 -translate-y-1/2 text-xl"
        >
          ▶
        </button>*/}
      </div>
    </Card>
  );
}
