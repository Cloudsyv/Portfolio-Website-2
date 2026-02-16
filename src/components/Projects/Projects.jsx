import Card from "@/components/Util/Card";
import { getAllPosts } from "@/lib/posts";
import ProjectsList from "./ProjectsList"; // Import the client part

export default function Projects() {
  const posts = getAllPosts("src/content/projects");

  return (
    <Card id="projects">
      <h2 className="mb-6 text-sm md:text-base font-bold uppercase tracking-[0.3em] text-zinc-500 border-b border-white/5 pb-2 w-fit">
        Projects
      </h2>

      <ProjectsList posts={posts} />
    </Card>
  );
}
