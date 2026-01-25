import Image from "next/image";
import Card from "@/components/Card";
import { blogPosts } from "@/data/blogPosts";

export default function Blog() {
  return (
    <Card id="blog" color="bg-(--light-gray)">
      <h2 className="text-2xl text-(--off-black) font-semibold mb-4">
        Blog Posts{" "}
        <span className="text-(--subtle-red)">[{blogPosts.length}]</span>
      </h2>

      {blogPosts.map((post, index) => (
        <div key={index} className="mb-6">
          <p className="text-sm text-(--dark-gray)">{post.date}</p>
          <a
            href={post.url}
            className="text-(--off-black) underline hover:text-(--subtle-green) transition duration-150 ease-in-out"
          >
            {post.title}
          </a>
          {/*<p className="mt-3 text-sm text-(--dark-gray)">{post.description}</p>*/}
        </div>
      ))}
    </Card>
  );
}
