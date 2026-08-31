// This file changes the default calendar component from 
// external react-big-calendar component.
// That's why I don't add specific type-validation for all props etc.
// I assume that the component does it correctly.

// This file adds the icons to the calendar.

import dayjs from "dayjs";
import PropTypes from 'prop-types';

export default function CustomDateHeader(
  { label, drilldownView, onDrillDown, date, cleaningDays, cleaningAllowed } :
  {
    cleaningDays: Set<string>,
    cleaningAllowed: boolean,
    label: any,
    date: any,
    drilldownView: any,
    onDrillDown: any,
  }
) {
  const cleaningToday = cleaningDays.has(dayjs(date).format("YYYY-MM-DD"));

  if (!drilldownView) {
    return (<span>{ label }</span>)
  }

  return (
    <div className="flex justify-between ml-2">
      <div>
        { cleaningToday && cleaningAllowed &&
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