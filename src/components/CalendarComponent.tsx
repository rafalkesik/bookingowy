'use client'

import { Calendar, View, Views, dayjsLocalizer } from "react-big-calendar";
import dayjs from "dayjs";
import polishLocale from "dayjs/locale/pl"
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useCallback, useEffect, useMemo, useState } from "react";
import { RbcReservation } from "@/types/hostex";
import CalendarModal from "./react-big-calendar/CalendarModal";
import CustomDateHeader from "./react-big-calendar/CustomDateHeader"
import { fetchCleaningEventsFromDB } from "@/lib/cleaningEvents";
import type { CleaningEvent as CleaningEventType } from "../../generated/prisma";

dayjs.locale(polishLocale)
const localizer = dayjsLocalizer(dayjs);

export type slotInfoType = {
  start: Date;
  end: Date;
  slots: Array<Date>;
  action: "select" | "click" | "doubleClick";
  box?: { x: number; y: number; clientX: number; clientY: number };
}

// Used to create custom views:
// const views = Object.values(Views);

export const CalendarComponent = ({events, cleaningEvents }: {
  events: RbcReservation[],
  cleaningEvents: Set<Date>,
}) => {
  const [date, setDate] = useState(new Date());
  const [view, setView] = useState<View>(Views.MONTH);
  const [modalOn, setModalOn] = useState<boolean>(false);
  const [selectedSlot, setSelectedSlot] = useState<slotInfoType | null>(null);
  const [cleaningDays, setCleaningDays] = useState<Set<Date>>(cleaningEvents);

  const onNavigate = useCallback((newDate: Date) => setDate(newDate), []);
  const onView = useCallback((newView: View) => setView(newView), []);

  console.log("*** cleaning events: ", cleaningDays);

  const handleSelectSlot = (
    slotInfo: slotInfoType
  ) => {
    const oneDayClicked = slotInfo?.action === "click";
    oneDayClicked && setModalOn(true);
    setSelectedSlot(slotInfo);
  }

  const closeModal = () => {
    setModalOn(false);
    setSelectedSlot(null);
  }

  return (
    <div className="calendar-container">
      { modalOn && <CalendarModal closeModal={closeModal} slotInfo={selectedSlot} /> }
      <Calendar
        localizer={localizer}
        events={events}
        // views={views}
        date={date}
        view={view}
        onNavigate={onNavigate}
        onView={onView}
        culture="pl"
        selectable={true}
        onSelectSlot={handleSelectSlot}
        components={{
          month: {
            // dateHeader: CustomDateHeader
            dateHeader: (props) => <CustomDateHeader {...props} cleaningDays={cleaningDays} />
          }
        }}
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