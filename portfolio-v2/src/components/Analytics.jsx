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
        <Card color="bg-(--subtle-green2)" margin="mb-4">
          Stat []: Value
        </Card>
      </div>
    </Card>
  );
}
