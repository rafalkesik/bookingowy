import { Metadata } from "next";
import { UsersTable } from "@/components/UsersTable";
import { verifyAdmin } from "@/lib/auth/session";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Bookingowy | Użytkownicy",
  description: "Zarządzaj użytkownikami z panelu admina."
}

export default async function UsersPage() {
  if (!await verifyAdmin()) {
    notFound();
  }

  return (
    <div className="page-background">
      <main className="main-class">
        <h1 className="hero-text mb-10">Użytkownicy</h1>
        <UsersTable />
      </main>
    </div>
  )
}