import Image from "next/image";
import Card from "@/components/Card";
import Age from "@/components/Age";

export default function Hero() {
  return (
    <Card id="hero">
      <h2 className="text-sm md:text-base font-bold uppercase tracking-[0.3em] text-zinc-500 mb-6 block border-b border-white/5 pb-2 w-fit">
        About
      </h2>

      <div className="">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6 text-white">
          Hey, I'm <span className="text-(--subtle-blue)">Izaiah.</span>
        </h1>

        <p className="text-lg md:text-2xl font-medium text-zinc-300 leading-relaxed max-w-2xl">
          I'm a <Age /> year-old aspiring{" "}
          <span className="text-(--subtle-green)">Full-Stack Developer</span>{" "}
          with
          <span className="text-(--subtle-red) ml-2">4+ years</span> of
          experience building ambitious projects in game dev and web tech.
        </p>

        <div className="mt-10 flex items-center gap-4">
          <a
            href="#projects"
            className="px-6 py-2 bg-white text-black rounded-full font-bold text-sm hover:bg-zinc-200 transition"
          >
            View Work
          </a>
          <a
            href="#analytics"
            className="text-sm font-mono text-zinc-500 hover:text-(--subtle-blue) transition"
          >
            Stack Analytics →
          </a>
        </div>
      </div>
    </Card>
  );
}
