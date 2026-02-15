import Image from "next/image";
import Card from "@/components/Card";
import NavLinks from "@/components/NavLinks";

export default function Navbar() {
  return (
    <Card
      id="navbar"
      divClassName="flex flex-col md:flex-row items-center justify-between px-6 py-6"
    >
      <a href="/">
        <div className="flex gap-5 items-center mb-4 md:mb-0">
          <div className="relative w-12 h-12">
            <Image
              src="/icon.png"
              alt="Logo"
              fill
              className="rounded-xl object-cover"
            />
          </div>

          <div>
            <div className="text-xl md:text-2xl font-black tracking-tighter text-white">
              IZAIAH<span className="text-(--subtle-blue2)">.DEV</span>
            </div>
            <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-500">
              Full-Stack Developer
            </p>
          </div>
        </div>
      </a>
      <NavLinks />
    </Card>
  );
}
