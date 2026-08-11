'use client'

import getCalendarGrid from "@/lib/getCalendarGrid"

export default function CalendarView() {  
  const now = new Date();
  const { lastMonthTrailingDaysArray, daysInMonthArray, nextMonthTrailingDaysArray} = getCalendarGrid(
    now.getFullYear(),
    now.getMonth()
  )
  
  return (
    <div id="custom-calendar">
      <div id="weekdays-names" className="calendar-grid w-200">
        <div className="py-3 text-center">Pon</div>
        <div className="py-3 text-center">Wt</div>
        <div className="py-3 text-center">Śr</div>
        <div className="py-3 text-center">Czw</div>
        <div className="py-3 text-center">Pt</div>
        <div className="py-3 text-center">Sob</div>
        <div className="py-3 text-center">Ndz</div>
      </div>

      <div className="calendar-grid w-200">
        {lastMonthTrailingDaysArray.map((day) => (
          <div className="text-slate-400 py-3 bg-slate-200 text-center">
            {day}
          </div>
        ))}
        {daysInMonthArray.map((day) => (
          <div className="py-3 font-semibold bg-slate-200 text-center">
            {day}
          </div>
        ))}
        {nextMonthTrailingDaysArray.map((day) => (
          <div className="text-slate-400 py-3 bg-slate-200 text-center">
            {day}
          </div>
        ))}
      </div>          
    </div>
  )
}