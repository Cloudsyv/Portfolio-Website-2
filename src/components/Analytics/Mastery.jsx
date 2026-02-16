import Image from "next/image";
import Card from "@/components/Util/Card";
import { getAllPosts } from "@/lib/posts";
import { languageImages } from "@/data/languageImages";

export default function Mastery() {
  const projects = getAllPosts("src/content/projects");

  const getLanguageStats = (language) => {
    let totalHours = 0;
    let totalMastery = 0;

    projects.forEach((project) => {
      if (project.languages.includes(language)) {
        totalHours += project.timeSpent;
        const projectScore =
          project.timeSpent * project.objectiveDifficulty * project.autonomy;
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
    <>
      {/* Mastery Section */}
      <Card className="md:col-span-3 max-h-fit" margin="mb-0">
        <p className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-6">
          Language Mastery Index
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-8">
          {sortedLanguages.map((lang) => (
            <div key={lang.name} className="group">
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
    </>
  );
}
