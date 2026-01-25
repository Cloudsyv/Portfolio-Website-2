import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Analytics from "@/components/Analytics";
import ProjectCarousel from "@/components/ProjectCarousel";
import Footer from "@/components/Footer";
import Card from "@/components/Card";
import { blogPosts } from "@/data/blogPosts";
import Post from "./post.mdx";

export default function Home() {
  return (
    <div className="flex min-h-screen items-start justify-center bg-(--off-white) font-mono overflow-y-scroll">
      <main className="mx-auto w-full max-w-225 py-16 px-8 flex flex-col items-center justify-between top-0 bottom-auto">
        <Navbar />
        <Card>
          <h2 className="text-2xl text-(--off-black) font-semibold mb-4">
            Quantum Computing on Game Development
          </h2>
          <p>hi</p>
        </Card>
        <Footer />
      </main>
    </div>
  );
}
