import Card from "@/components/Card";
import { blogPosts } from "@/data/blogPosts";
import Link from "next/link";

export default function Blog() {
  return (
    <Card id="blog">
      <h2 className="text-sm md:text-base font-bold uppercase tracking-[0.3em] text-zinc-500 border-b border-white/5 pb-2 w-fit mb-6">
        Blog
      </h2>

      {/* List */}
      <div className="flex flex-col gap-0 mb-4">
        {blogPosts.map((post, index) => (
          <Link key={post.slug || index} href={`/blog/${post.slug}`}>
            <Card
              margin="mb-6"
              className="group hover:border-(--subtle-blue2) transition-all duration-300"
              divClassName="px-6 py-5"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="text-lg font-bold text-zinc-200 group-hover:text-(--subtle-blue2) transition-all">
                      {post.title}
                    </h3>
                  </div>

                  <p className="text-sm text-zinc-500 line-clamp-1 font-medium italic">
                    {post.description}
                  </p>
                </div>

                <div className="flex items-center gap-6 self-end md:self-center">
                  <span className="text-xs font-mono text-zinc-600 group-hover:text-zinc-400 transition-colors whitespace-nowrap">
                    [{post.date}]
                  </span>
                  <span className="hidden md:block text-zinc-700 group-hover:text-(--subtle-blue) group-hover:translate-x-1 transition-all">
                    →
                  </span>
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </Card>
  );
}
