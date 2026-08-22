import Roadmap from "@/components/Roadmap/Roadmap";
import { Metadata } from "next";
import Link from "next/link";

type SearchParamProps = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export const metadata: Metadata = {
  title: "Bookingowy | Roadmapa",
  description: "Roadmapa aplikacji Bookingowy. Przedstawia plan rozwoju aplikacji."
}

export default async function RoadmapPage({ searchParams }: SearchParamProps) {
  const params = await searchParams;

  return (
    <div className="page-background">
      <main className="main-class">
        <Link href="/" className="text-zinc-600 ml-5 mb-5">
          ← Powrót
        </Link>

        <Roadmap searchParams={params} />
      </main>
    </div>
  );
}