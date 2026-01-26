import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Analytics from "@/components/Analytics";
import ProjectCarousel from "@/components/ProjectCarousel";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";
import Background from "@/components/Background";

export default function Home() {
  return (
    <div className="relative flex min-h-screen items-start justify-center bg-(--off-white) font-mono">
      <Background />
      <main className="relative z-10 mx-auto w-full max-w-225 py-16 px-8 flex flex-col items-center justify-between top-0 bottom-auto">
        <Navbar />
        <Hero />
        <ProjectCarousel />
        <Blog />
        <Analytics />
        <Footer />
      </main>
    </div>
  );
}
