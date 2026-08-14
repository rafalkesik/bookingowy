import Roadmap from "@/components/Roadmap/Roadmap";
import Link from "next/link";

export default function RoadmapPage() {
  return (
    <div className="grey-background">
      <main className="main-class">
        <Link href="/" className="text-zinc-600">
          ← Powrót
        </Link>

        <Roadmap />
      </main>
    </div>
  );
}