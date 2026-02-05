"use client";

import Image from "next/image";
import Card from "@/components/Card";
import { projects } from "@/data/projectData";
import { languageImages } from "@/data/languageImages";
import { useEffect, useState } from "react";
import Age from "@/components/Age";
//import { RadarChart } from "@mui/x-charts/RadarChart";

const MasteryConversion = {
  10: "Familiar",
  50: "Beginner",
  150: "Novice",
  400: "Intermediate",
  800: "Proficient",
  1500: "Advanced",
  3000: "Expert",
  4000: "Master",
};

export default function Analytics() {
  let MasteryList = {
    "Anime Watching": {},
  };

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

  const getLanguageDifficultyAutonomy = (language) => {
    let totalDifficulty = 0; // Example value
    let totalAutonomy = 0;
    projects.forEach((project) => {
      if (project.languages.includes(language)) {
        totalDifficulty += project.ObjectiveDifficulty;
        totalAutonomy += project.Autonomy;
      }
    });
    return totalDifficulty * totalAutonomy;
  };

  /* Mastery formula (Hours * Objective difficulty * Autonomy)
  120 * 10 * 2 = 2400
  Autonomy (1-2): .5 Guided, 1 = Independent, 1.5 = Designing+Refactoring+Optimizing, 2 = Innovation
  Objective Difficulty (1-10)
  */

  return (
    <Card id="analytics">
      <h2 className="text-2xl font-semibold mb-4">Analytics</h2>

      <div className="flex flex-wrap gap-4 text-(--text-color2)">
        {/* Age */}
        <Card color="bg-(--subtle-blue2)/70" margin="mb-4">
          Time spent alive [Age]:{" "}
          <span className="font-bold">{<Age />} years</span>
        </Card>

        {/* Mastery */}
        <Card color="bg-(--subtle-red2)/70" margin="mb-4">
          <span className="font-bold">Mastery</span>

          {/* Language Mastery */}
          {Object.entries(languageImages).map(
            ([languageName, languageData]) => {
              const hours = getLanguageHours(languageName);
              const mastery =
                hours * getLanguageDifficultyAutonomy(languageName); // Example values for difficulty and autonomy

              return (
                <div className="flex items-start gap-2" key={languageName}>
                  <Image
                    key={languageName}
                    src={languageData.src}
                    alt={languageData.alt}
                    width={16}
                    height={16}
                    className="rounded bg-(--off-white) p-0.5"
                  />
                  {languageName}:{" "}
                  <span className="font-bold">{mastery.toFixed(2)}</span>
                  <span className="text-(--dark-gray)"> ({hours}h)</span>
                </div>
              );
            },
          )}
        </Card>

        {/* Placeholder
        <RadarChart
          height={300}
          series={[
            { label: "Lisa", data: [120, 98, 86, 99, 85, 65], fillArea: true },
          ]}
          radar={{
            metrics: [
              { name: "Math", max: 120 },
              { name: "Chinese", max: 120 },
              { name: "English", max: 120 },
              { name: "Geography", max: 120 },
              { name: "Physics", max: 120 },
              { name: "History", max: 120 },
            ],
          }}
        />*/}
      </div>
    </Card>
  );
}
