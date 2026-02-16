import { getPostBySlug } from "@/lib/posts";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import Card from "@/components/Util/Card";

export default async function BlogPage({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug, "src/content/blog");

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen py-10 px-4 md:px-0">
      <Card>
        {/* Header Section */}
        <header className="mb-12 border-b border-white/10 pb-8">
          <div className="flex flex-wrap items-center gap-y-2 gap-x-4 mb-6">
            {/* Dates and Read Time */}
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest">
              <time className="text-sky-400" dateTime={post.publishDate}>
                {post.publishDate}
              </time>

              {post.updatedDate && (
                <span className="text-zinc-500">[UPD: {post.updatedDate}]</span>
              )}

              <span className="text-zinc-500 mx-1">|</span>

              <span className="text-zinc-300">{post.readingTime}</span>
            </div>

            {/* Tags */}
            {post.tags && (
              <div className="flex gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono text-zinc-500 italic"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}
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
