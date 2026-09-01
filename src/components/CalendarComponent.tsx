'use client'

import { Calendar, View, Views, dayjsLocalizer } from "react-big-calendar";
import dayjs from "dayjs";
import polishLocale from "dayjs/locale/pl"
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useCallback, useEffect, useState } from "react";
import { RbcReservation } from "@/types/hostex";
import CalendarModal from "./react-big-calendar/CalendarModal";
import CustomDateHeader from "./react-big-calendar/CustomDateHeader"
import { useLocalStorageSet } from "@/hooks/useLocalStorageSet";

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

export const CalendarComponent = ({
  events, cleaningEventsFromDB, saveInDB,
}: {
  events: RbcReservation[],
  cleaningEventsFromDB?: Set<string>,
  saveInDB: boolean,
}) => {
  const [date, setDate] = useState(new Date());
  const [view, setView] = useState<View>(Views.MONTH);
  const [modalOn, setModalOn] = useState<boolean>(false);
  const [selectedSlot, setSelectedSlot] = useState<slotInfoType | null>(null);
    const [cleaningDays, toggleCleaningEvent, saveFromDB] = useLocalStorageSet<string>("cleaning_events");
    // If cleaning events from DB is passed, set them in local storage to cleaningDays var.
    useEffect(() => {
      if (cleaningEventsFromDB) {
        console.log("Attempting to save cleaning events from db to local storage...")
        saveFromDB(cleaningEventsFromDB);
        console.log("✅ Saved cleaning events from db to local storage.")
      }
    }, [cleaningEventsFromDB]);

  const onNavigate = useCallback((newDate: Date) => setDate(newDate), []);
  const onView = useCallback((newView: View) => setView(newView), []);

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
      {
        modalOn &&
        <CalendarModal
          closeModal={closeModal}
          slotInfo={selectedSlot}
          cleaningDays={cleaningDays}
          toggleCleaningEventLocally={toggleCleaningEvent}
          saveInDB={saveInDB}
        />
      }
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