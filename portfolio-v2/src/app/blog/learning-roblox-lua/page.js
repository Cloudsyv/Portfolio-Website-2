import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen items-start justify-center bg-(--off-white) font-mono overflow-y-scroll">
      <main className="mx-auto w-full max-w-225 py-16 px-8 flex flex-col items-center justify-between top-0 bottom-auto">
        <Navbar />
        <Hero />
        <Footer />
      </main>
    </div>
  );
}
