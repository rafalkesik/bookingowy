'use client'

import { Calendar, View, Views, dayjsLocalizer } from "react-big-calendar";
import dayjs from "dayjs";
import polishLocale from "dayjs/locale/pl"
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useCallback, useState } from "react";
import { RbcReservation } from "@/types/hostex";

dayjs.locale(polishLocale)
const localizer = dayjsLocalizer(dayjs);

// Used to create custom views:
// const views = Object.values(Views);

export const CalendarComponent = ({ events }: { events: RbcReservation[]}) => {
  const [date, setDate] = useState(new Date());
  const [view, setView] = useState<View>(Views.MONTH);

  const onNavigate = useCallback((newDate: Date) => setDate(newDate), []);
  const onView = useCallback((newView: View) => setView(newView), []);

  return (
    <div className="calendar-container">
      <Calendar 
        localizer={localizer}
        events={events}
        // views={views}
        date={date}
        view={view}
        onNavigate={onNavigate}
        onView={onView}
        culture="pl"
        messages={{
          month: "Miesiąc",
          week: "Tydzień",
          work_week: "Tydzień roboczy",
          day: "Dzień",
          agenda: "Agenda",
          today: "Dziś",
          previous: "Poprzedni",
          next: "Następny",
        }}
      />
    </div>
  )
}