import { CalendarComponent } from "@/components/CalendarComponent";
import { verifyAdmin } from "@/lib/auth/session";
import { getRbcEvents } from "@/lib/calendarData";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Bookingowy | Mój kalendarz",
  description: "Przeglądaj twój kalendraz zintegrowany z Hostex. Zarządzaj sprzątaniami i dostawami prania."
}

export default async function MyCalendar() {
  if (!await verifyAdmin()) {
    notFound();
  }

  const rbcHostexEvents = await getRbcEvents();
  
  return (
    <div className="page-background">
      <main className="main-class">
        <h1 className="hero-text">
          Mój kalendarz
        </h1>
        <CalendarComponent events={rbcHostexEvents}/>     
      </main>
    </div>
  );
}