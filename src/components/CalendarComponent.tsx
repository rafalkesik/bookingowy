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
import { slotInfoType } from "@/types/reactBigCalendar";

dayjs.locale(polishLocale)
const localizer = dayjsLocalizer(dayjs);

export const CalendarComponent = ({ events, cleaningEventsFromDB }: {
  events: RbcReservation[],
  cleaningEventsFromDB?: Set<string>,
}) => {
  const [date, setDate] = useState(new Date());
  const [view, setView] = useState<View>(Views.MONTH);
  const onNavigate = useCallback((newDate: Date) => setDate(newDate), []);
  const onView = useCallback((newView: View) => setView(newView), []);
  const [modalOn, setModalOn] = useState<boolean>(false);
  const [selectedSlot, setSelectedSlot] = useState<slotInfoType | null>(null);
  
  const saveCleaningEventsInDB = !!cleaningEventsFromDB;
  const key = saveCleaningEventsInDB ? "cleaning_events" : "test_cleaning_events";
  const [cleaningDays, toggleCleaningEvent, saveFromDB] = useLocalStorageSet<string>(key);
  
  // If cleaning events from DB are passed, set them in local storage.
  useEffect(() => {
    if (saveCleaningEventsInDB) {
      saveFromDB(cleaningEventsFromDB);
    }
  }, [cleaningEventsFromDB]);

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
          saveInDB={saveCleaningEventsInDB}
        />
      }
      <Calendar
        localizer={localizer}
        events={events}
        date={date}
        view={view}
        onNavigate={onNavigate}
        onView={onView}
        culture="pl"
        selectable={true}
        onSelectSlot={handleSelectSlot}
        components={{
          month: {
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