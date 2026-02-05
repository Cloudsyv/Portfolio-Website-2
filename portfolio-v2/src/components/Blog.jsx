import Image from "next/image";
import Card from "@/components/Card";
import { blogPosts } from "@/data/blogPosts";

export default function Blog() {
  return (
    <Card id="blog">
      <h2 className="text-2xl font-semibold mb-4">
        Blog Posts{" "}
        <span className="text-(--subtle-red)">[{blogPosts.length}]</span>
      </h2>

      {blogPosts.map((post, index) => (
        <div key={index} className="mb-6">
          <p className="text-sm text-(--text-color3)">{post.date}</p>
          <a
            href={post.url}
            className="text-(--text-color2) underline hover:text-(--subtle-green) transition duration-150 ease-in-out"
          >
            {post.title}
          </a>
          {/*<p className="mt-3 text-sm text-(--dark-gray)">{post.description}</p>*/}
        </div>
      ))}
    </Card>
  );
}
