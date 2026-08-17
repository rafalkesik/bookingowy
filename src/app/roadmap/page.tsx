import Roadmap from "@/components/Roadmap/Roadmap";
import Link from "next/link";

type SearchParamProps = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function RoadmapPage({ searchParams }: SearchParamProps) {
  const params = await searchParams;

  return (
    <div className="page-background">
      <main className="main-class">
        <Link href="/" className="text-zinc-600">
          ← Powrót
        </Link>

        <Roadmap searchParams={params} />
      </main>
    </div>
  );
}