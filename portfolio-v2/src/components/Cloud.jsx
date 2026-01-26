import Image from "next/image";
import Card from "@/components/Card";
import Age from "@/components/Age";

export default function Cloud() {
  return (
    <img
      src="/Cloud.png"
      className="absolute top-20 left-10 w-64 opacity-40 animate-cloud-drift"
    />
  );
}
