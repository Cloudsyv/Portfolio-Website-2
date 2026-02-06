import { blogPosts } from "@/data/blogPosts";
import { notFound } from "next/navigation";
import Image from "next/image";

import Card from "@/components/Card";

export default async function BlogPage({ params }) {
  const { slug } = await params;

  const blogPost = blogPosts.find(
    (b) => b.slug.toLowerCase() === slug.toLowerCase(),
  );

  if (!blogPost) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      <Card>
        {/* Content */}
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-300">{blogPost.description}</p>
        </div>
      </Card>
    </main>
  );
}
