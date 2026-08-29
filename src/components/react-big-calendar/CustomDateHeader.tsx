// This file changes the default calendar component from 
// external react-big-calendar component.

// This file adds the icons to the calendar.

import dayjs from "dayjs";

export default function CustomDateHeader(
  { label, drilldownView, onDrillDown, date, cleaningDays } :
  { cleaningDays: Set<string> }
) {
  const cleaningToday = cleaningDays.has(dayjs(date).format("YYYY-MM-DD"));

  if (!drilldownView) {
    return (<span>{ label }</span>)
  }

  return (
    <div className="flex justify-between ml-2">
      <div>
        { cleaningToday &&
          <>
            <span aria-hidden>🧹</span>
            <span className="sr-only">Cleaning scheduled</span>
          </>
        }
      </div>
      <button
        type="button"
        className="rbc-button-link"
        onClick={ onDrillDown }
      >
        { label }
      </button>
    </div>
  )
}