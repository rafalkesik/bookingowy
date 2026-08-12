import type { Metadata } from "next";
import { MyCalendar } from "@/components/myCalendar";
import { getRbcEvents } from "@/lib/calendarData";

export const metadata: Metadata = {
  title: "Kalendarz",
  description: "Kalendarz rezerwacji z widokiem sprzątania, dostaw prania.",
};

export default async function CalendarPage() {
  const rbcEvents = await getRbcEvents();

  console.log("Załadowano eventów: ", rbcEvents.length);

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans">
      <main className="flex flex-1 w-full max-w-5xl flex-col items-center gap-10 pt-15 pb-32 px-16 bg-white sm:items-start">
        <a href="/" className="text-zinc-600">
          ← Powrót
        </a>
        <p className="font-semibold">
          Lorem ipsum
        </p>
        <MyCalendar events={rbcEvents}/>
      </main>
    </div>
  )
}
