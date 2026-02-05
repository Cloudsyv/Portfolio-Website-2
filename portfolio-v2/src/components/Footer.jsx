import NavLinks from "@/components/NavLinks";

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden pt-20">
      {/* Gradient */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-40 
                   bg-gradient-to-t from-[#0f0f0f] to-transparent 
                   pointer-events-none transform scale-x-[1.5]"
        style={{ borderRadius: "50% 50% 0 0 / 100% 100% 0 0" }}
      />

      {/* Footer */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-(--text-color) opacity-70 text-sm">
          &copy; {new Date().getFullYear()} Izaiah Coleman. All rights reserved.
        </p>

        <div className="flex flex-col items-center md:items-end">
          <NavLinks color="text-(--text-color)" textSize="text-sm" />
          <p className="mt-2 text-[10px] tracking-widest opacity-30 uppercase font-mono">
            Grounded in Clouds
          </p>
        </div>
      </div>
    </footer>
  );
}
