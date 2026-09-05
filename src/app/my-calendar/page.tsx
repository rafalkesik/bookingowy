import { CalendarComponent } from "@/components/CalendarComponent";
import { verifyAdmin } from "@/lib/auth/session";
import { getRbcEvents } from "@/lib/calendarData";
import { fetchCleaningEventsFromDB } from "@/lib/cleaningEvents";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Bookingowy | Mój kalendarz",
  description: "Przeglądaj twój kalendraz zintegrowany z Hostex. \
                Zarządzaj sprzątaniami i dostawami prania."
}

export default async function MyCalendar() {
  if (!await verifyAdmin()) {
    notFound();
  }

  const localStorageKey = "cleaning_events";
  const rbcHostexEvents = await getRbcEvents();
  const cleaningEvents = await fetchCleaningEventsFromDB();
  
  return (
    <div className="page-background">
      <main className="main-class">
        <h1 className="hero-text mb-10">
          Mój kalendarz
        </h1>
        
        <CalendarComponent
          events={rbcHostexEvents}
          cleaningEventsFromDB={cleaningEvents}
          localStorageKey={localStorageKey}
        />  

        <h2 className="text-2xl mt-10 mb-5 text-center md:text-start">
          O moim kalendarzu
        </h2>
        <p className="paragraph">
          Mój kalendarz przedstawia najświeższe
          rezerwacje z systemu Hostex.
        </p>
        <p className="paragraph mt-2">
          Niedługo możliwe będzie wyświetlenie szczegółów rezerawcji,
          oraz planowanie sprzątań i dostaw prania. 
        </p>
        <p className="paragraph mt-2">
          Funkcjonalność planowania sprzątań jest na 
          razie dostępna w testowym kalendarzu.
        </p>
      </main>
    </div>
  );
}