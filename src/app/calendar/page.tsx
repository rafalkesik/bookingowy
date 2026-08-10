import type { Metadata } from "next";
import CalendarView from "./calendar-view";

export const metadata: Metadata = {
  title: "Kalendarz",
  description: "Kalendarz rezerwacji z widokiem sprzątania, dostaw prania.",
};

export default function CalendarPage() {
  return (
    <div>
      <CalendarView />
    </div>
  )
}
