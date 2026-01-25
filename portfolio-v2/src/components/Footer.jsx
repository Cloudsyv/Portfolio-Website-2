import NavLinks from "@/components/NavLinks";

export default function Footer() {
  return (
    <footer className="w-full text-(--off-black) py-6 text-start text-sm flex flex-row justify-between items-center">
      <p>
        &copy; {new Date().getFullYear()} Izaiah Coleman. All rights reserved.
      </p>
      <NavLinks color="text-(--off-black)" textSize="text-sm" />
    </footer>
  );
}
