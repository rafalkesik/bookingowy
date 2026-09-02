import type { Metadata } from "next";
import { CalendarComponent } from "@/components/CalendarComponent";
import { SampleRbcEvents } from "@/lib/calendarData";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Bookingowy | Demo kalendarza",
  description: "Przetestuj aplikację Bookingowy na testowych danych. Zarządzaj sprzątaniami i dostawami prania automatycznie.",
};

export default async function CalendarPage() {
  const rbcEvents = SampleRbcEvents;  

  return (
    <div className="page-background">
      <main className="max-w-5xl w-full flex">
        <div className="main-calendar-class">
          <Link href="/" className="text-zinc-600 mb-10">
            ← Powrót
          </Link>
          <h1 className="hero-text mb-10">
            Testowy kalendarz
          </h1>

          <CalendarComponent
            events={rbcEvents}
          />
          
          <h2 className="text-2xl mt-10 mb-5 text-center md:text-start">O aplikacji</h2>
          <p className="paragraph">
            Kalendarz umożliwia wyświetlenie rezerwacji z sytemu Hostex i
            zaplanowanie sprzątania w jednym miejscu.
          </p>
          <p className="paragraph mt-2">
            Niedługo możliwe będzie wyświetlenie szczegółów rezerwacji,
            oraz automatyczne planowanie sprzątań i dostaw prania.
          </p>
        </div>
      </main>
    </div>
  )
}
