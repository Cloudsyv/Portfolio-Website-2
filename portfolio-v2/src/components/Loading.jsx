import Image from "next/image";
import Card from "@/components/Card";
import Age from "@/components/Age";

export default function Hero() {
  return (
    <Card id="hero">
      <h2 className="text-2xl text-(--text-color) font-semibold mb-4">About</h2>

      <p className="text-sm font-medium text-(--text-color2)">
        Hey I'm{" "}
        <span className="text-lg font-semibold text-(--subtle-blue)">
          Izaiah!
        </span>{" "}
        I'm a{" "}
        <span className="text-(--subtle-green)">
          <Age />
        </span>{" "}
        year-old aspiring Full-Stack Developer with{" "}
        <span className="text-lg font-semibold text-(--subtle-red)">4+</span>{" "}
        years of programming experience, primarily in game development.
      </p>

      <p className="mt-3 text-sm text-(--text-color2)">
        I enjoy making unique and ambitious projects.
      </p>

      <p className="mt-3 text-sm text-(--text-color2)">
        I'm currently focused on making 3 different projects with Lua, C, and
        Javascript.
      </p>

      <a
        href="#analytics"
        className="mt-4 inline-block text-sm font-medium text-(--subtle-blue)  hover:underline hover:text-(--subtle-green) transition duration-150 ease-in-out"
      >
        View my tech stack analytics →
      </a>
    </Card>
  );
}
