import type { Metadata } from "next";
import { CalendarComponent } from "@/components/CalendarComponent";
import { SampleRbcEvents } from "@/lib/calendarData";
import Link from "next/link";
import { fetchCleaningEventsFromDB } from "@/lib/cleaningEvents";
import { prisma } from "@/lib/prisma";

export const metadata: Metadata = {
  title: "Bookingowy | Demo kalendarza",
  description: "Przetestuj aplikację Bookingowy na testowych danych. Zarządzaj sprzątaniami i dostawami prania automatycznie.",
};

export default async function CalendarPage() {
  const rbcEvents = SampleRbcEvents;  
  const cleaningEvents = await fetchCleaningEventsFromDB();

  console.log("Amount of test reservations loaded:", rbcEvents.length);

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
          <CalendarComponent events={rbcEvents} cleaningEvents={cleaningEvents}/>
          <h2 className="text-2xl mt-10 mb-5 text-center md:text-start">O aplikacji</h2>
          <p className="paragraph">
            Kalendarz umożliwia wyświetlenie wszystkich rezerwacji
            w jednym miejscu.
          </p>
          <p className="paragraph mt-2">
            Niedługo możliwe będzie wyświetlenie szczegółów rezerawcji,
            oraz planowanie sprzątań i dostaw prania.
          </p>
        </div>
      </main>
    </div>
  )
}
