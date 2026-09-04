import dayjs from "dayjs";

export const CopyCleaningEventsButton = ({events}: {events: Set<string>}) => {
  const copyEventsToClipboard = () => {
    const eventsInMonth = Array.from(events).filter((event) => {
      const daysDifference = dayjs(event).diff(dayjs(), 'day')
      return (
        daysDifference > 0 && daysDifference < 30
      )
    }); 

    navigator.clipboard.writeText(eventsInMonth.sort().join("\n"));
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