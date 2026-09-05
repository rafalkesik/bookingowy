import { cleaningEvent } from "@/types/cleaningEvents";
import dayjs from "dayjs";

export const CopyCleaningEventsButton = ({
  events, cleaningObjectsMap
}: {
  events: Set<string>,
  cleaningObjectsMap: Map<string, cleaningEvent>
}) => {
  const copyEventsToClipboard = () => {
    const eventsInMonth = new Map(
      Array.from(cleaningObjectsMap).filter(([date]) => {
        const daysDifference = dayjs(date).diff(dayjs(), 'day');
        return daysDifference > 0 && daysDifference < 30;
      })
      .sort(([dateA], [dateB]) => dateA.localeCompare(dateB))
    );

    const text = Array.from(eventsInMonth.values()).map((object) => {
      return object.date + ", " + object.nights.toString() + "dni, " + object.guests.toString() + "gości"
    }).join("\n");

    navigator.clipboard.writeText(text);
  }
  
  return (
    <div className="flex justify-end">
      <button
        className="outline-1 outline-gray-300 rounded-xs px-3.5 py-1
                   mb-2 hover:bg-gray-200 hover:outline-gray-400
                   hover:cursor-pointer active:bg-gray-300"
        onClick={copyEventsToClipboard}
      >
        🧹 Skopiuj sprzątania
      </button>
    </div>
  )
}