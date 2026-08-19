import { Metadata } from "next";
import Link from "next/link";
import { UsersTable } from "@/components/UsersTable";

export const metadata: Metadata = {
  title: "Użytkownicy"
}

export default function UsersPage() {
  return (
    <div className="page-background">
      <main className="main-class">
        <Link href="/" className="text-zinc-600">
          ← Powrót
        </Link>

        <h1 className="hero-text">Użytkownicy</h1>
        <UsersTable />
      </main>
    </div>
  )
}