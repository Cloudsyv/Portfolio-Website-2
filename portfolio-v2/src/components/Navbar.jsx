import Image from "next/image";
import Card from "@/components/Card";
import NavLinks from "@/components/NavLinks";

export default function Navbar() {
  return (
    <Card
      id="navbar"
      divClassName="flex items-center justify-between px-6 py-4"
    >
      <div className="flex gap-4 items-center">
        <Image src="/icon.png" alt="Logo" width={64} height={64} />
        <div>
          <div className="text-2xl text-(--off-black) font-semibold mb-1">
            Izaiah Coleman
          </div>

          <NavLinks />
        </div>
      </div>
    </Card>
  );
}
