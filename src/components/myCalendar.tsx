'use client'

import { Calendar, View, Views, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { HTMLAttributes, useCallback, useState } from "react";
import { events } from "./calendarData";

const localizer = momentLocalizer(moment)

// Used to create custom views:
// const views = Object.values(Views);

export const MyCalendar = (props: HTMLAttributes<HTMLDivElement>) => {
  const [date, setDate] = useState(new Date());
  const [view, setView] = useState<View>(Views.MONTH)

  const onNavigate = useCallback((newDate: Date) => setDate(newDate), []);
  const onView = useCallback((newView: View) => setView(newView), []);
  
  return (
    <div className="h-130 w-full" {...props}>
      <Calendar 
        localizer={localizer}
        events={events}
        // views={views}
        date={date}
        view={view}
        onNavigate={onNavigate}
        onView={onView}
      />
    </div>
  )
}