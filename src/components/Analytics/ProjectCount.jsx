import Card from "@/components/Util/Card";
import { getAllPosts } from "@/lib/posts";

export default function ProjectCount() {
  const projects = getAllPosts("src/content/projects");

  return (
    <>
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
    </>
  );
}
