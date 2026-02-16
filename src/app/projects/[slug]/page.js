import { getPostBySlug } from "@/lib/posts";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import Card from "@/components/Util/Card";
import LanguageList from "@/components/Util/LanguageList";
import Image from "next/image";

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug, "src/content/projects");

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      <Card>
        {/* Header Section */}
        <header className="mb-12 border-b border-white/10 pb-8">
          <div className="flex flex-wrap items-center gap-y-2 gap-x-4 mb-6">
            {/* Dates and Read Time */}
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest">
              <time className="text-sky-400" dateTime={post.startDate}>
                {post.startDate}
              </time>

              {post.endDate && (
                <span className="text-zinc-500">[TO: {post.endDate}]</span>
              )}

              <span className="text-zinc-500 mx-1">|</span>

              <span className="text-zinc-300">{post.readingTime}</span>
            </div>

            <LanguageList project={post} size={18} />
          </div>

          <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-6 border border-white/5 bg-zinc-900">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            {post.title}
          </h1>

          <p className="text-lg md:text-xl font-medium text-zinc-300 mb-6">
            By {post.author}
          </p>

          <p className="text-xl text-zinc-400 leading-relaxed italic border-l-2 border-sky-500/50 pl-4">
            {post.description}
          </p>
        </header>

        {/* Content */}
        <article
          className="prose prose-invert prose-cactus max-w-none 
          prose-headings:font-bold prose-headings:tracking-tight
          prose-a:text-sky-400 prose-a:no-underline hover:prose-a:underline
          prose-code:text-pink-400 prose-code:bg-zinc-800 prose-code:px-1 prose-code:rounded
          prose-pre:bg-zinc-900/50 prose-pre:border prose-pre:border-white/10
          prose-img:rounded-xl"
        >
          <MDXRemote source={post.content} />
        </article>
      </Card>
    </main>
  );
}
