'use client'

import { Calendar, View, Views, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css"
import { HTMLAttributes, useCallback, useState } from "react";

const localizer = momentLocalizer(moment)

const events = [
  {
    start: moment().toDate(),
    end: moment()
      .add(1, "days")
      .toDate(),
    title: "Booking.com"
  }
]
// const views = Object.values(Views);

export const MyCalendar = (props: HTMLAttributes<HTMLDivElement>) => {
  const [date, setDate] = useState(new Date());
  const [view, setView] = useState<View>(Views.MONTH)

  const onNavigate = useCallback((newDate: Date) => setDate(newDate), []);
  const onView = useCallback((newView: View) => setView(newView), []);
  
  return (
    <div className="h-96 w-full" {...props}>
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