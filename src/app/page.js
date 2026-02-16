import Hero from "@/components/Hero";
import Analytics from "@/components/Analytics/Analytics";
import Projects from "@/components/Projects/Projects";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div>
      <Hero />
      <Projects />
      <Blog />
      <Analytics />
      <Contact />
    </div>
  );
}
