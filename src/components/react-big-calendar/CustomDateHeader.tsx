// This component changed the default calendar component from react-big-calendar component.
// Here we add the icons to the calendar.

import dayjs from "dayjs";

export default function CustomDateHeader(
  { label, drilldownView, onDrillDown, date, cleaningDays } :
  { cleaningDays: Set<string> }
) {
  const cleaningToday = cleaningDays.has(dayjs(date).format("YYYY-MM-DD"));
  console.log("Dzisiaj: ", dayjs(date).format("YYYY-MM-DD"));
  console.log("Dnie sprzątania: ", cleaningDays);
  console.log("dzisiaj sprzatanie? ", cleaningToday);

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