import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Analytics from "@/components/Analytics";
import Projects from "@/components/Projects";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";
import Background from "@/components/Background";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col items-center font-mono">
      <Background />

      <main className="relative z-10 w-full max-w-225 py-16 px-8 flex flex-col items-center">
        <Navbar />
        <Hero />
        <Projects />
        <Blog />
        <Analytics />
      </main>

      <Footer />
    </div>
  );
}
