import type { Metadata } from "next";
import { CalendarComponent } from "@/components/MyCalendar";
import { SampleRbcEvents } from "@/lib/calendarData";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kalendarz",
  description: "Kalendarz rezerwacji z widokiem sprzątania, dostaw prania.",
};

export default function CalendarPage() {
  const rbcEvents = SampleRbcEvents;

  console.log("Załadowano eventów: ", rbcEvents.length);

  return (
    <div className="page-background">
      <main className="main-calendar-class">
        <Link href="/" className="text-zinc-600">
          ← Powrót
        </Link>
        <p className="font-semibold">
          Lorem ipsum
        </p>
        <CalendarComponent events={rbcEvents}/>
      </main>
    </div>
  )
}
