'use client'

import { useState } from "react"
import { DateRange } from "react-day-picker"
import { addDays } from "date-fns"
import getCalendarGrid from "@/lib/getCalendarGrid"

export default function CalendarView() {  
  const now = new Date();
  const { lastMonthTrailingDaysArray, daysInMonthArray, nextMonthTrailingDaysArray} = getCalendarGrid(
    now.getFullYear(),
    now.getMonth()
  )
  
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans">
      <main className="flex flex-1 w-full max-w-5xl flex-col items-center gap-10 pt-15 pb-32 px-16 bg-white sm:items-start">
        <a href="/" className="text-zinc-600">
          ← Powrót
        </a>
        <p className="font-semibold">
          Lorem ipsum
        </p>

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
      </main>
    </div>
  )
}