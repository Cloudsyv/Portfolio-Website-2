import Card from "@/components/Util/Card";
import Age from "./Age";
import Mastery from "./Mastery";
import ProjectCount from "./ProjectCount";
import WebsiteUpdate from "./WebsiteUpdate";

export default function Analytics() {
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

        <ProjectCount />
        <WebsiteUpdate />
        <Mastery />
      </div>

      <p className="mt-8 text-[10px] font-mono text-zinc-600 italic">
        * Mastery calculated via (Total Hours × Avg. Difficulty × Avg. Autonomy)
      </p>
    </Card>
  );
}
