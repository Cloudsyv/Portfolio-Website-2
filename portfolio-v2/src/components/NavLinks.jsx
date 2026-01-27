import Image from "next/image";
import Card from "@/components/Card";

export default function NavLinks({
  color = "text-(--subtle-blue)",
  textSize = "text-sm",
}) {
  return (
    <div className={`flex flex-wrap gap-3 ${textSize} font-medium ${color}`}>
      <a
        href="/#hero"
        className="hover:underline hover:text-(--subtle-green) transition duration-150 ease-in-out"
      >
        About
      </a>
      <a>|</a>
      <a
        href="/#projects"
        className="hover:underline hover:text-(--subtle-green) transition duration-150 ease-in-out"
      >
        Projects
      </a>
      <a>|</a>
      <a
        href="/#blog"
        className="hover:underline hover:text-(--subtle-green) transition duration-150 ease-in-out"
      >
        Blog
      </a>
      <a>|</a>
      <a
        href="/#analytics"
        className="hover:underline hover:text-(--subtle-green) transition duration-150 ease-in-out"
      >
        Analytics
      </a>
    </div>
  );
}
