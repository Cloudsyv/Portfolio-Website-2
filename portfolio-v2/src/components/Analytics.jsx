"use client";

import { useEffect, useState } from "react"; // Added hooks
import Image from "next/image";
import Card from "@/components/Card";
import { projects } from "@/data/projectData";
import { languageImages } from "@/data/languageImages";
import Age from "@/components/Age";

export default function Analytics() {
  const [lastUpdate, setLastUpdate] = useState("Loading...");

  useEffect(() => {
    fetch(
      "https://api.github.com/repos/Cloudsyv/Portfolio-Website-2/commits/main",
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.commit?.committer?.date) {
          const date = new Date(data.commit.committer.date);

          const formattedDate = new Intl.DateTimeFormat("en-US").format(date);
          setLastUpdate(formattedDate);
        }
      })
      .catch(() => setLastUpdate("Offline"));
  }, []);

  const getLanguageStats = (language) => {
    let totalHours = 0;
    let totalMastery = 0;

    projects.forEach((project) => {
      if (project.languages.includes(language)) {
        totalHours += project.TimeSpent;
        const projectScore =
          project.TimeSpent * project.ObjectiveDifficulty * project.Autonomy;
        totalMastery += projectScore;
      }
    });
    return { hours: totalHours, mastery: totalMastery };
  };

  const sortedLanguages = Object.entries(languageImages)
    .map(([name, data]) => ({ name, ...data, ...getLanguageStats(name) }))
    .filter((lang) => lang.mastery > 0)
    .sort((a, b) => b.mastery - a.mastery);

  return (
    <Card id="analytics">
      <h2 className="mb-10 text-sm md:text-base font-bold uppercase tracking-[0.3em] text-zinc-500 border-b border-white/5 pb-2 w-fit">
        Analytics
      </h2>

      {/* Age */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="max-h-fit flex flex-col" margin="mb-0">
          <p className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-2">
            Age
          </p>
          <div className="text-3xl font-bold text-white">
            <Age />{" "}
            <span className="text-sm text-zinc-500 font-normal underline decoration-white/10">
              years
            </span>
          </div>
        </Card>

        {/* Project Count */}
        <Card className="max-h-fit flex flex-col" margin="mb-0">
          <p className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-2">
            Total Builds
          </p>
          <div className="text-3xl font-bold text-white">
            {projects.length}{" "}
            <span className="text-sm text-zinc-500 font-normal underline decoration-white/10">
              projects
            </span>
          </div>
        </Card>

        {/* Website Update */}
        <Card
          className="max-h-fit flex flex-col border-(--subtle-blue)/20"
          margin="mb-0"
        >
          <p className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-2">
            Last Website Update
          </p>
          <div className="text-3xl font-bold text-(--subtle-blue2)">
            {lastUpdate}
          </div>
        </Card>

        {/* Mastery Section */}
        <Card className="md:col-span-3 max-h-fit" margin="mb-0">
          <p className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-6">
            Language Mastery Index
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-8">
            {sortedLanguages.map((lang) => (
              <div key={lang.name} className="group">
                {/* ... (Your progress bar mapping code) ... */}
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Image
                      src={lang.src}
                      alt={lang.alt}
                      width={18}
                      height={18}
                      className="rounded-sm grayscale group-hover:grayscale-0 transition-all"
                    />
                    <span className="text-sm font-semibold text-zinc-300 group-hover:text-white">
                      {lang.name}
                    </span>
                  </div>
                  <span className="text-xs font-mono text-zinc-500">
                    {lang.hours}h
                  </span>
                </div>
                <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
                  <div
                    className="h-full bg-(--subtle-blue) opacity-50 group-hover:opacity-100 transition-all duration-500"
                    style={{
                      width: `${Math.min((lang.mastery / 2000) * 100, 100)}%`,
                    }}
                  />
                </div>
                <p className="text-[10px] font-mono text-zinc-600 mt-2 uppercase tracking-tighter">
                  XP: {lang.mastery.toFixed(0)}
                </p>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <p className="mt-8 text-[10px] font-mono text-zinc-600 italic">
        * Mastery calculated via (Total Hours × Avg. Difficulty × Avg. Autonomy)
      </p>
    </Card>
  );
}
