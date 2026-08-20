import { CalendarComponent } from "@/components/MyCalendar";
import { verifyAdmin } from "@/lib/auth/session";
import { getRbcEvents } from "@/lib/calendarData";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Mój kalendarz"
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