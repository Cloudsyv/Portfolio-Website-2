import Image from "next/image";
import Card from "@/components/Util/Card";
import Age from "@/components/Analytics/Age";

export default function Cloud() {
  return (
    <img
      src="/Cloud.png"
      className="absolute top-20 left-10 w-64 opacity-40 animate-cloud-drift"
    />
  );
}
