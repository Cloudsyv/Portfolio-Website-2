"use client";

import Image from "next/image";
import Card from "@/components/Card";
import { projects } from "@/data/projectData";
import { languageImages } from "@/data/languageImages";
import { useEffect, useState } from "react";
import Age from "@/components/Age";

export default function Analytics() {
  // Total Project Hours by Language
  const getLanguageHours = (language) => {
    let totalHours = 0;
    projects.forEach((project) => {
      if (project.languages.includes(language)) {
        totalHours += project.TimeSpent;
      }
    });
    return totalHours;
  };

  /* Mastery formula (Hours * Objective difficulty * Autonomy)
  120 * 10 * 2 = 2400
  Autonomy (1-2): .5 Guided, 1 = Independent, 1.5 = Designing+Refactoring+Optimizing, 2 = Innovation
  Objective Difficulty (1-10)
  */

  return (
    <Card id="analytics">
      <h2 className="text-2xl text-(--off-black) font-semibold mb-4">
        Analytics
      </h2>

      <div className="flex flex-wrap gap-4">
        <Card color="bg-(--subtle-blue2)" margin="mb-4">
          Time spent alive [Age]:{" "}
          <span className="font-bold">{<Age />} years</span>
        </Card>
        <Card color="bg-(--subtle-red2)" margin="mb-4">
          <span className="font-bold">Mastery</span>
          <Card color="bg-(--warm-gray)" margin="mt-2">
            Lua
          </Card>
        </Card>
        <Card color="bg-(--subtle-green2)" margin="mb-4">
          Stat []: Value
        </Card>
      </div>
    </Card>
  );
}
