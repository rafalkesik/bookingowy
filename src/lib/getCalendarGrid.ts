export default function getCalendarGrid(year: number, month: number) {
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const daysInPreviousMonth = new Date(year, month, 0).getDate();
  const firstWeekday = new Date(year, month, 1).getDay();
  const lastWeekday = new Date(year, month + 1, 0).getDay();

  const lastMonthTrailingDaysArray = Array.from(
    { length: (firstWeekday - 1) },
    (v, i) => (daysInPreviousMonth - firstWeekday + 2) + i
  );
  const daysInMonthArray = Array.from(
    { length: daysInMonth },
    (v, i) => i + 1
  );
  const nextMonthTrailingDaysArray = Array.from(
    { length: (7 - lastWeekday) },
    (v, i) => i + 1
  );

  return {
    lastMonthTrailingDaysArray,
    daysInMonthArray,
    nextMonthTrailingDaysArray
  };
}