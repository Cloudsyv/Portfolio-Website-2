import Image from "next/image";
import Card from "@/components/Card";

export default function Blog() {
  return (
    <Card id="blog" color="bg-(--light-gray)">
      <h2 className="text-2xl text-(--off-black) font-semibold mb-4">
        Blog Posts
      </h2>

      <p className="mt-3 text-sm text-(--dark-gray)">Text</p>
    </Card>
  );
}
